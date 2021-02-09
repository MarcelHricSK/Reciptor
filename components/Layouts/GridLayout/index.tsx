import React from 'react';

const Grid: React.FC = (props) => {
    return (
        <div className="gridLayout">
            {props.children}
        </div>
    );
}

export default Grid;
