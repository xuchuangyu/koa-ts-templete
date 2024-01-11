/*
 * @Date: 2024-01-03 14:14:52
 * @Description: 
 * @LastEditTime: 2024-01-11 14:37:18
 * @FilePath: \react-hook-ts\src\pages\Login\index.tsx
 */
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom'
import './index.scss'

// eslint-disable-next-line react-hooks/rules-of-hooks


type FieldType = {
  username?: string;
  password?: string;
};


const Login=()=>{
  const [form] = Form.useForm();

   const navigate = useNavigate()
   const onFinish = async (values: any) => {
    // await user.login(state.loginForm)
    navigate('/');
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return <div className="login-container">
      <Form
          name="basic"
          style={{ maxWidth: 520 }}
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="login-form"
        >
          <div className='title-container'>管理后台</div>
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='用户名' />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password'  />
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" block>
                登录
            </Button>
          </Form.Item>
          <div className="tips">
            <div style={{position: 'relative'}}>
              <span style={{marginRight: '20px'}}>用户名: admin</span>
              <span>密码: 123456</span>
            </div>
          </div>
        </Form>
  </div>
}

export default Login