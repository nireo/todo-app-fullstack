import React from 'react';

const TodoItem = ({ items, removeItem }) => {
  return (
    <div>
      {items.map(item => (
        <div className="media text-muted pt-3">
          <p className="pb-2 mb-0 small border-bottom border-gray">
            <button
              className="btn btn-primary pb-0 mb-0 btn-sm "
              onClick={() => removeItem(item.id)}
            >
              delete
            </button>
          </p>
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            {item.name}
          </p>
          <p className="pb-3 mb-0 small border-bottom border-gray">
            Added: {item.itemTime}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
