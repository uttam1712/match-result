import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMatches from "./components/AllMatches.component";
import Form from "./components/Form.component";
import Home from "./components/home.component";
import Navbar from "./components/Navbar.component";
import MatchDetails from "./components/MatchDetails.component";
import EditForm from "./components/Edit.component";

function App() {
    return (
        <div className="font-mono">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/allMatches" element={<AllMatches />} />
                    <Route path="/addMatch" element={<Form />} />
                    <Route path="allMatches/:id" element={<MatchDetails />} />
                    <Route path="editMatch/:id" element={<EditForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
