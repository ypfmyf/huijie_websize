import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './about.css'

 class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:window.innerWidth || document.documentElement.clientWidth, // 得到当前的屏幕宽度
            headerRight:'about',
        }
       
    }



  

    render() {
        return(
            <div >
                <Header headerRight={this.state.headerRight}></Header>
                <div className={this.state.width>768? 'content content_PC':'content'}>
                       <div className={this.state.width>768? 'con_header con_header_PC':'con_header'}>
                           <div>
                                <div  className={this.state.width>768? 'header_H header_H_PC':'header_H'}>
                                    <img src="./image/product/pic@2x.png"></img>
                                    <span style={{fontSize:this.state.width>768? '20px':'1.12rem',color:'#333333',}}>关于我们</span>
                                    <img src="./image/product/pic@2x.png"></img>
                                </div>
                                <div style={{fontSize:this.state.width>768? '14px':'0.8rem',color:'#999999',textAlign:'center',marginTop:this.state.width>768? '14px':'0.53rem'}}>About US</div>

                           </div>
                       </div>
                       <div style={{width:'80%',marginLeft:'10%',marginBottom:this.state.width>768? '99px':'2.1rem'}}>
                       {this.state.width>768?
                           <div>
                                   <div className="about_PC">
                                       <div>
                                            <div className="about_title_PC">
                                                <span style={{paddingLeft:'10px'}}>公司介绍</span>
                                            </div>
                                            <div style={{fontSize:'14px',color:'#333',marginTop:'24px'}}>
                                                <span style={{lineHeight:'30px'}}>江氏农业开发有限公司组建于2016年10月，注册资金5000万元人民币，是一家民营企业，以加工山茶油和常规稻为主，肉制品、蔬菜制品以及水产制品为辅。公司注册有“御膳奇果”、“徽膳缘”、“江膳缘”等商标，同时取得了安徽省著名商标“奇坡”和“升金湖”的使用授权。力争将公司山茶油品牌打造成国内一线品牌。公司产品主要有山茶油、菜籽油、大米、腊肉、板鸭、咸鱼干、木耳、香菇等蔬菜制品。</span>
                                            </div>
                                       </div>
                                       <div style={{marginLeft:'45px',}}> <img src="./image/about/imag-company@2x.png" style={{width:'394px',height:'256px',}}></img></div>

                                  </div>
                                  <div className="about_title_PC" style={{marginTop:'61px'}}>
                                        <span style={{paddingLeft:'10px'}}>企业文化</span>
                                  </div>
                                  <img src="./image/about/imag-culture@2x.png" style={{width:'100%',height:'242px',marginTop:'31px'}}></img>
                                  <div className="about_title_PC" style={{marginTop:'62px'}}>
                                       <span style={{paddingLeft:'10px'}}>山茶油基地介绍</span>
                                 </div>
                                  <div className="about_PC" style={{marginTop:'32px'}}>
                                       <div style={{marginRight:'40px',}}> <img src="./image/about/imag-base@2x.png" style={{width:'473px',height:'305px',}}></img></div>
                                       <div>
                                            <div style={{fontSize:'14px',color:'#333',}}>
                                                <span style={{lineHeight:'30px'}}>江氏农业开发有限公司组建于2016年10月，注册资金5000万元人民币，是一家民营企业，以加工山茶油和常规稻为主，肉制品、蔬菜制品以及水产制品为辅。
        江氏农业开发有限公司年产1000吨茶油及年产3000吨大米加工项目投资总额为11293万元。2018年初，公司年产1000吨茶油项目已建设完毕。公司为实施市场拓展战略，于2018年初在上海独资成立了互联网销售公司：上海徽杰农业科技有限公司。
        公司注册有“御膳奇果”、“徽膳缘”、“江膳缘”等商标，同时取得了安徽省著名商标“奇坡”和“升金湖”的使用授权。力争将公司山茶油品牌打造成国内一线品牌。公司产品主要有山茶油、菜籽油、大米、腊肉、板鸭、咸鱼干、木耳、香菇等蔬菜制品。</span>
                                            </div>
                                       </div>
                                      

                                  </div>


                           </div>
                           
                            :

                            <div>
                                    <div className="about_title">
                                        <span style={{paddingLeft:'0.53rem'}}>公司介绍</span>
                                    </div>
                                    <div style={{fontSize:'0.7rem',color:'#333',marginTop:'1.07rem'}}>
                                        <span style={{lineHeight:'1.2rem'}}>江氏农业开发有限公司组建于2016年10月，注册资金5000万元人民币，是一家民营企业，以加工山茶油和常规稻为主，肉制品、蔬菜制品以及水产制品为辅。公司注册有“御膳奇果”、“徽膳缘”、“江膳缘”等商标，同时取得了安徽省著名商标“奇坡”和“升金湖”的使用授权。力争将公司山茶油品牌打造成国内一线品牌。公司产品主要有山茶油、菜籽油、大米、腊肉、板鸭、咸鱼干、木耳、香菇等蔬菜制品。</span>
                                    </div>
                                    <img src="./image/about/imag-company@2x.png" style={{width:'100%',height:'9.5rem',marginTop:'1.07rem'}}></img>
                                    <div className="about_title">
                                        <span style={{paddingLeft:'0.53rem'}}>企业文化</span>
                                    </div>
                                    <img src="./image/about/imag-culture@2x.png" style={{width:'100%',height:'6.8rem',marginTop:'1.07rem'}}></img>
                                    <div className="about_title">
                                        <span style={{paddingLeft:'0.53rem'}}>山茶油基地介绍</span>
                                    </div>
                                    <div style={{fontSize:'0.7rem',color:'#333',marginTop:'1.07rem'}}>
                                        <span style={{lineHeight:'1.2rem'}}>江氏农业开发有限公司组建于2016年10月，注册资金5000万元人民币，是一家民营企业，以加工山茶油和常规稻为主，肉制品、蔬菜制品以及水产制品为辅。
        江氏农业开发有限公司年产1000吨茶油及年产3000吨大米加工项目投资总额为11293万元。2018年初，公司年产1000吨茶油项目已建设完毕。公司为实施市场拓展战略，于2018年初在上海独资成立了互联网销售公司：上海徽杰农业科技有限公司。
        公司注册有“御膳奇果”、“徽膳缘”、“江膳缘”等商标，同时取得了安徽省著名商标“奇坡”和“升金湖”的使用授权。力争将公司山茶油品牌打造成国内一线品牌。公司产品主要有山茶油、菜籽油、大米、腊肉、板鸭、咸鱼干、木耳、香菇等蔬菜制品。</span>
                                    </div>
                                    <img src="./image/about/imag-base@2x.png" style={{width:'100%',height:'10.4rem',marginTop:'1.07rem'}}></img>

                                    <Footer></Footer>
                            </div>
                        }
                        </div>
                      


                </div>
                

            </div>
        )
    }

}
export default About;