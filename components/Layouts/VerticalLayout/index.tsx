import React from 'react';

const VerticalLayout: React.FC = (props) => {
    return (
        <div className="verticalLayout">
            {props.children}
        </div>
    );
}

export default VerticalLayout;