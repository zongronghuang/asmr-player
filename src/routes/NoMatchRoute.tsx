import { Route, Redirect } from "react-router-dom";

const NoMatchRoute = () => (
  <Route>
    {/* {console.log("No matched route")} */}
    <Redirect to="/login" />
  </Route>
);

export default NoMatchRoute;
