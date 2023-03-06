import './App.css';
import Navbar from './components/Navbar';
import Testform from './components/Testform';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('dark'); // Wheather dark mode is enabled yes or not
  const [alert, setAlert] = useState('null')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'pink';
      showAlert("Dark mode has been enable", "Success")
      document.title = "TextUtils- Dark Mode"
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'red';
      showAlert("Light mode has been enable", "Success")
      document.title = "TextUtils- Light Mode"
    }
  }
  return (
  <>

  {/* <Navbar title="Text-Utils" AboutText"About=" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
     <Testform showAlert={showAlert} heading="Enter the text to Analize" mode={mode} />
     {/* <About /> */}
     </div>

</>
       
        
  );
}

export default App;