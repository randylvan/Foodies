import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import Auth from './components/Auth';
import NotFound from './components/NotFound';
import MainPage from './components/MainPage';
import LandingPage from './components/LandingPage';
import Categories from './components/Categories';

const AdminAccess = UserAuthWrapper({
  authSelector: state => state.user,
  predicate: user => { return user.role === 'admin' },
  redirectAction: () => browserHistory.push("/"),
  wrapperDisplayName: 'UserIsAdmin'
})

const AdminRoutes = AdminAccess( (props) => props.children )

export default (
 <Route>
   <Route path="/" component={App}>
     <IndexRoute component={MainPage}/>
     <Route path="signup" component={Auth} title="Sign Up" />
     <Route path="signin" component={Auth} title="Sign In" />
     <Route path="categories" component={Categories} title="Select Categories" />
     <Route component={AuthenticatedRoutes}>
         {/* PROTECTED BY AUTHENTICATION */}
       <Route component={AdminRoutes}>
           {/* PROTECTED BY ADMIN ACCESS */}
       </Route>
     </Route>
     <Route path="*" status={404} component={NotFound}/>
   </Route>
 </Route>
)
