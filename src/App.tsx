import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/providers/AuthProvider";
import { Header } from "./components/pages/header/Header";
import { Routing } from "./components/routing/Routing";

export const App = () => {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header/>
                    <Routing/>
                </Router>
            </AuthProvider>
        </div>
    )
}
