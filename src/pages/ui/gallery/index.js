import React,{ Component } from "react";
import { Card, Row, Col, Modal } from 'antd'
import './index.less';
const { Meta } = Card;
class Gallery extends Component {

  state = { visible: false };
  
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  openGallery=(data)=>{
    this.setState({
      visible:true,
      ModalImg:data
    })
  }
  render (){
    const imgs= [
      ['1.png','2.png','3.png','4.png','5.png',],
      ['6.png','7.png','8.png','9.png','10.png',],
      ['11.png','12.png','13.png','14.png','15.png',],
      ['16.png','17.png','18.png','19.png','20.png',],
      ['21.png','22.png','23.png','24.png','25.png',],
    ]
    const imgList = imgs.map((list)=>list.map((item,key)=>
      <Card
        cover={<img alt='' src={'/gallery/'+item}  onClick={()=>this.openGallery('/gallery/'+item)} />}
        style={{marginBottom:10}}
        key={key}
        
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />  
      </Card>
    ))
    return(
      <div className="Gallery">
        <Row gutter={10}> 
          <Col span={4}>
            { imgList[0] }
          </Col>
          <Col span={4}>
            { imgList[1] }
          </Col>
          <Col span={4}>
            { imgList[2] }
          </Col>
          <Col span={4}>
            { imgList[3] }
          </Col>
          <Col span={4}>
            { imgList[4] }
          </Col>
          <Col span={4}>
            { imgList[0] }
          </Col>
        </Row>
        <Modal
          width={300}
          height={500}
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <p><img alt='Modal_img' src={this.state.ModalImg} style={{width:'100%',height:'100%'}} /></p>
        </Modal>
      </div>
    )
  }
}
export default Gallery;