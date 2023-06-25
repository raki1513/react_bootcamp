import React from 'react';
import { useState } from 'react';
function DisplayComponent(props) {

  const [name,setName]=useState("")
  return (
    <div>

      <h2>{name}</h2>
    </div>
  );
}

export default DisplayComponent;
