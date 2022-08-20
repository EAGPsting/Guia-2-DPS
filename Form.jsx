import React, {useState} from 'react';
import Todo from '../components/Todo';
const Form = () => {
    const [todo, setTodo] = useState ({})
    const [cantidad, setCantidad] = useState ({})
    const [todos, setTodos] = useState ([
        {   todo:'0 - Manzanas'},
        {   todo:'0 - Elote'},
        {   todo:'0 - Tomate'}
    ])
const handleChange = e => setTodo({[e.target.name]: e.target.value})
const handleChange1 = e => setCantidad({[e.target.name]: e.target.value})
const handleClick = e => {
    if(Object.keys(todo).length === 0 || Object.keys(cantidad).length === 0 || todo.todo.trim() === '' ||cantidad.cantidadD.trim() === '' )
    {
        alert('el campo no puede estar vacio')
        return
    }
    else
    {
        todo.todo = cantidad.cantidadD + " - " + todo.todo
        setTodos([...todos, todo])
    }
}
const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice, 1)
    setTodos(newTodos)

}
return (
    <>
    <form onSubmit={e => e.preventDefault()}>
        <label> Agregar tarea </label><br/>
        <input type="text" name="todo" onChange={handleChange}/>
        <input type="text" name="cantidadD" onChange={handleChange1}/>
        <button onClick= {handleClick}>agregar</button>

    </form>
    {
        todos.map((value, index) => (
            <Todo todo={value.todo}  key={index} index={index} deleteTodo={deleteTodo}/>))
    }
</>
)
}
export default Form