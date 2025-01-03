import { useState } from "react";
import InputText from "./InputText";

function FirstName({firstName, setFirstName}) {
    return(
        <>
            <InputText
                label="First Name" 
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <p>Your name is {firstName}</p>
        </>
    );
}

export default FirstName;