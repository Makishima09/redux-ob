import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../pure/todoList'

//Actions
import { toggleTodo } from '../../store/actions/actions'

//NO ES NECESARIO PINTAR NADA | SOLO NECESITA CONECTAR

// Filter Todo List
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }
}



const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

// We connect State & Dispatch to TodoList's Props
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodosContainer;