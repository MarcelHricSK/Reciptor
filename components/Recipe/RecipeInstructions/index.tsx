import React from 'react';

import { Instructions } from '../../../interfaces/Recipe/ExactRecipe';

interface Props {
    data: Instructions[];
};

const RecipeInstructions: React.FC<Props> = (props) => {
    return (
        <ul>
            { props.data.map((instruction, index) => { 
                return (
                    <li className="step" key={index}>
                        <strong className="stepName">{`${instruction.name ? instruction.name : "Main instructions"}`}</strong>
                        <ul className="stepList">
                            {instruction.steps.map((step, index) =>{ return <li className="stepInstruction" key={index}>{step.step}</li>})}
                        </ul>
                    </li>
                )
                })
            }
        </ul>
    );
}

export default RecipeInstructions;