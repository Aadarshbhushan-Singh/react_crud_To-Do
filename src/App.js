import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import { Home } from './components/Home';
import { About } from './components/About';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AddTask} from './components/pages/AddTask'
import EditTask from './components/pages/EditTask';
import ViewTask from './components/pages/ViewTask';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/react_crud_To-Do" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/tasks/add" component={AddTask}/>
          <Route exact path="/tasks/edit/:uid" component={EditTask}/>
          <Route exact path="/tasks/view/:uid" component={ViewTask}/>
          
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
