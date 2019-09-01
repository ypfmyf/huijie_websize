import React from "react";
import * as ReactDOM from 'react-dom'
import App from './app'
//import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
   <HashRouter>

       <App />

   </HashRouter>,document.getElementById('root'));

