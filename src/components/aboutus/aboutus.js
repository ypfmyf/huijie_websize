import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import './aboutus.css'


 class Aboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:window.innerWidth || document.documentElement.clientWidth, // 得到当前的屏幕宽度
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
            <div>
                   <Header headerRight={this.state.headerRight}></Header>
                  <div className="content">
                        <div className="Content_Top">
                            <img src="../../../image/doctor/001.png" className="Top_background"></img>
                            <div className="background_title">
                                <div className="title">
                                  <span className="titFd">懂行业，更懂技术</span>
                                  <span>在互联网技术领域中，对医药行业有自己独到的见解</span>
                                </div>
                           </div>
                        </div>
                        <div className="Content_Text">
                            <div className="knowGeji">
                                <span>了解咯叽</span>
                            </div>
                            <div className="Geji_text">
                                <span>
                                上海咯叽科技网络有限公司于2014年9月成立，为了给医药企业中各个环节提供服务，也给医药事业提供了可持续发展的智能解决方案，咯叽科技始终不忘初心，让工作生活更便利。
                                </span>
                            </div>
                            <div className="knowGeji knowGeji02">
                                <span>商务合作</span>
                            </div>
                            <div className="cooperation">
                                <span>商务合作</span>
                            </div>
                            <div className="code">
                                    <img src="../../../image/doctor/code.png" className="codeImage"></img>
                            </div>
                            <div className="opinion">
                                    <span>意见建议及咨询</span>
                                    <span>support@gegee.cc</span>
                            </div>
                            <div className="opinion">
                                    <span>客服热线</span>
                                    <span>150-0045-8934</span>
                            </div>
                        </div>


                        <Footer></Footer>

                    </div>

                  
            </div>
          
        )
    }

}
export default Aboutus;


