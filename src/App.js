import { Suspense, lazy, Component, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserContext from "./context/userContext";


const Loading = () => (
  <div>Loading...</div>
);

const LazyWrapper = (Component) => (props) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
)

const Login = LazyWrapper(lazy(() => import("./pages/Login/login")));
const Register = LazyWrapper(lazy(() => import("./pages/Register/register")));
const Home = LazyWrapper(lazy(() => import("./pages/Home/home")));
const CreateSurvey = LazyWrapper(lazy(() => import("./pages/Surveys/createSurvey")));
// const Survey = LazyWrapper(lazy(() => import("./pages/Timeline/Random")));

function App() {
  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{ user, setUser }}>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
             <Route path="/home" element={<Home />} />
            {/* <Route path="/survey" element={<Survey />} /> */}
            <Route path="/create/survey" element={<CreateSurvey />} /> 
            <Route path="*" element={<div>Not found!</div>} />
        </Routes>
      </Router>
    </UserContext.Provider>

  )
}

export default App;
