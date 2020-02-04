import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Weather from "./routes/Weather";
import Error from "./routes/Error";
import Navigation from "./components/Navigation.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/weather" component={Weather} exact />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
