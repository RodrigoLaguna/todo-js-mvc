
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));
// Cuando solo se pase un argumento se puede resumir a:
// todoList.todos.forEach( crearTodoHtml );

console.log(todoList);