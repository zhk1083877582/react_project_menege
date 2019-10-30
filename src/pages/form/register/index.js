import React,{ Component } from "react";
import { Card, Form, Button, Input, InputNumber, Checkbox, Radio, Select, DatePicker, TimePicker, Upload, Icon, message} from 'antd'
import './index.less';
import RadioGroup from "antd/lib/radio/group";

const FormItem = Form.Item;
const { Option } = Select;
class Register extends Component {
  
  componentWillMount(){
    console.log(this.props.form)
  }
  
  render (){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    return (
      <div className="Register">
        <Card title='注册表单'>
          <Form layout='horizontal'>
            <FormItem label='用户名' {...formItemLayout}>
              {
                getFieldDecorator('username', {
                rules: [
                  { required: true, message: '请输入用户名!' },
                  { min: 5,max:10, message:'长度不在范围内' },
                  { pattern: /^\w+$/g, message:'用户名必须为英文字母和数字' }
                ],
              })(
                <Input placeholder="请输入用户名"/>,
              )
              }
            </FormItem>
            <FormItem label='密码' {...formItemLayout}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input type="password" placeholder="请输入密码"/>,
              )}
            </FormItem>
            <FormItem label='性别' {...formItemLayout}>
              {getFieldDecorator('sex', {
                initialValue: '2',
              })(
                <RadioGroup>
                  <Radio value='1'>男</Radio>
                  <Radio value='2'>女</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem label='年龄' {...formItemLayout}>
              {getFieldDecorator('age', {
                initialValue: 25
              })(
                <InputNumber min={1} max={100} />
              )}
            </FormItem>
            <FormItem label='国家' {...formItemLayout}>
              {getFieldDecorator('state', {
                rules: [{ required: false, message: '请选择你的城市!' }],
              })(
                <Select placeholder="请选择你的城市">
                  <Option value="china">China</Option>
                  <Option value="usa">U.S.A</Option>
                  <Option value="uk">U.k</Option>
                </Select>,
              )}
            </FormItem>
            
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(Register);