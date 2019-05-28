import React, {useState} from 'react';
import './App.css';
import TodoItem from "./components/todoitem"

const App = () => {
    return (
        <div className="container">
            <div className="my-3 p-3 bg-white rounded shadow-sm">
                <h6 className="border-bottom border-gray pb-2 mb-0">Todo list</h6>
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
                    <a href="#">Github</a>
                </small>
            </div>
        </div>
    )
}

export default App;
