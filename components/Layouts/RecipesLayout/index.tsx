import React from 'react';

import GridLayout from '../GridLayout';
import Pagination from '../../Pagination';
import RecipeCard from '../../Recipe/RecipeCard';

import { ResultData, SearchRecipeData } from '../../../interfaces/Recipe/SearchRecipe';

interface Props {
    recipes: ResultData;
    currentPage: string;
};

const RecipesLayout: React.FC<Props> = (props: Props) => {
    return (
        <>
            <GridLayout>
                {props.recipes.results.map((res: SearchRecipeData) => <RecipeCard key={res.id} id={res.id} title={res.title} img={"https://spoonacular.com/recipeImages/" + res.image} time={res.readyInMinutes} servings={res.servings} /> )}
            </GridLayout>
            <Pagination maxPages={Math.ceil(props.recipes.totalResults/18)} current={props.currentPage ? Number(props.currentPage) : 1} />
        </>
    );
}

export default RecipesLayout;
