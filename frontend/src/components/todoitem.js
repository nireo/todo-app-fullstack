import React from "react"

const TodoItem = (props) => {
    const allItems = props.items.map(item => <div className="media text-muted pt-3">
        <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            {item.name}
        </p>
        <p className="pb-3 mb-0 small border-bottom border-gray">Added: {item.itemTime}</p>
    </div>)
    return (
        <div>{allItems}</div>
    )
}

export default TodoItem

