import React from 'react';

import Link from 'next/link';

interface Props {
    id: number;
    title: string;
    img: string;
    time: number;
    servings: number;
};

const RecipeCard: React.FC<Props> = (props) => {
    return (
        <Link href={"./recipe/" + props.id}>        
            <div className="recipeCard">
                <div className="recipeCardImg">
                    {props.img ? <img src={props.img} alt="" loading="lazy" /> : <img src="./static/img/ico/logo.svg" className="notFound"/>}
                </div>
                <div className="recipeCardText">
                    <h1>{props.title}</h1>
                    <div className="recipeCardSpecs">
                        <div className="recipeCardSpec">
                            <span>Time</span>
                            <p>{props.time + " mins"}</p>
                        </div>
                        <div className="recipeCardSpec">
                            <span>Servings</span>
                            <p>{props.servings}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default RecipeCard;