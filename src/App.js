import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Donate from "./Components/Donate/Donate";
import Loan from "./Components/Loan/Loan";
import SignUp from "./Components/Login/SignUp";
import RequireAuth from "./Components/Login/RequireAuth";
import DashBoard from "./Components/Dashboard/DashBoard";
import AllDonates from "./Components/Dashboard/AllDonates";
import RequestForLoan from "./Components/Dashboard/RequestForLoan";
import AllHelps from "./Components/Dashboard/AllHelps";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/requestforloan" element={<Loan />}></Route>
        <Route
          path="/admindashboard"
          element={
            <RequireAuth>
              <DashBoard />
            </RequireAuth>
          }
        >
          <Route index element={<AllDonates />}></Route>
          <Route path="allloans" element={<RequestForLoan />}></Route>
          <Route path="allhelps" element={<AllHelps />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
