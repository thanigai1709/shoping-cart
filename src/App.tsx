import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// components
import Products from "./pages/Products";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Products} />
      </Switch>
    </Router>
  );
};

export default App;
