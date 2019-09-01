import React, { Component } from 'react';

import './footer.css'


export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:window.innerWidth || document.documentElement.clientWidth, // 得到当前的屏幕宽度
            // WxShow:false,
            showImg:false,
        }
       
    }
    componentDidMount() {
        window.dataLayer = window.dataLayer || [];
    }
    _wxPopout(e){
        if(e=='wx'){
            this.setState({
                WxShow:true,
                 showImg:true,
            })
        }else{
            setTimeout(()=> {
                this.setState({
                    WxShow:false,
                })
            },1000);
            this.setState({
                showImg:false,
            })
        }
       
    }


  

    render() {
        return(
            <div>
                <div className="footer">
                    {/* <div className="contact">
                        <a href="mailto:support@gegee.cc" className="contactList">  
                            <img src="../../../image/home/mail.png"/>
                        </a>
                        <a href="tel:15000458934" className="contactList"> 
                        <img src="../../../image/home/tel.png"/>
                        </a>
                        <div className="contactList"  onClick={()=>this._wxPopout('wx')}> 
                        <img src="../../../image/home/weixin.png"/>
                        </div>
                    </div> */}
                    <a className="bottom">
                        {/* <span>沪ICP备15037205号-2沪公网安备 11010502034003号</span>
                        <span>Copyright © 2019 All rights reserved</span> */}
                        
                        {/* <div>

                        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010102005457" 
                        style={{display:'inline-block',textDecoration:'none',height:'40px',lineHeight:'40px',}}>
                           
                            <p style={{height:'20px',lineHeight:'20px',margin:'0px 0px 0px 5px',color:'#939393',textAlign:'center'}}> <img src="../../../image/beian-icon.png" /> 沪公网安备 31010102005457号</p>
                            <p style={{height:'20px',lineHeight:'20px',margin:'0px 0px 0px 5px',color:'#939393',textAlign:'center'}}>沪ICP备15037205号-2 </p>
                            
                            </a>
                       </div> */}
                       <span style={{color:'#333333'}}>Copyright@ 2019 jiangshi,com All Rights Reserved</span>
                       <span style={{color:'#333333'}}>豫ICP备16016051号-1</span>
                    </a>
                    
                </div>
                {this.state.WxShow?
                    <div className="wxPopout" >
                        <div className="wxBackground"  onClick={()=>this._wxPopout('bg')}></div>
                        <img src="../../../image/doctor/code.png" className={this.state.showImg? "showImg":"hideImg"}></img>
                    </div>
                    :
                    null
                }
            </div>
        )
    }

}



