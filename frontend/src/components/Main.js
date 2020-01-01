import React, { useState, useEffect } from 'react';
import TodoItem from './todoitem';
import itemService from '../services/item';
import { Modal } from './Modal';

export const Main = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const getItems = async () => {
      const items = await itemService.getAll();
      setItems(items);
    };

    if (!loaded) {
      getItems();
      setLoaded(false);
    }
  }, [loaded]);

  const addZero = number => {
    if (number < 10) {
      number = '0' + number;
      return number;
    }
    return number;
  };

  const addItems = event => {
    event.preventDefault();
    const time = new Date();

    const template = {
      name: newItem,
      itemTime: `${time.getHours()}:${addZero(time.getMinutes())}`
    };

    itemService.create(template);
    setItems(items.concat(template));
    setNewItem('');
  };

  const searchedItems = search
    ? items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : items;

  const handleRemove = async id => {
    await itemService.remove(id);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <Modal show={show} handleClose={handleClose}>
        <div className="container">
          <h3>Create item.</h3>
        </div>
      </Modal>
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
        <TodoItem items={searchedItems} removeItem={handleRemove} />
        <form style={{ marginTop: '1rem' }} onSubmit={addItems}>
          <input
            value={newItem}
            onChange={({ target }) => setNewItem(target.value)}
            className="form-control"
          />
          <button type="submit" className="btn btn-primary mt-1">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
