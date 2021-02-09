import React from 'react';

interface Props {
    name: string;
    title?: string;
    center?: boolean;
    paddingBottom?: boolean;
    results?: number | string;
};

const Section: React.FC<Props> = (props) => {
    return (
        <section className={props.name + " section" + (props.paddingBottom ? " paddingB" : "")}>
            <div className="sectionWrapper">
                {props.title && <h1 className={(props.center ? "sectionTitle center" : "sectionTitle") + (props.results ? " resultsTitle" : "")  }>{props.title}</h1>}
                {props.results ? <small>{props.results != "set" ? `${props.results} ${props.results == 1 ? "results" : "result"}` : `Loading...` }</small> : ""}
                {props.children}
            </div>
        </section>
    );
}

export default Section;
