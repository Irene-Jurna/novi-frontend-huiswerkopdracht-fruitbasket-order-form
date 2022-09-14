import React from 'react';

function Button({buttonText, stateButtonResetFunction,buttonType}) {
    return (
        <button
            onClick={stateButtonResetFunction}
            type={buttonType}
        >
            {buttonText}
        </button>
    );
}

export default Button;