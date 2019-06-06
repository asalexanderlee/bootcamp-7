export const toggleTodo = id => {
  return { type: "TOGGLE_TODO", id };
};
export const pickDueDate = (date, id) => {
  return { type: "PICK_DUE_DATE", date, id };
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

//so we don't have to type our headers every time
const headers = (method, body) => ({
  method,
  body: JSON.stringify(body),
  headers: { "content-type": "application/json" }
});

//return an action creator that will import todos from our faux "server"
export const fetchTodos = () => {
  return async dispatch => {
    const todos = await fetch("/todos", headers("GET")).then(res => res.json());
    if (todos) dispatch(loadTodos(todos));
    else console.error("Failed to fetch todos from server");
  };
};

export const addTodo = text => {
  return async dispatch => {
    const isSuccessful = await fetch("/todos", headers("POST", text));
    //if successful, load updated todos into state
    if (isSuccessful) dispatch(fetchTodos());
    else console.error("Unable to post a new todo");
  };
};

export const deleteTodo = _id => {
  return async dispatch => {
    const isSuccessful = await fetch(`/todos/${_id}`, headers("DELETE"));
    //if successful, load updated todos into state
    if (isSuccessful) dispatch(fetchTodos());
    else console.error("Unable to delete the todo");
  };
};
