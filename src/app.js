import React, { Component } from 'react';
import {Route,} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Aboutus from './components/aboutus/aboutus';
import Home from './components/home/home';
import Product from './components/product/product';
import About from './components/about/about';
import Brand from './components/brand/brand';
import './app.css'

@withRouter
export default class App extends Component {
    constructor(props) {
        super(props);
        
       
    }
    //第一次加载的时候
    componentDidMount() {
        const { history } = this.props;
        if(this.props.location.pathname=='/'){
            history.replace("/home");
        }
      
    }
    render() {
        return(
        <div className="app"> 
                <Route exact  path="/"component={Home}></Route>
               <Route path='/home' component={Home}></Route>
               <Route path='/aboutus' component={Aboutus}></Route>
               <Route path='/product' component={Product}></Route>
               <Route path='/about' component={About}></Route>
               <Route path='/brand' component={Brand}></Route>
            </div>
            
            
       
               
          
         
        
        
        )
        
        
    }

}


