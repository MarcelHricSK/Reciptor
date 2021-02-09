import React from 'react';
import Head from 'next/head';

// Sections
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import Section from '../../components/Section/Default';
import VerticalLayout from '../../components/Layouts/VerticalLayout';

// NEXT types
import { GetServerSideProps } from 'next';

// Types
import { ExtendedRecipeData } from '../../interfaces/Recipe/ExactRecipe';
import RecipeInstructions from '../../components/Recipe/RecipeInstructions';
import RecipeIngredients from '../../components/Recipe/RecipeIngredients';

type Props = {
    data: ExtendedRecipeData;
    status?: number;
}

const RecipePage: React.FC<Props> = (props) => {
    return (
        <>
            <Head>
                { props.data && <title>{props.data.title} | Reciptor</title> }
            </Head>
            <Nav />
            <div className={"overlay" + (props.data && !props.status ? " hidden" : "")}>
                <img src="/static/img/ico/loading.svg" alt=""/>
            </div>
            { props.data && 
                <Section name="recipeInfo" paddingBottom>
                    <div className="recipeInfoCore">
                    <div className={props.data.image ? "recipeInfoCoreImg" : "recipeInfoCoreImg noImg"}>
                        <img src={props.data.image ? props.data.image : "/static/img/ico/logo.svg"} alt=""/>
                    </div>
                    <div className="recipeInfoCoreData">
                        <h1>{props.data.title}</h1>
                    </div>
                    </div>
                </Section>  
            }
            <VerticalLayout>
                <Section name="recipeIngredients" title="Ingredients" paddingBottom>
                { props.data && <RecipeIngredients data={props.data.extendedIngredients} /> }
                </Section>
                <Section name="recipeInstructions" title="Instructions" paddingBottom>
                { props.data && <RecipeInstructions data={props.data.analyzedInstructions} /> }
                </Section>
            </VerticalLayout>
            <Footer />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    if(context.params) {
        const res = await fetch(`https://api.spoonacular.com/recipes/${context.params.id}/information?apiKey=c09e461a0fce4ff2bc0a913e765f9e52`);
        const data = await res.json();
        console.log(data);
        
        if(data.status == 404) {
            context.res.setHeader("location", "/");
            context.res.statusCode = 302;
            context.res.end();
            return { props: {} };
        }
        return { props: { data } };
    } else {
        context.res.setHeader("location", "/");
        context.res.statusCode = 302;
        context.res.end();
        return { props: {} };
    }
}

export default RecipePage;