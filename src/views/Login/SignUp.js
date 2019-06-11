import React from "react";
import { Form, Icon, Input, Button } from "antd";

function SignUp(props) {
  const { getFieldDecorator, validateFields } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator("name", {
          rules: [{ required: true, message: "Please input your name!" }]
        })(<Input prefix={<Icon type="user" />} placeholder="Name" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [{ required: true, message: "Please input your e-mail!" }]
        })(<Input prefix={<Icon type="mail" />} placeholder="E-mail" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "Please input your username!" }]
        })(<Input prefix={<Icon type="user" />} placeholder="Username" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Please input your Password!" }]
        })(
          <Input
            prefix={<Icon type="lock" />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item style={{ textAlign: "center" }}>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button custom-primary-button"
        >
          Create User
        </Button>
      </Form.Item>
    </Form>
  );
}

const SignUpForm = Form.create({ name: "signup" })(SignUp);

export default SignUpForm;
