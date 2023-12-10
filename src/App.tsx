import { light, dark } from './theme';
import Layout from './components/Layout';
import useLocalStorage from './hooks/useLocalStorage';
import GlobalStyle from './styles/GlobalStyle';
import { THEME, defaultTheme } from './constants';
import { ThemeProvider } from 'styled-components';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  const [theme, setTheme] = useLocalStorage(THEME.LS_KEY, THEME.LIGHT);

  const handleSwitchTheme = (isSwitched: boolean) => {
    const theme = isSwitched ? THEME.LIGHT : THEME.DARK;
    setTheme(theme);
  };

  const currentTheme = theme === defaultTheme ? dark : light;
  return (
    <>
      <ThemeProvider theme={currentTheme}></ThemeProvider>
      <GlobalStyle />
      <Layout>
        <ThemeSwitch
          onSwitch={handleSwitchTheme}
          current={theme === defaultTheme}
        />
        <div style={{ color: '#fff' }}>App</div>;
      </Layout>
    </>
  );
}

export default App;
