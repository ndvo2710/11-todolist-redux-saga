import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import TodoListSaga from "./pages/TodoListSaga/TodoListSaga";

function App() {
  return <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/todolistsaga' component={TodoListSaga} />
        </Switch>
      </BrowserRouter>
  </div>;
}

export default App;
