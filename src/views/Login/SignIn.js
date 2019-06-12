import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { useStateValue } from "../../providers/StateProvider";
import { withRouter } from "react-router-dom";

import API from "../../services/api";

function SignIn(props) {
  const { getFieldDecorator, validateFields } = props.form;
  const { history } = props;

  const [{ data }, dispatch] = useStateValue();

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        API.post("login", values)
          .then(response => {
            if (response && response.data && response.data.fail) {
              alert(response.data.errorMessage);
            } else if (response.data) {
              dispatch({
                type: "login",
                newUser: response.data
              });
              history.push("/home");
            }
          })
          .catch(error => {
            if (error.response && error.response.data) {
              alert(error.response.data);
            }
          });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
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
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

const SignInForm = Form.create({ name: "normal_login" })(SignIn);

export default withRouter(SignInForm);
