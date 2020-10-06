import React from 'react';
import {
    MdCheckBoxOutlineBlank
    , MdCheckBox
    , MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss'

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const {id, text, checked} = todo;
    return (
        <div class="TodoListItem-virtualized" style={style}>
            <div className="TodoListItem">
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

// React.memo 사용하여 컴포넌트 리렌더링 방지
// todo, onRemove, onToggle 이 바뀌지 않으면 리렌더링안함
export default React.memo(
    TodoListItem
    , (prevProps, nextProps) => prevProps.todo === nextProps.todo
);