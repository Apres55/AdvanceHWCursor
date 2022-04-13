import React from "react";

const TodoListItem = ({item, onDelete}) => {
    const onClickHandler = (message) => {
        onDelete(message)
    }
    return (
        <div>
            <div>
                {item.value}
            </div>
            <button onClick={() => onClickHandler(item.id)}>Click me</button>
            <hr />
        </div>
    );
};

export default TodoListItem;