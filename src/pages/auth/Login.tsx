import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  const { authenticated, signIn, signOut, user } = useAuth();
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

  const handleLogoutClick = (e: any) => {
    e.preventDefault();
    setLoginError(undefined);
    setPasswordError(undefined);
    setIsLoading(true);

    signOut({
      onSuccess: () => {
        setIsLoading(false)
      },
      onError: (e: any) => setFormError(e.response?.data?.message)
    });
  };

  return (
    <div className='flex h-screen items center justify-center bg-slate-900'>
      <div className='w-full lg:w-1/3 md:w-2/3 sm:w-full pt-40 px-2'>
        <InputGroup>
          <div className='text-center'>
            {authenticated
              ? <Header size={1}>Logged in</Header>
              : <Header size={1}>Login</Header>
            }
          </div>
        </InputGroup>
        <form action="">
          <div className='mt-5'>
            <InputGroup>
              <TextInput
                value={login}
                onChange={setLogin}
                disabled={isLoading}
                variant={loginError ? 'danger' : 'default'}
                placeholder='Username or email'
              />
              <InputMessage variant='danger'>{loginError}</InputMessage>
            </InputGroup>
          </div>
          <div className='mt-5'>
            <InputGroup>
              <TextInput
                hide={true}
                value={password}
                disabled={isLoading}
                variant={passwordError ? 'danger' : 'default'}
                onChange={setPassword}
                placeholder='Password'
              />
              <InputMessage variant='danger'>{passwordError}</InputMessage>
            </InputGroup>
          </div>
          <div className='w-full'>
            <div className='pt-5 mt-0.5'>
              <InputGroup>
                {authenticated
                  ? (isLoading
                    ? <Button variant='danger' text='Logging out' disabled={true} isLoading={true} />
                    : <Button variant='danger' text='Logout' onClick={handleLogoutClick} />)
                  : (isLoading
                    ? <Button text='Logging in' disabled={true} isLoading={true} />
                    : <Button text='Login' onClick={handleLoginClick} />)
                }
                <InputMessage centered={true} variant='danger'>{formError}</InputMessage>
              </InputGroup>
            </div>
          </div>
          <div className='mt-5'>
            <InputGroup>
              <CheckBoxInput
                checked={remember}
                onChange={(e) => setRemember(e.target?.checked)}
                label='Remember'
              />
            </InputGroup>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
