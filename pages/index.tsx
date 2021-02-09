import React from 'react';
import { GetServerSideProps } from 'next';

import Head from 'next/head';

import GridLayout from '../components/Layouts/GridLayout';
import Hero from '../components/Section/HeroSection';
import Section from '../components/Section/Default';
import RecipeCard from '../components/Recipe/RecipeCard';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';

type RandomRecipe = {
    id: number;
    title: string;
    image: string;
    readyInMinutes: number;
    servings: number;
};

interface Props {
    data: {
        recipes: RandomRecipe[];
    }
};

const IndexPage: React.FC<Props> = (props: Props) => {
  return (
    <>
        <Head>
            <title>Reciptor | Free CookBook</title>
        </Head>
        <Nav />
        <Hero />
        <Section name="explore" title="Explore" paddingBottom>
            <GridLayout>
                {props.data.recipes.map((res: RandomRecipe) => <RecipeCard key={res.id} id={res.id} title={res.title} img={res.image} time={res.readyInMinutes} servings={res.servings}></RecipeCard> )}
            </GridLayout>
        </Section>
        <Footer/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/random?number=18&apiKey=c09e461a0fce4ff2bc0a913e765f9e52`);
    const data = await res.json();
    return { props: { data } };
}

export default IndexPage;
