import React,{ Component } from "react";
import { Card, Form, Button, Input, InputNumber,Switch, Checkbox, Radio, Select, DatePicker, TimePicker, Upload, Icon, message} from 'antd'
import moment from 'moment'
import './index.less';
import RadioGroup from "antd/lib/radio/group";

const FormItem = Form.Item;
const { Option } = Select;
const TextArea = Input.TextArea;
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
class Register extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false });
  
  handlePreview = async file => {
    if (file.thumbUrl) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
  handleChange = ({ fileList }) => this.setState({ fileList });
  componentWillMount(){
    console.log(this.props.form)
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
    const { fileList } = this.state;
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
    const OffsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: { 
          span: 12,
          offset: 4 
        },
      },
    };
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
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
            <FormItem label='技术' {...formItemLayout}>
              {getFieldDecorator('Technology', {
              })(
                <Select placeholder="请选择你的技术" mode='multiple'>
                  <Option value="1">HTML</Option>
                  <Option value="2">CSS</Option>
                  <Option value="3">JavaScript</Option>
                </Select>,
              )}
            </FormItem>
            <FormItem label='婚姻状况' {...formItemLayout}>
              {getFieldDecorator('isMerried', {
                valuePropName: 'checked',
                initialValue:true
              })(
                <Switch />
              )}
            </FormItem>
            <FormItem label='生日' {...formItemLayout}>
              {getFieldDecorator('birthday', {
                initialValue: moment('20191020') 
              })(
                <DatePicker />
              )}
            </FormItem>
            <FormItem label='地址' {...formItemLayout}>
              {getFieldDecorator('address', {
                
              })(
                <TextArea
                  placeholder="请输入地址"
                  autosize={{ minRows: 3, maxRows: 5 }}
                />
              )}
            </FormItem>

            <FormItem label='时间控件' {...formItemLayout}>
              {getFieldDecorator('Timepicker', {
                
              })(
                <TimePicker></TimePicker>
              )}
            </FormItem>

            <FormItem label='上传控件' {...formItemLayout}>
              {getFieldDecorator('upload', {
                
              })(
                <Upload 
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
              )}
            </FormItem>
            
            <FormItem {...OffsetLayout}>
              {getFieldDecorator('Checkbox', {
                
                })(
                  <Checkbox>我已阅读条约</Checkbox>
                )
              }
            </FormItem>
            <FormItem {...OffsetLayout}>
              {getFieldDecorator('Checkbox', {
                
                })(
                  <Button type="primary" htmlType="submit" onClick={this.handleSubmit} className="login-form-button">
                    注册
                  </Button>
                )
              }
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(Register);