import React, { Component } from 'react';
import {Link,} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import './home.css'
import { homedir } from 'os';


 class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:window.innerWidth || document.documentElement.clientWidth, // 得到当前的屏幕宽度
            headerRight:'home',
        }
      
        
       
    }
    componentDidMount() {

    }


  

    render() {
        return(
            <div >
                <Header headerRight={this.state.headerRight}></Header>
                <div className={this.state.width>768? 'content content_PC':'content'}>
                {this.state.width>768?
                   <div>
                        <img src="./image/home/pc_home.png" style={{width:'100%',height:'768px',}}></img>
                   </div>
                    :
                    <div>
                            <img src="./image/home/banner@2x.png" style={{width:'100%',height:'27.5625rem',}}></img>
                            <Footer></Footer>
                    </div>
                     
                }
                       

                      
                </div>
                

            </div>
        )
    }

}
export default Home;


