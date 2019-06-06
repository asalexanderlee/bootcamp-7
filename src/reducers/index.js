const initialState = {
  todos: []
};
const defaultTodo = {
  text: "Default todo",
  completed: false,
  dueDate: undefined, //type: Date
  type: "todo"
};
const defaultFolder = {
  text: "Folder Name",
  todos: [],
  expanded: false,
  type: "folder"
};

export default function todoApp(state = initialState, action) {
  //copy state
  state = { ...state };

  //make changes to new state, depending on action type, and return
  switch (action.type) {
    case "TOGGLE_TODO":
      state.todos = state.todos.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
      return state;
    case "ADD_TODO":
      state.todos = [...state.todos, action.todo];
      return state;
    case "PICK_DUE_DATE":
      state.todos = state.todos.map(todo => (todo.id === action.id ? { ...todo, dueDate: action.date } : { ...todo }));
      return state;
    case "DELETE_TODO":
      state.todos = state.todos.filter(todo => todo.id !== action.id);
      return state;
    case "ADD_FOLDER":
      state.todos = [...state.todos, { ...defaultFolder }];
      state.id = state.id + 1;
      return state;
    case "CHANGE_FOLDER_NAME":
      state.todos = state.todos.map(folder => (folder.id === action.id ? { ...folder, text: action.text } : folder));
      return state;
    case "EXPAND_FOLDER":
      state.todos = state.todos.map(
        folder => (folder.id === action.id ? { ...folder, expanded: !folder.expanded } : folder)
      );
      return state;
    case "SORT_A_TO_Z":
      state.todos = [...state.todos.sort((todo1, todo2) => (todo1.text < todo2.text ? -1 : 1))];
      return state;
    case "SORT_BY_DATE":
      state.todos = [...state.todos.sort((todo1, todo2) => todo1.dueDate - todo2.dueDate)];
      return state;
    case "LOAD_TODOS":
      state.todos = [...action.todos];
      return state;
    default:
      return state;
  }
}
