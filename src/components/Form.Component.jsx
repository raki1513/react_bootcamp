import React, {useState} from "react";

const FormComponent = ({name,setName }) => {
    const [changeName, setChangeName] = useState("");
return(
    <div>
        
        <input onChange={(e)=> setChangeName(e.target.value)} />
        <button onClick={()=> setName(changeName)}> click me for change</button>
        <h4>{name}</h4>
    </div>
)
}

export default FormComponent;