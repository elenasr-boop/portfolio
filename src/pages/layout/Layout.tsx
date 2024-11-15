import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "../../components/theme/theme";

export function Layout () {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

  function toggleTheme(): void {
    setIsDarkTheme(!isDarkTheme);
  }
    
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div className="layout">
            <Header toggleTheme={toggleTheme} />
            <Outlet />
            <Footer />
        </div>
        </ThemeProvider>
    )
}