import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h3>Welcome to Employee Management System</h3>
      <Navbar />
      <Routes path="/">{<Home />}</Routes>
      <Routes path="/login">{<Login />}</Routes>
      <Routes path="/employees">{<EmployeeList />}</Routes>
      <Routes path="/employees/:id">{<EmployeeDetails />}</Routes>
      <Routes path="/admin">{<Admin />}</Routes>
      <Routes path="/logout">{<Logout />}</Routes>

    </div>
  );
}

export default App;
