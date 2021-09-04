import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavBar from "./components/SideNavBar";
import MediaPlayer from "./components/MediaPlayer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import Album from "./components/Album";

function App() {
  return (
    <>
      <Router>
        <SideNavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
           <Route
            path="/album/:id"
            exact
            render={(routerProps) => <Album {...routerProps} />}
          />
        </Switch>
        <MediaPlayer />
      </Router>
    </>
  );
}

export default App;
