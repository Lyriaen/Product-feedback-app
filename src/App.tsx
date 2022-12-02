import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/providers/AuthProvider";
import { Header } from "./components/pages/header/Header";
import { Routing } from "./components/routing/Routing";
import { MainThemeProvider } from "./components/providers/MainThemeProvider";
import { GlobalStyle } from "./components/providers/GlobalStyles";

export const App = () => {
    return (
        <div className="App">
            <GlobalStyle/>
            <MainThemeProvider>
                <AuthProvider>
                    <Router>
                        <Header/>
                        <Routing/>
                    </Router>
                </AuthProvider>
            </MainThemeProvider>
        </div>
    )
}
