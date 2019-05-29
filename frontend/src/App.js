import React, {useState, useEffect} from 'react';
import './App.css';
import TodoItem from "./components/todoitem"
import itemService from "./services/item"

const App = () => {
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')

    useEffect(() => {
        itemService
            .getAll()
            .then(initialItems => {
                setItems(initialItems)
            })
    }, [])


    const addItems = (event) => {
        const time = new Date()
        event.preventDefault()

        // create item template
        const itemTemplate = {
            name: newItem,
            itemTime: `${time.getHours()}:${time.getMinutes()}`
        }

        itemService
            .create(itemTemplate)
            .then(response => {
                setItems(items.concat(response))
                setNewItem('')
            })
            .catch(error => {console.log(error)})
    }

    const handleItem = (event) => {
        setNewItem(event.target.value)
    }


    const handleRemove = (id) => {
        itemService.remove(id).then(response => {
            setItems(items.filter(item => item.id !== id))
        }).catch(error => {
            console.log(error)
            setItems(items.filter(item => item.id !== id))
        })
    }


    return (
        <div className="container">
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h4 className="border-bottom border-gray pb-2 mb-0">Todo list</h4>
                <div className="media text-muted pt-3">
                    <form onSubmit={addItems} className="form-inline media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <h6>New Item</h6>
                        <div className="form-group mx-sm-3 mb-2">
                            <input className="form-control" onChange={handleItem}/>
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Add new</button>
                    </form>
                </div>
                <TodoItem items={items} removeItem={handleRemove}/>
                <small className="d-block text-right mt-3">
                    <a href="https://github.com/nireo/todo-app-fullstack" target="_blank" rel="noopener noreferrer">Github</a>
                </small>
            </div>
        </div>
    )
}

export default App;
