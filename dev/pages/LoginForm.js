import React from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';
import { Form, Select, Button, Input, Icon, Checkbox } from 'antd';
import '../components/Card.css';
import bcrypt from 'bcrypt-nodejs';

const FormItem = Form.Item;
class NormalLoginForm extends React.Component {
  constructor(props) {
	super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      	bcrypt.hash(values.password, null, null, function(err, hash) {
      		// console.log(hash);
		});
        // console.log('Received values of form: ', values.userName);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    	<div className="loginDiv">
	      <Form onSubmit={this.handleSubmit} className="login-form">
	        <FormItem wrapperCol={{ span: 6 }}>
	          {getFieldDecorator('userName', {
	            rules: [{ required: true, message: 'Please input your username!' }],
	          })(
	            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
	          )}
	        </FormItem>
	        <FormItem wrapperCol={{ span: 6 }}>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: 'Please input your Password!' }],
	          })(
	            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
	          )}
	        </FormItem>
	        <FormItem labelCol={{ span: 12 }} wrapperCol={{ span: 6 }}>
	          {getFieldDecorator('remember', {
	            valuePropName: 'checked',
	            initialValue: true,
	          })(
	            <Checkbox>Remember me</Checkbox>
	          )}
	          <a className="login-form-forgot" href="">Forgot password</a>
	        </FormItem>
	        <FormItem wrapperCol={{ span: 6 }}>  
	          <Button type="primary" htmlType="submit" className="login-form-button">
	            Log in
	          </Button>
	          Or <Link to='/signup'>
	            register now!
	          </Link>
	        </FormItem>
	      </Form>
      </div>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;