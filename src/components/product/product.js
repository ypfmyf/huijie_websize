import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './product.css'


 class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width:window.innerWidth || document.documentElement.clientWidth, // 得到当前的屏幕宽度
            headerRight:'product',
            productList:[
                {proName:'山茶油',proImage:'../../../image/product/imag-oil@2x.png',proAdvertising:'绿色有机，营养丰富',
                proIntroduce01:'主要原料：油茶籽',proIntroduce02:'产地：中国安徽',proIntroduce03:'规 格：100ml',
                proIntroduce04:'保 质 期：18个月', proIntroduce05:'使用方法：热炒、油炸、蒸煮、凉拌',
                proIntroduce06:'压榨工艺：传统手工采摘物理压榨',proIntroduce07:'储藏方法：常温避光，如温度低出现絮状属正常现象',
            },
            {proName:'生态富硒米',proImage:'../../../image/product/imag-rice@2x.png',proAdvertising:'优质育苗，人工插秧',
                proIntroduce01:'商品名称：徽膳缘富硒米',proIntroduce02:'配 料：籼米',proIntroduce03:'产 地：安徽池州',
                proIntroduce04:'净 含 量：300g/500g/1kg', proIntroduce05:'质 量：一级',
                proIntroduce06:'保 质 期：12个月',
            },
            {proName:'池州红茶',proImage:'../../../image/product/imag-tea@2x.png',proAdvertising:'原地取材，鲜嫩采摘',
                proIntroduce01:'商品名称：徽膳缘红茶',proIntroduce02:'配 料：山茶叶',proIntroduce03:'产 地：安徽池州',
                proIntroduce04:'净 含 量：120g一盒', proIntroduce05:'质 量：一级',
                proIntroduce06:'保 质 期：越陈越香',
            },
            {proName:'黑木耳',proImage:'../../../image/product/imag-fungus@2x.png',proAdvertising:'天然、绿色、纯净',
            proIntroduce01:'品 牌：徽膳缘',proIntroduce02:'产 地：安徽池州',proIntroduce03:'净 含 量：250g',
            proIntroduce04:'保 质 期：12个月', proIntroduce05:'储 存：阴凉干燥处',
            }
            ]
        }
       
    }
    componentDidMount() {

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
                                    <span style={{fontSize:'1.12rem',color:'#333333',}}>产品介绍</span>
                                    <img src="../../../image/product/pic@2x.png"></img>
                                </div>
                                <div style={{fontSize:'0.8rem',color:'#999999',textAlign:'center',marginTop:'0.53rem'}}>Product Description</div>

                           </div>
                       </div>
                       <div style={{width:'90%',marginLeft:'5%',marginBottom:'2.1rem'}}>
                            

                            {this.state.productList.map((data,index) => {
                                 return (
                                        <div>
                                            <img src={data.proImage} style={{width:'100%',height:'16rem',marginTop:'3.23rem'}}></img>
                                            <div className='pro_con_con'>
                                                <div style={{fontWeight:'bold'}}>{data.proName}</div>
                                                <div style={{fontSize:'0.64rem',color:'#666666',marginTop:'0.64rem'}}>{data.proAdvertising}</div>
                                            </div>
                                            <div className="pro_con_Bor"></div>
                                            <div className="pro_con_introduce">
                                                <div>{data.proIntroduce01}</div>
                                                <div>{data.proIntroduce02}</div>
                                                <div>{data.proIntroduce03}</div>
                                                <div>{data.proIntroduce04}</div>
                                                <div>{data.proIntroduce05}</div>
                                                <div>{data.proIntroduce06}</div>
                                                <div>{data.proIntroduce07}</div>
                                            </div>
                                        </div>
                                   )
                            })}
                       </div>
                    
                       <Footer></Footer>
                </div>
                

            </div>
        )
    }

}
export default Product;