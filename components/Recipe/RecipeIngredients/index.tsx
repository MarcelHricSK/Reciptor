import React from 'react';

import { Ingredients, Units } from '../../../interfaces/Recipe/ExactRecipe';

interface Props {
    data: Ingredients[];
};

const RecipeIngredients: React.FC<Props> = (props) => {
    const hcd: any = (a: number, b: number) => {
        if (b == 0) return a;
        return hcd(b, a % b);
    }
    // Format ingredient amount
    const formatAmount = (amount: number): string => {
        // 5.0 precision
        if(amount > 10) {
            return String(Math.round(amount / 5) * 5);
        }
        // 1.0 precision
        else if (amount > 4) {
            return String(Math.round(amount));
        }
        // Format small portions and fractions
        else {
            if(amount !== Math.round(amount)) {
                if([0.125, 0.2, 0.25, 0.4, 0.5, 0.6, 0.75, 0.8].includes(amount)) {
                    const fractionLeft = amount * 100;
                    const fractionRight = 100;
                    var fact = hcd(fractionLeft, fractionRight);
                    return `${fractionLeft/fact}/${fractionRight/fact}`;
                }
                else if (amount === 0.333) return "1/3";
                else if (amount === 0.666) return "2/3";
                else return String(Math.round(amount));
            }
            else {
                return String(amount);
            }
        }
    }
    // Format non-consistent and mistyped units
    const formatUnit = (unit: string, amount: number): string => {
        if(amount <= 1) {
            if(["tbsp", "tbsps"].includes(unit)) return Units.TABLESPOON;
            else if (["teaspoon", "teaspoons"].includes(unit)) return Units.TEASPOON;
            else if (["cup", "cups"].includes(unit)) return Units.CUP;
            else if (["liter", "liters"].includes(unit)) return Units.LITER;
            else if (["gram", "grams"].includes(unit)) return Units.GRAM;
            else if (["milliliter", "milliliters"].includes(unit)) return Units.MILILITER;
            else if (["inch", "inches"].includes(unit)) return Units.INCH;
            else if (["serving", "servings"].includes(unit)) return Units.SERVING;
            else if (["clove", "cloves"].includes(unit)) return Units.CLOVE;
            else if (["ounce", "ounces"].includes(unit)) return Units.OUNCE;
            else return unit;
        }
        else {
            if(["tbsp", "tbsps"].includes(unit)) return Units.TABLESPOON_PL;
            else if (["teaspoon", "teaspoons"].includes(unit)) return Units.TEASPOON_PL;
            else if (["cup", "cups"].includes(unit)) return Units.CUP_PL;
            else if (["liter", "liters"].includes(unit)) return Units.LITER_PL;
            else if (["gram", "grams"].includes(unit)) return Units.GRAM_PL;
            else if (["milliliter", "milliliters"].includes(unit)) return Units.MILILITER_PL;
            else if (["inch", "inches"].includes(unit)) return Units.INCH_PL;
            else if (["serving", "servings"].includes(unit)) return Units.SERVING_PL;
            else if (["clove", "cloves"].includes(unit)) return Units.CLOVE_PL;
            else if (["ounce", "ounces"].includes(unit)) return Units.OUNCE_PL;
            else return unit;
        }
    }
    return (
        <ul>
            { props.data.map((ingredient, index) => {
                return ( 
                    <li key={index}>
                        { ingredient.measures.us.amount != 0 ? <strong>{ `${formatAmount(ingredient.measures.us.amount)} ${formatUnit(ingredient.measures.us.unitLong.toLowerCase(), ingredient.measures.us.amount)}` } </strong> : ""}{ `${ingredient.originalName.toLowerCase() }` }
                    </li>
                )
                })
            }
        </ul>
    );
}

export default RecipeIngredients;

