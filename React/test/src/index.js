import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// import Title from './Title';
// import Prof from './Prof';
// import Table from './Table';
// import Elements from './Elements';
import Hello from './Hello';

import { BrowserRouter,Link, Routes, Route } from "react-router-dom";
import NextPage from './NextPage';

//import BackgroundWrapper from './BGW';

//import TimesComents from './TimesComent';

import Experiment from './Experiment';
import DB from './DB';
import DBUpdate from './DBUpdate';
import DBJoin from './DBJoin';




//index.htmlファイルの<div id="root">要素を取得します。その後、Reactにindex.htmlファイルの<div id="root">要素の参照を渡す。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
    <BrowserRouter>
        
        <Link to='/NextPage'>NextPage</Link><br/>
        <Link to="/Experiment">Experiment</Link><br/>
        <Link to="/DB">DB</Link><br/>
        <Link to="/DBJoin">DBJoin</Link><br/>
        <Link to='/'>HOME</Link>


          <Routes>
            <Route path='/' element={<Hello />}/>
            <Route path='/NextPage' element={<NextPage />}/>
            <Route path='/Experiment' element={<Experiment />} />
            <Route path='/DB' element={<DB />} />
              <Route path='/DBUpdate' element={<DBUpdate/>} /> {/*NavigateでPathを通している*/}


            <Route path='/DBJoin' element={<DBJoin/>} />
          </Routes>
        
      </BrowserRouter>
      {/* <TimesComents /> */}
      
      
      
  </React.StrictMode>

  
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
