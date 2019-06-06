const todosLink = "https://raw.githubusercontent.com/asalexanderlee/bootcamp-6/ashley/todos.json";

export const toggleTodo = id => {
  return { type: "TOGGLE_TODO", id };
};
export const addTodo = text => {
  return { type: "ADD_TODO", text };
};
export const pickDueDate = (date, id) => {
  return { type: "PICK_DUE_DATE", date, id };
};
export const deleteTodo = id => {
  return { type: "DELETE_TODO", id };
};
export const addFolder = () => {
  return { type: "ADD_FOLDER" };
};
export const changeFolderName = (text, id) => {
  return { type: "CHANGE_FOLDER_NAME", text, id };
};
export const expandFolder = id => {
  return { type: "EXPAND_FOLDER", id };
};
export const sortAToZ = () => {
  return { type: "SORT_A_TO_Z" };
};
export const sortByDate = () => {
  return { type: "SORT_BY_DATE" };
};
export const loadTodos = todos => {
  return { type: "LOAD_TODOS", todos };
};

//return an action creator that will import todos from our faux "server"
export const importTodos = () => {
  return async dispatch => {
    const todos = await fetch(todosLink, { method: "GET" }).then(res => res.json());
    //if todos exists, convert date strings to date objects
    const convertedTodos = todos !== undefined ? convertDates(todos) : undefined;
    if (convertedTodos) dispatch(loadTodos(convertedTodos));
    else console.error("Failed to fetch todos from server");
  };
};

const convertDates = todos =>
  todos.map(todo => {
    return { ...todo, dueDate: new Date(todo.dueDate) };
  });
