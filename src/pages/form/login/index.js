import React,{ Component } from "react";
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, message } from "antd";
import './index.less';


const FormItem = Form.Item
class FormLogin extends Component {
  
  componentWillMount(){
    
  }
  handleSubmit=()=>{
    let userInfo = this.props.form.getFieldsValue()
    console.log(this.props.form,userInfo)
    this.props.form.validateFields((err,values)=>{
      if(!err){
        message.success(`当前提交的用户名：${userInfo.username} 密码是：${userInfo.password}`)
      }
    })
  }
  render (){
    const { getFieldDecorator } = this.props.form;
    return(
      <div className="Login">
       <Card title="登录行内表单" className='Card_wrap'> 
        <Form layout='inline'>
          <FormItem>
            <Input placeholder='请输入用户名'/>
          </FormItem>
          <FormItem>
            <Input placeholder='请输入密码'/>
          </FormItem>
          <FormItem>
            <Button type="primary">登录</Button>
          </FormItem>
        </Form>
       </Card>
       <Card title="登录水平表单" className='Card_wrap'> 
        <Form layout='horizontal' style={{width:'300px'}}>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '请输入用户名!' },
              { min: 5,max:10, message:'长度不在范围内' },
              { pattern: /^\w+$/g, message:'用户名必须为英文字母和数字' }
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </FormItem>
        <FormItem>
          <Row>
            <Col span={12}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>记住密码</Checkbox>)}
            </Col>
            <Col span={12} style={{textAlign:'right'}}>
              <a className="login-form-forgot" href="#">
                忘记密码
              </a>
            </Col>
          </Row>
          
          
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" onClick={this.handleSubmit} className="login-form-button">
            登录
          </Button>
        </FormItem>

        </Form>

       </Card>
      </div>
    )
  }
}
export default Form.create()(FormLogin);