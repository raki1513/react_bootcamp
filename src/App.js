import './App.css';
import Button from './components/Button.component';
import Form from './components/Form.Component';

function App() {
  return (
    <div className="App">
      <div className='maincontent'>
         <img src='https://i0.wp.com/www.nrtec.in/wp-content/uploads/2018/05/logo-nec1.png?w=1170&ssl=1' alt='NEC LOGO' className='clglogo' />
        <br/> 
      <Form type="text" label="Username"/>
      <br/>
      <Form type="password" label="Password"/>
      <br/>
      <Button/>
      </div>
    </div>
  );
}

export default App;
