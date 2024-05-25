
import "./sb-admin-2.css";
import Login from "./Login";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Register from "./Register";
import Forgotpassword from "./Forgotpassword";
import Portal from "./Portal";
import Dashboard from "./Dashboard";
import Blogs from "./Blogs";
import Blogcreate from "./Blogcreate";
import Profile from "./Profile";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
          <Route path="/portal" element={<Portal />}>
            <Route index element={<Navigate to ={"dashboard"} replace/>}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="/portal/blogs" element={<Blogs />}></Route>
            <Route path="/portal/blogcreate" element={<Blogcreate />}></Route>
            <Route path="/portal/profile" element={<Profile/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
