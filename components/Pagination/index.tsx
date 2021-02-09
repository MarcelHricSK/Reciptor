import React from 'react';

import { useRouter } from 'next/router';

import * as Scroll from 'react-scroll';

interface Props {
    current: number;
    maxPages: number;
};

const Pagination: React.FC<Props> = (props) => {
    const router = useRouter();

    const redirectToPage = (page: number) => {
        Scroll.animateScroll.scrollToTop({duration: 0, smooth: false});
        setTimeout(() => {
            router.push({query: {query: router.query.query, page: page}});
        }, 0.5);
    };
    
    if(props.current == 1) {
        return (
            <div className="pagination">
                <button className="paginationButton side" disabled><img src="/static/img/ico/arrowLeft.svg"/></button>
                <button onClick={() => {redirectToPage(props.current)}} className="paginationButton active">{props.current}</button>
                <button onClick={() => {redirectToPage(props.current + 1)}} className="paginationButton">{props.current + 1}</button>
                <button onClick={() => {redirectToPage(props.current + 2)}} className="paginationButton">{props.current + 2}</button>
                <button onClick={() => {redirectToPage(props.current + 1)}} className="paginationButton side"><img src="/static/img/ico/arrowRight.svg"/></button>
            </div>
        );
    } else if(props.current == props.maxPages) {
        return (
            <div className="pagination">
                <button onClick={() => {redirectToPage(props.current - 1)}} className="paginationButton side"><img src="/static/img/ico/arrowLeft.svg"/></button>
                <button onClick={() => {redirectToPage(props.current - 2)}} className="paginationButton">{props.current - 2}</button>
                <button onClick={() => {redirectToPage(props.current - 1)}} className="paginationButton">{props.current - 1}</button>
                <button onClick={() => {redirectToPage(props.current)}} className="paginationButton active">{props.current}</button>
                <button className="paginationButton side" disabled><img src="/static/img/ico/arrowRight.svg"/></button>
            </div>
        );
    } else {
        return (
            <div className="pagination">
                <button onClick={() => {redirectToPage(props.current - 1)}} className="paginationButton side"><img src="/static/img/ico/arrowLeft.svg"/></button>
                <button onClick={() => {redirectToPage(props.current - 1)}} className="paginationButton">{props.current - 1}</button>
                <button onClick={() => {redirectToPage(props.current)}} className="paginationButton active">{props.current}</button>
                <button onClick={() => {redirectToPage(props.current + 1)}} className="paginationButton">{props.current + 1}</button>
                <button onClick={() => {redirectToPage(props.current + 1)}} className="paginationButton side"><img src="/static/img/ico/arrowRight.svg"/></button>
            </div>
        );
    }
}


export default Pagination;
