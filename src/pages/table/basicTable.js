

import React,{Component} from 'react';
import { Card, Table} from 'antd'

class basicTable extends Component{
  state= {
    dataSource:[],
    dataSource2:[]
  }
  componentDidMount(){
    const Data = [
      {
        id:'0',
        userName:'jack',
        sex:'男',
        state:'中国',
        age:'18',
        birthday:'01-10'
      },
      {
        id:'1',
        userName:'lili',
        sex:'女',
        state:'美国',
        age:'20',
        birthday:'11-20'
      },
      {
        id:'2',
        userName:'tom',
        sex:'男',
        state:'英国',
        age:'30',
        birthday:'10-10'
      }
    ]
    this.setState({
      dataSource:Data
    })
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
        dataIndex:'sex'
      },
      {
        title:'国籍',
        dataIndex:'state'
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
    return(
      <div>
        <Card title='基础表格'>
          <Table 
            dataSource={this.state.dataSource} 
            columns={columns}
            pagination={false}
          />
        </Card>
        <Card title='动态数据表格' style={{margin:'0 10px'}}>
          <Table 
            dataSource={this.state.dataSource2} 
            columns={columns}
            pagination={false}
          />
        </Card>
      </div>
    )
  }
}
export default basicTable;