import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTodo, removeTodo, removeTodoById } from '../redux/todo/slice';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.todoSlice.items);

  const inputRef = React.useRef<any>();

  const genrateRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const onClickCreate = () => {
    let tmpNumb = genrateRandomNumber(1, 10000);
    let todo = {
      id: tmpNumb,
      name: inputRef.current.value,
    };
    console.log(todo);

    dispatch(addTodo(todo));
  };

  const onClickRemove = () => {
    dispatch(removeTodo());
  };

  const onClickRemoveById = (id: number) => {
    dispatch(removeTodoById(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <br />
      <ul>
        {items.map((res: any, idx: any) => (
          <li key={idx}>
            {res.name}
            <span onClick={() => onClickRemoveById(idx)}>❌</span>
          </li>
        ))}
      </ul>
      <br />
      <input type='text' placeholder='Enter todo...' ref={inputRef} />
      <button onClick={onClickCreate}>Add</button>
      <br />
      <br />
      <button onClick={onClickRemove}>Remove Last</button>
    </div>
  );
};

export default TodoList;
