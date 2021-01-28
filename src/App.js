import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import AddEvent from "./components/event/AddEvent";
import "bootstrap/dist/css/bootstrap.min.css";
import DashBoard from "./components/DashBoard";
import store from "./store";
import { Provider } from "react-redux";
import MyDashboard from "./components/event/MyDashboard";
import Signup from "./components/userManagement/Signup";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Header} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/createEvent" component={AddEvent} />
        <Route path="/mydashboard" component={MyDashboard} />
        <Route path="/signup" component={Signup} />
      </Router>
    </Provider>
  );
}

export default App;
