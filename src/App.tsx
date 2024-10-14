import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App;