import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavBar from "./components/SideNavBar";
import MediaPlayer from "./components/MediaPlayer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Album from "./components/Album";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Router>
        <SideNavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Layout {...routerProps} />}
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
