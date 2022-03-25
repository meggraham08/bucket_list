import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/shared/MainNavbar";
import Home from './components/shared/Home';
// import Adventures from "./components/adventures/Adventures";
import Users from "./components/users/Users";
import Nomatch from "./components/shared/Nomatch";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      {/* <Route path='/adventures' element={ <Adventures /> } /> */}
      <Route path='/users' element={ <Users /> } />
      <Route path='*' element={ <Nomatch /> } />
    </Routes>
  </>
)

export default App;