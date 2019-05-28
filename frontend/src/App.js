import React, {useState} from 'react';
import './App.css';
import TodoItem from "./components/todoitem"

const App = () => {
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')

    const handleItem = (event) => {
        setNewItem(event.target.value)
    }

    return (
        <div className="container">
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h4 className="border-bottom border-gray pb-2 mb-0">Todo list</h4>
                <div className="media text-muted pt-3">
                    <form className="form-inline media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <h6>New Item</h6>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="inputPassword2" className="sr-only">Password</label>
                            <input className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">Add new</button>
                    </form>
                </div>

                <div className="media text-muted pt-3">
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                </div>
                <div className="media text-muted pt-3">
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                </div>
                <div className="media text-muted pt-3">
                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                        tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                </div>
                <small className="d-block text-left mt-3">
                    <a href="https://github.com/nireo/todo-app-fullstack" target="_blank" rel="noopener noreferrer">Github</a>
                </small>
            </div>
        </div>
    )
}

export default App;
