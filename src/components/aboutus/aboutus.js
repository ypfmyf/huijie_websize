import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import './aboutus.css'


 class Aboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:window.innerWidth || document.documentElement.clientWidth, // 得到当前的屏幕宽度
            headerRight:'aboutus',
        }
       
    }
    render() {
        return(
            <div>
                   <Header headerRight={this.state.headerRight}></Header>
                   <div className={this.state.width>768? 'content content_PC':'content'}>
                       <div className={this.state.width>768? 'con_header con_header_PC':'con_header'}>
                           <div>
                                <div  className={this.state.width>768? 'header_H header_H_PC':'header_H'}>
                                    <img src="./image/product/pic@2x.png"></img>
                                    <span style={{fontSize:this.state.width>768? '20px':'1.12rem',color:'#333333',}}>联系我们</span>
                                    <img src="./image/product/pic@2x.png"></img>
                                </div>
                                <div style={{fontSize:this.state.width>768? '14px':'0.8rem',color:'#999999',textAlign:'center',marginTop:this.state.width>768? '14px':'0.53rem'}}>Contact US</div>

                           </div>
                       </div>
                       <div style={{width:'80%',marginLeft:'10%',marginBottom:this.state.width>768? '99px':'2.1rem'}}>
                          <div className={this.state.width>768? "aboutus_PC":"aboutus"}> 
                              <img src="./image/about/imag-business@2x.png" style={{height:this.state.width>768? '364px':'11.73rem',width:this.state.width>768? '490px':'100%'}}></img>
                              <div style={{marginLeft:this.state.width>768? '60px':''}}>
                                    <div className={this.state.width>768? "aboutus_title_PC":"aboutus_title"}>江氏农业开发有限公司</div>
                                    <div className={this.state.width>768? "aboutus_h3_PC":"aboutus_h3"}>服务热线：</div>
                                    <div className={this.state.width>768? "aboutus_h4_PC":"aboutus_h3 aboutus_h4"}>公司地址：</div>
                                    <div className={this.state.width>768? "aboutus_h4_PC":"aboutus_h3 aboutus_h4"}>公司邮箱：</div>
                                    <div className={this.state.width>768? "aboutus_h4_PC":"aboutus_h3 aboutus_h4"}>邮政编码：</div>
                                    <div className={this.state.width>768? "aboutus_img_ul_PC":"aboutus_img_ul"}>
                                        <div className="aboutus_img_li" style={{marginRight:this.state.width>768? "30px":""}}>
                                            <img src="./image/about/code-gzh@2x.png" style={{width:this.state.width>768? '140px':'7.63rem',height:this.state.width>768? '139px':'7.63rem'}}></img>
                                            <div>公众号</div>
                                        </div>
                                        <div className="aboutus_img_li">
                                            <img src="./image/about/code-wxsc@2x.png" style={{width:this.state.width>768? '140px':'7.63rem',height:this.state.width>768? '139px':'7.63rem'}}></img>
                                            <div>微信商城</div>
                                        </div>

                                    </div>


                              </div>
                          
                          </div>
                         

                       </div>
                       {this.state.width>768?
                             ""
                             :
                             <Footer></Footer>
                            
                         }
                   </div>
                  
            </div>
          
        )
    }

}
export default Aboutus;


