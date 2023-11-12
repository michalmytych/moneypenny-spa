import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Typography, Input, Button, Spin, Checkbox, Layout, Flex } from 'antd';

const { Title } = Typography;

const InputGroup = (props: any) => { // @todo - move
  return <div style={{ padding: '0.5rem' }}>{props.children}</div>;
}

const InputMessage = (props: any) => { // @todo - move
  return <div style={{ color: 'red', padding: '0.25rem' }}>{props.children}</div>;
}

const Login: React.FC = () => {
  const { authenticated, signIn, user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<string | undefined>(undefined);
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const [passwordError, setPasswordError] = useState<string | undefined>(undefined);
  const [login, setLogin] = useState('test@example.com');
  const [remember, setRemember] = useState<boolean>(true);
  const [password, setPassword] = useState('password');

  const handleLoginClick = (e: any) => {
    e.preventDefault();
    setLoginError(undefined);
    setPasswordError(undefined);
    setIsLoading(true);

    signIn(login, password, {
      onSuccess: () => setIsLoading(false),
      onError: (e: any) => {
        if (e.response?.status === 422) {
          const data = e.response?.data;
          const loginErrors = data.errors?.email ?? [];
          const passwordErrors = data.errors?.password ?? [];
          setLoginError(loginErrors[0]);
          setPasswordError(passwordErrors[0]);
        } else {
          setFormError(e.response?.data?.message);
        }

        setIsLoading(false);
      }
    }, remember);
  };

  return (
    <Layout style={{ height: '100vh', width: '100vw', position: 'fixed' }}>
      <div style={{ width: '20%', margin: '0 auto' }}>
        <InputGroup>
          <Flex justify="center">
            {authenticated
              ? <Title level={2}>Logged in</Title>
              : <Title level={2}>Login</Title>
            }
          </Flex>
        </InputGroup>
        <form action="">
          <InputGroup>
            <Input
              value={login}
              onChange={e => setLogin(e.target.value)}
              disabled={isLoading}
              placeholder='Username or email'
            />
            <InputMessage>{loginError}</InputMessage>
          </InputGroup>
          <InputGroup>
            <Input
              value={password}
              disabled={isLoading}
              onChange={e => setPassword(e.target.value)}
              placeholder='Password'
            />
            <InputMessage>{passwordError}</InputMessage>
          </InputGroup>
          <InputGroup>
            {isLoading
              ? <Spin tip="Logging in" size="small" />
              : <Button block type="primary" onClick={handleLoginClick}>Login</Button>
            }
            <InputMessage>{formError}</InputMessage>
          </InputGroup>
          <InputGroup>
            <Checkbox
              checked={remember}
              onChange={(e) => setRemember(e.target?.checked)}
            >
              Remember
            </Checkbox>
          </InputGroup>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
