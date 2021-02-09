import React, { useEffect, useState } from 'react'

import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import Section from '../../components/Section/Default';
import RecipesLayout from '../../components/Layouts/RecipesLayout';
import Error404 from '../../components/Error/404';

import { ResultData } from '../../interfaces/Recipe/SearchRecipe';

const SearchPage: React.FC = () => {
    // Declaration
    const router = useRouter()
    // State
    const [results, setResults] = useState<ResultData>()
    // State loader function
    const loadData = async () => {
        setResults(undefined);
        const data = await fetch(`https://api.spoonacular.com/recipes/search?query=${router.query.query}&offset=${router.query.page ? ((Number(router.query.page) - 1) * 18) : 0}&number=18&instructionsRequired=true&apiKey=c09e461a0fce4ff2bc0a913e765f9e52`).then((d) => d.json());
        setResults(data);
    }

    useEffect(() => {
        loadData();
    }, [router.query]);

    return (
        <>
            <Head>
                <title>Reciptor | Free CookBook</title>
                <meta charSet="utf-8"/>
            </Head>
            <Nav inValue={router.query.query.toString()} />
            <div className={"overlay" + (results ? " hidden" : "")}>
                <img src="/static/img/ico/loading.svg" alt=""/>
            </div>
            <Section name="results" title={`Results for "${router.query.query}"`} paddingBottom results={results ? results.totalResults : "set"}>
                {results ? <RecipesLayout recipes={results} currentPage={router.query.page ? router.query.page.toString() : "1"} /> : <Error404 title="No results found..." />}
            </Section>
            <Footer/>
        </>
    );
}

export default SearchPage;


