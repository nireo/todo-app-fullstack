import React from 'react';

const TodoItem = ({ items, removeItem }) => {
  return (
    <div>
      {items.map(item => (
        <div className="media text-muted pt-3">
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div>{item.name}</div>
            <button className="link" onClick={() => removeItem(item.id)}>
              Delete
            </button>
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
