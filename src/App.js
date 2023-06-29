import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "./hooks/useTelegram.js";
import Header from './components/Header/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import  ProductList  from './components/ProductList/ProductList';
import Form from './components/Form/Form.jsx'
//import ProductList from './components/ProductList/ProductList'

//const tg = window.Telegram.WebApp;

function App() {
  const { onToggleButton, tg} = useTelegram()
  
  useEffect(() => {
   tg.ready() 
  },[])

  // const onClose = () => {
  //   tg.close()
  // }
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
