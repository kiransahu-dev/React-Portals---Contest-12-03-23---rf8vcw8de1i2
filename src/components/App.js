import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
  const [text, setText] = useState('');
  
  const handleChange = () => {
    setText(event.target.value);
  }
  
  const handleButton = () =>
  {
    ReactDom.render (
    <portalTextArea text = {text} />,
    document.getElementById('portal-textfield'));
  }



  return (
    
    <div id="main">
      <input id="input" value={text} onChange={handleButton}></input><br/>
      <PortalButton buttonclick={handleButton} /><br/>
      <div id ="portal-textfield"></div>
    </div>
  )
}


export default App;
