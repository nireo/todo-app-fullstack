import React from 'react';
import itemService from '../services/item';

const TodoItem = ({ items, type, setItems, removeItem }) => {
  const remove = async id => {
    await itemService.remove(id);
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id} className="media text-muted pt-3">
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div>{item.name}</div>
            {type === undefined ? (
              <button className="link" onClick={() => remove(item.id)}>
                Delete
              </button>
            ) : (
              <button className="link" onClick={() => removeItem(item.name)}>
                Delete
              </button>
            )}
          </p>
          <p className="pb-3 mb-0 small border-bottom border-gray">
            <div>Added</div>
            {item.itemTime}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
