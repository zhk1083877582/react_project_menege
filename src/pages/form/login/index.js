import React,{ Component } from "react";
import { Card, Form, Icon, Input, Button, Checkbox } from "antd";
import './index.less';


const FormItem = Form.Item
class Login extends Component {
  
  componentWillMount(){
    
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
        <Form layout='horizontal'>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">注册</a>
        </Form.Item>
        </Form>

       </Card>
      </div>
    )
  }
}
export default Login;