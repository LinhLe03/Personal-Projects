import { useState } from "react";

function InputText({name, onChange, placeholder, type, label, value}) {    
    return (
        <>
        <form>
            <label>{label}</label>
            <input value={value} onChange={onChange} />
        </form>

        </>
    );
}

export default InputText;