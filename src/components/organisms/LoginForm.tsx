import React, { useState } from 'react';
import Form from '../../components/atoms/Form';
import { Button, Checkbox, Label, TextInput, Spinner } from 'flowbite-react';
import { isValidEmail } from '../../helpers/validation';
import FormError from '../../components/atoms/FormError';

const LoginForm = () => { // { onAuthSuccess, onAuthFailed}
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const handleLogin = (): void => {
        setEmail('');
        setPassword('');
        setIsLoading(true);

        // Handle logic

        setTimeout(() => {
            setIsLoading(false);

        }, 2000 /* Rm delay */);
    };

    const handleEmailInputChange = (value: string): void => {
        setEmail(value);

        if (!isValidEmail(value)) {
            setEmailError('Invalid value provided for e-mail field.');
            return;
        }

        setEmailError(null);
    }

    return (
        <Form>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email"
                    placeholder="Provide your e-mail."
                    required
                    type="email"
                    value={email}
                    disabled={isLoading}
                    onChange={(e) => handleEmailInputChange(e.target.value)}
                    color={emailError ? "failure" : "info"}
                />
                <FormError message={emailError} />
                <div className="mb-2 block">
                    <Label
                        htmlFor="password"
                        value="Your password"
                        placeholder="Provide your password."
                    />
                </div>
                <TextInput
                    id="password"
                    required
                    type="password"
                    value={password}
                    disabled={isLoading}
                    onChange={(e) => setPassword(e.target.value)}
                    color={passwordError ? "failure" : "info"}
                />
                <FormError message={passwordError} />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox
                    id="remember"
                    checked={rememberMe}
                    disabled={isLoading}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <Label htmlFor="remember">
                    Remember me
                </Label>
            </div>
            <Button
                type="submit"
                onClick={handleLogin}
                disabled={isLoading || (passwordError !== null || emailError !== null)}
            >
                {isLoading && <Spinner size={'sm'} />}
                <span className="ml-2">
                    {isLoading ? 'Logging in' : 'Login'}
                </span>
            </Button>
        </Form>
    );
}

export default LoginForm;