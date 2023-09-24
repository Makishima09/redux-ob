import React from 'react'
import { connect } from 'react-redux'
import TodoForm from '../pure/todoForm'
import { addTodo } from '../../store/actions/actions'


const mapStateToProps = (state) => ({}) // Not Necesary

const mapDispatchToProps = (dispatch)  => {
    return {
        submit: (text) => {
            dispatch(addTodo(text))
        }
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
export default TodoFormContainer