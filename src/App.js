import React, {useState} from "react";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from './UI/themes';
import { ThemeBtn } from './UI/index';
import { GlobalStyle } from "./styles/global";
import Header from "./Components/Header";
import Container from "./Components/Container";
import {ThemeSwitcher} from "./Components/ThemeSwitcher/index";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  }
  return (
    <>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <ThemeBtn onClick={toggleTheme} >
          <ThemeSwitcher theme={theme} />
        </ThemeBtn>
        <Header />
        <Container />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
