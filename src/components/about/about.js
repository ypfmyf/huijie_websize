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
            issue:[
                { img: '../../../image/doctor/wrong01.png', title:'不测血压' },
                { img: '../../../image/doctor/wrong02.png', title:'不坚持测量' },
                { img: '../../../image/doctor/wrong03.png', title:'血压没有记录' },
                { img: '../../../image/doctor/wrong04.png', title:'数据不直观' },
              ] ,
              cooperation:[
                { img: '../../../image/doctor/machine01.png', title01:'鱼跃YE900',title02:'医用电子血压仪' },
                { img: '../../../image/doctor/machine02.png', title01:'鱼跃YE680A',title02:'臂式电子血压仪' },
              ],
              code:[
                  {img:'../../../image/doctor/code01.png',title:'中国高血压达标'},
                  {img:'../../../image/doctor/code02.png',title:'肾科达标行'},
              ]
        }
       
    }



  

    render() {
        return(
            <div >
                <Header headerRight={this.state.headerRight}></Header>
                <div className='content'>
                      <div className='con_header'>
                           <div>
                                <div  className='header_H'>
                                    <img src="../../../image/product/pic@2x.png"></img>
                                    <span style={{fontSize:'1.12rem',color:'#333333',}}>关于我们</span>
                                    <img src="../../../image/product/pic@2x.png"></img>
                                </div>
                                <div style={{fontSize:'0.8rem',color:'#999999',textAlign:'center',marginTop:'0.53rem'}}>About US</div>

                           </div>
                       </div>
                       <div style={{width:'90%',marginLeft:'5%',marginBottom:'2.1rem'}}>
                             <div className="about_title">
                                 <span style={{paddingLeft:'0.53rem'}}>公司介绍</span>
                             </div>
                             <div style={{fontSize:'0.7rem',color:'#333',marginTop:'1.07rem'}}>
                                 <span style={{lineHeight:'1.2rem'}}>江氏农业开发有限公司组建于2016年10月，注册资金5000万元人民币，是一家民营企业，以加工山茶油和常规稻为主，肉制品、蔬菜制品以及水产制品为辅。公司注册有“御膳奇果”、“徽膳缘”、“江膳缘”等商标，同时取得了安徽省著名商标“奇坡”和“升金湖”的使用授权。力争将公司山茶油品牌打造成国内一线品牌。公司产品主要有山茶油、菜籽油、大米、腊肉、板鸭、咸鱼干、木耳、香菇等蔬菜制品。</span>
                             </div>
                             <img src="../../../image/about/imag-company@2x.png" style={{width:'100%',height:'9.5rem',marginTop:'1.07rem'}}></img>
                             <div className="about_title">
                                 <span style={{paddingLeft:'0.53rem'}}>企业文化</span>
                             </div>
                             <img src="../../../image/about/imag-culture@2x.png" style={{width:'100%',height:'6.8rem',marginTop:'1.07rem'}}></img>
                             <div className="about_title">
                                 <span style={{paddingLeft:'0.53rem'}}>山茶油基地介绍</span>
                             </div>
                             <div style={{fontSize:'0.7rem',color:'#333',marginTop:'1.07rem'}}>
                                 <span style={{lineHeight:'1.2rem'}}>江氏农业开发有限公司组建于2016年10月，注册资金5000万元人民币，是一家民营企业，以加工山茶油和常规稻为主，肉制品、蔬菜制品以及水产制品为辅。
江氏农业开发有限公司年产1000吨茶油及年产3000吨大米加工项目投资总额为11293万元。2018年初，公司年产1000吨茶油项目已建设完毕。公司为实施市场拓展战略，于2018年初在上海独资成立了互联网销售公司：上海徽杰农业科技有限公司。
公司注册有“御膳奇果”、“徽膳缘”、“江膳缘”等商标，同时取得了安徽省著名商标“奇坡”和“升金湖”的使用授权。力争将公司山茶油品牌打造成国内一线品牌。公司产品主要有山茶油、菜籽油、大米、腊肉、板鸭、咸鱼干、木耳、香菇等蔬菜制品。</span>
                             </div>
                             <img src="../../../image/about/imag-base@2x.png" style={{width:'100%',height:'10.4rem',marginTop:'1.07rem'}}></img>


                       </div>
                       <Footer></Footer>



                </div>
                

            </div>
        )
    }

}
export default About;