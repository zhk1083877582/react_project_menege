import React,{ Component } from "react";
import { Card, Carousel } from 'antd'

import '../ui.less'
import './index.less';

class Carousels extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  }
  componentWillMount(){
    
  }
  onChange=(a, b, c)=> {
    console.log(a, b, c);
  }
  
  render (){
    const imgList = [
      '1.png','2.png','3.png','4.png'
    ]
    return(
      <div className="Carousels">
        <Card title="基础轮播" className="Card_warp">
          <Carousel autoplay afterChange={this.onChange}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Card>

        <Card title="图片轮播" className="Card_warp">
          <Carousel autoplay afterChange={this.onChange}>
            {
              imgList.map((item)=>
                <div>
                  <img src={'/gallery/'+item} alt='轮播图' style={{width:'100%',height:'100%'}}/>
                </div>
              )
            }
          </Carousel>
        </Card>
      </div>
    )
  }
}
export default Carousels;