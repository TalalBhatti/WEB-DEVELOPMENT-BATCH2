import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './components/Page404';

function App() {
  
  const [greetings, setGreetings] = useState("Morning")

  setTimeout(()=>{
      // greetings = "Afternoon"
      setGreetings("Afternoon")
      console.log("value in parent",greetings)
  },3000)

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route>
            <Route index element={<Main toSend={greetings}/>}/>
            <Route path="/first" element={<FirstPage/>}/>
            <Route path="/second" element={<SecondPage/>}/>
            <Route path="*" element={<Page404/>}/>
          </Route>
        </Routes>
      <Footer/>  
    </BrowserRouter>
  );
}

export default App;
