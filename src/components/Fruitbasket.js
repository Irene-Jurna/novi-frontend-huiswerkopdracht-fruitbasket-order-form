import React from 'react';

function Fruitbasket({stateFruit, stateFruitSetterFunction, fruitTitle}) {
    return (
        <article>
            <h2>{fruitTitle}</h2>
            <button
                type="button"
                disabled={stateFruit === 0}
                onClick={() => stateFruitSetterFunction(stateFruit - 1)}
            >
                -
            </button>
            <p>{stateFruit}</p>
            <button
                type="button"
                onClick={() => stateFruitSetterFunction(stateFruit + 1)}
            >
                +
            </button>
        </article>
    );
}

export default Fruitbasket;