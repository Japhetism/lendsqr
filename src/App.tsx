import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Users from "./pages/users";
import UserDetails from './pages/users/details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  )
}

export default App;