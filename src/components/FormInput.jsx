import React from 'react'

const FormInput = ({label, name, type, defaultValue, isOptional}) => {
  return (
   <fieldset className="fieldset">
        <legend className="fieldset-legend">{label}</legend>
        <input type={type} 
               className="input"
               placeholder="Type here"
               name={name}
               defaultValue={defaultValue}
                />
        {isOptional && <p className="label">Optional</p>}
    </fieldset>
  )
}

export default FormInput
