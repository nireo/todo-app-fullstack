import React, { useState, useEffect } from 'react';
import './App.css';
import TodoItem from './components/todoitem';
import itemService from './services/item';

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    itemService.getAll().then(initialItems => {
      setItems(initialItems);
    });
  }, []);

  const addItems = event => {
    const time = new Date();
    event.preventDefault();

    const itemTemplate = {
      name: newItem,
      itemTime: `${time.getHours()}:${time.getMinutes()}`
    };

    itemService
      .create(itemTemplate)
      .then(response => {
        setItems(items.concat(response));
      })
      .catch(error => {
        console.log(error);
      });
    setNewItem('');
  };

  const searchedItems = search
    ? items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : items;

  const handleRemove = id => {
    itemService
      .remove(id)
      .then(() => {
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <h4 className="border-bottom border-gray pb-2 mb-0">Todo list</h4>
        <div className="media text-muted pt-3">
          <form className="form-inline media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <h6>Search items: </h6>
            <div className="form-group mx-sm-3 mb-2">
              <input
                className="form-control"
                onChange={({ target }) => setSearch(target.value)}
              />
            </div>
          </form>
        </div>
        <div className="media text-muted pt-3">
          <form
            onSubmit={addItems}
            className="form-inline media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
          >
            <h6>New Item</h6>
            <div className="form-group mx-sm-3 mb-2">
              <input
                className="form-control"
                onChange={({ target }) => setNewItem(target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mb-2">
              Add new
            </button>
          </form>
        </div>
        <TodoItem items={searchedItems} removeItem={handleRemove} />
        <small className="d-block text-right mt-3">
          <a
            href="https://github.com/nireo/todo-app-fullstack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </small>
      </div>
    </div>
  );
};

export default App;
