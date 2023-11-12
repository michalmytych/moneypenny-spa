import { ReactNode, useState } from "react";
import { ConfigProvider, theme, Button } from "antd";
import { _localStorage } from "../features/common/browserStorage";

const DARK_MODE_LOCAL_STORAGE_KEY = 'moneypenny_dark_mode';

const AntdConfigProvider: any = (props: { children: ReactNode }) => { // @todo - type not any
    const localModeConfig = _localStorage.getItem(DARK_MODE_LOCAL_STORAGE_KEY);
    const _isDarkMode: boolean = localModeConfig ? localModeConfig === 'true' : false;

    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [isDarkMode, setIsDarkMode] = useState(_isDarkMode);

    const handleClick = (): void => {
        setIsDarkMode((previousValue) => {
            !previousValue
                ? _localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, 'true')
                : _localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, 'false');

            return !previousValue;
        });
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
            }}>
            {props.children}
            <Button onClick={handleClick} style={{position: 'absolute', top: '0.5rem', right: '0.5rem'}}>
                Change Theme to {isDarkMode ? "Light" : "Dark"}
            </Button>
        </ConfigProvider>
    );
}

export default AntdConfigProvider;