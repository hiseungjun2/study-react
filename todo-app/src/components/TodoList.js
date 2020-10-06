import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {

    const rowRenderer = useCallback(
        ({index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        }, [onRemove, onToggle, todos]);

    // return (
    //     <div className="TodoList">
    //         {todos.map(todo => (
    //             <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
    //         ))}
    //     </div>
    // );

    return (
        <List
            className="TodoList"
            width={512}     // 전체크기
            height={513}    // 전체높이
            rowCount={todos.length}     // 항목개수
            rowHeight={57}  // 항목높이
            rowRenderer={rowRenderer}   // 항목을 렌더링할 때 쓰는 함수
            list={todos}    // 배열
            style={{outLine: 'none'}}   // List에 기본 적용되는 outline 스타일제거
        />
    )
};

export default React.memo(TodoList);