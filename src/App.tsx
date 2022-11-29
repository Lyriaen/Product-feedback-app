import {   BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/providers/AuthProvider";

export const App = () => {
    return (
        <div className="App">
            <AuthProvider>
                <Router>

                </Router>
            </AuthProvider>
        </div>
    )
}
