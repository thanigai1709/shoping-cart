import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// components
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core/";
import { AddShoppingCart } from "@material-ui/icons";
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
