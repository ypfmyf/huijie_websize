import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import ReactGA from 'react-ga';
import './sell.css'


 class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:window.innerWidth || document.documentElement.clientWidth, // 得到当前的屏幕宽度
            manage:[
                {img:'../../../image/doctor/sales01.png',title:'行为管理'},
                {img:'../../../image/doctor/sales02.png',title:'绩效考核'},
                {img:'../../../image/doctor/sales03.png',title:'培训体系'},
            ]
        }
       
    }
    handleScroll() { 
        if (document.documentElement.scrollTop >80) {
           this.setState({
            headerRight: true
           })
         }else{
            this.setState({
                headerRight:false
               }) 
         }
       }
       componentDidMount() {
         window.onscroll = () => this.handleScroll();
       }

  

    render() {
        return(
            <div >
                 <Header headerRight={this.state.headerRight}></Header>
                <div className='content'>
                      <div className="Content_Top">
                           <img src="../../../image/doctor/004.png" className="Top_background"></img>
                           <div className="background_title">
                                <div className="title">
                                  <span className="titFd">帮助销售提高工作效率</span>
                                  <span>管理销售代表的工作行为，提高专业素养</span>
                                </div>
                           </div>
                       </div>
                       <div className='Content_Text'>
                           <div className="knowGeji">
                                <span>服务与支持——销售</span>
                            </div>
                            <div className="Geji_text">
                                <span>
                                管理销售代表，方便有效的行为管理，提高专业素养，发挥更大能效。
                                </span>
                            </div>
                            <div className="sell_list">
                                  {this.state.manage.map((data,index) => {
                                                return (
                                                    <div className="list" key={index}>
                                                        <img src={data.img} />
                                                        <div>{data.title}</div>
                                                    </div>
                                                )
                                       })}
                          
                            </div>
                            <div className="pageShow">
                                  <div className="exhibition_title">页面展示</div>
                                  <div className="exhibitionf"> 
                                        <div className="list">
                                            <img src="../../../image/doctor/phone01.png"/>
                                            <div>
                                                销售根据自己的行为安排进行任务执行，team leader可查看等操作
                                            </div>
                                        
                                        </div>
                                        <div className="list">
                                            <div>
                                                通过不同的角色定位，在同一个内容上会有详细区分
                                            </div>
                                           <img src="../../../image/doctor/phone02.png"/>
                                           
                                        </div>
                                  
                                  
                                  
                                  </div>



                            </div>

                       
                       </div>
                       <Footer></Footer>



                </div>
                

            </div>
        )
    }

}
export default Sell;