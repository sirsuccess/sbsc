import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Spinner from "./components/commons/spinner";
import NotFound from "./components/commons/Error";

const Home = lazy(() => import("./views/home/Home"));
const Budget = lazy(() => import("./views/budget/Budget"));
const Approval = lazy(() => import("./views/approval/Approval"));


const App = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/budget" component={Budget} />
        <Route exact path="/approval" component={Approval} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
