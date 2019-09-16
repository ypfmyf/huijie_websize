import React, { Component } from 'react';
import {Link,} from 'react-router-dom';
import './header.css'
 class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:window.innerWidth || document.documentElement.clientWidth, // 得到当前的屏幕宽度
            height:window.innerheight || document.documentElement.clientHeight, // 得到当前的屏幕宽度
            // ListShow:false
            animation:false,

        }
    }
    componentDidMount() {
        window.dataLayer = window.dataLayer || [];
      }
    _otherClick=(e)=>{
        if(e=='Show'){
            console.log('show');
            this.setState({
                ListShow:true,
                animation:true

            })
    
        } else if(e=='Hide'){
            console.log('hide');
            this.setState({
                animation:false
            })
            setTimeout(()=> {
                this.setState({
                    ListShow:false,
                })
            },1000);
    
        }else{

        }
      
    }

  
  

  

    render() {
        return(
               // <!--头部导航-->
                <div className={this.state.width>768?'navigation':'lucency'}>
                       
                        <div className={this.state.width>768? 'nav_header nav_header_pc':'nav_header '} >
                            <div className={this.state.width>768? 'header_Left_pc':'header_Left'}> 
                                <img src="./image/logo.png" alt="" className={this.state.width>768? 'imgWG_pc':'imgWG'}/>
                            </div>
                          {this.state.width>768?
                                <div className="header_Right">
                                            <Link to='/home' className="Header_list">
                                                <span className={this.props.headerRight=='home'? 'header_link':'header_linkA '}>
                                                    首页
                                                </span>
                                            </Link>
                                            <Link to='/product' className="Header_list">
                                                <span className={this.props.headerRight=='product'? 'header_link':'header_linkA '}>产品介绍</span>
                                            </Link>
                                            <Link to='/about' className="Header_list">
                                                <span className={this.props.headerRight=='about'? 'header_link':'header_linkA '}>关于我们</span>
                                            </Link>
                                            <Link to='/brand' className="Header_list">
                                                <span className={this.props.headerRight=='brand'? 'header_link':'header_linkA '}>品牌故事</span>
                                            </Link>
                                            <Link to='/aboutus' className="Header_list">
                                                <span className={this.props.headerRight=='aboutus'? 'header_link':'header_linkA '}>联系我们</span>
                                            </Link>
                                </div>         
                           :
                            <div className="list">
                                <div onClick={()=>this._otherClick('Show')} className={this.props.headerRight? 'listImg headerImg':'listImg'}>
                                        <img src="./image/nav.png" alt="" /> 
                                </div>
                                {this.state.ListShow?
                                    <div  style={{width:this.state.width,height:this.state.height,}} className={this.state.animation? "nav show":"nav hide"} >
                                         <div style={{background:'#fff'}}>
                                        <div className="nav_header">
                                            <div className="header_Left"> 
                                                <img src="./image/logo.png" alt="" className="imgWG"/>
                                            </div>
                                            <div onClick={()=>this._otherClick('Hide')}  className='header_Right'>
                                                    <img src="./image/close.png" alt=""/> 
                                            </div>
                                        </div>
                                        <div >
                                             <Link to='/home' className={this.props.headerRight=='home'? 'content_list content_listJJ':'content_list '} >
                                                <span>首页</span>

                                            </Link>
                                            <Link to='/product' className={this.props.headerRight=='product'? 'content_list content_listJJ':'content_list '}>
                                                <span>产品介绍</span>
                                            
                                            </Link>
                                            <Link to="/about" className={this.props.headerRight=='about'? 'content_list content_listJJ':'content_list '}>
                                                <span>关于我们</span>
                                               
                                            </Link>
                                            <Link to='/brand' className={this.props.headerRight=='brand'? 'content_list content_listJJ':'content_list '}>
                                                <span>品牌故事</span>
                                              
                                            </Link>
                                            <Link to='/aboutus' className={this.props.headerRight=='aboutus'? 'content_list content_listJJ':'content_list '}>
                                                <span>联系我们</span>
                                               
                                            </Link>
                                        </div>
                                        </div>
                                
                                    </div>
                                 :null

                                }
                               
                            </div>

                           }
                            
                            
                        </div>
                </div>
        
        
        )
        
        
    }

}
export default Header;


