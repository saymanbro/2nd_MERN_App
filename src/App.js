import './App.css';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import ErrorPage from './component/ErrorPage';
import AddUser from './component/AddUser';
import EditUser from './component/EditUser';
import ViewUser from './component/ViewUser';


function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/user/addUser'>
              <AddUser />
            </Route>
            <Route path='/user/editUser/:id'>
              <EditUser />
            </Route>
            <Route path='/user/viewUser/:id'>
              <ViewUser />
            </Route>
            <Route path='*'>
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      
      </>
  );
}

export default App;
