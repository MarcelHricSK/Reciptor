import React from 'react';

interface Props {
    title: string;
};

const Error404: React.FC<Props> = (props) => {
    return (
        <div className="noResults">
            <img src="/static/img/ico/logo.svg" alt="" />
            <h1>{props.title}</h1>
        </div>
    );
}

export default Error404;

