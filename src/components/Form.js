import React from 'react';

function Form({stateForm, stateFormSetter, formLabel, formName, formID, formType}) {
    return (
        <label htmlFor={formID}>{formLabel}
            <input
                name={formName}
                id={formID}
                type={formType}
                value={stateForm}
                onChange={(e) => stateFormSetter(e.target.value)}
            />
        </label>
    )

}

export default Form;