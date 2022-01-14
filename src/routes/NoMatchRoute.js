import { Route, Redirect } from 'react-router-dom'

const NoMatchRoute = () => (
  <Route>
    {console.log('entered * route')}
    <Redirect to={{ pathname: '/app' }} />
  </Route>
)

export default NoMatchRoute
