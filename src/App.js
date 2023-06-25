import './App.css';
import DisplayComponent from './components/Display.component';
import FormComponent from './components/Form.Component';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div className='maincontent'>
         <img src='https://i0.wp.com/www.nrtec.in/wp-content/uploads/2018/05/logo-nec1.png?w=1170&ssl=1' alt='NEC LOGO' className='clglogo' />
        <br/> 
      <FormComponent name={name} setName={setName}/>
      <br/>
      <br/>
      </div>
    </div>
  );
}

export default App;
