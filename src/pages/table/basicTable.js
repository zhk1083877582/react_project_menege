

import React,{Component} from 'react';
import { Card, Table} from 'antd'
import axios from '../../axios';

class basicTable extends Component{
  state= {
    dataSource:[],
    dataSource2:[],
    selectedItem:{}
  }
  componentDidMount(){
    const Data = [
      {
        id:'0',
        userName:'jack',
        sex:1,
        state:'1',
        age:'18',
        birthday:'01-10'
      },
      {
        id:'1',
        userName:'lili',
        sex:2,
        state:'3',
        age:'20',
        birthday:'11-20'
      },
      {
        id:'2',
        userName:'tom',
        sex:1,
        state:'3',
        age:'30',
        birthday:'10-10'
      }
    ];
    Data.map((item,index)=>{
      item.key = index
    })
    this.setState({
      dataSource:Data
    })
    this.GetDataSource2();
  }
  GetDataSource2 = ()=>{
    axios.Get({
      url:'/table/list',
      data:{
        // params:1,
        isShowloading:true
      },
    }).then((res)=>{
      console.log(res);
      res.result.map((item,index)=>{
        item.key = index
      })
      this.setState({
        dataSource2 : res.result
      })
    })
  }
  onRowCilck = (record,index)=>{
    let selectKey = [index];
    this.setState({
      selectedRowKeys:selectKey,
      selectedItem: record
    })
    console.log('当前选中',record)
  }
  render(){
    const columns = [
      {
        title:'id',
        dataIndex:'id'
      },
      {
        title:'用户名',
        dataIndex:'userName'
      },
      {
        title:'性别',
        dataIndex:'sex',
        render(num){
          return num === 1? '男':'女'
        }
      },
      {
        title:'国籍',
        dataIndex:'state',
        render(num){
          let config = {
            '1':'中国',
            '2':'美国',
            '3':'英国'
          }
          return config[num]
        }
      },
      {
        title:'年龄',
        dataIndex:'age'
      },
      {
        title:'生日',
        dataIndex:'birthday'
      }
    ] 
    const {selectedRowKeys} = this.state
    const rowSelection = {
      type:'radio',
      selectedRowKeys
    }
    return(
      <div>
        <Card title='基础表格'>
          <Table 
            dataSource={this.state.dataSource} 
            columns={columns}
            pagination={false}
          />
        </Card>
        <Card title='动态数据表格' style={{margin:'10px 0'}}>
          <Table 
            dataSource={this.state.dataSource2} 
            columns={columns}
            pagination={false}
            rowSelection={ rowSelection }
            onRow={(record,index) => {
              return {
                onClick: () => {
                  console.log(123)
                  this.onRowCilck(record,index);
                }, // 点击行
              };
            }}
          />
        </Card>
      </div>
    )
  }
}
export default basicTable;