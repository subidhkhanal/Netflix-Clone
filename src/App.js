import React, {useEffect} from 'react';
 import HomeScreen from './screens/HomeScreen'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import LoginScreen from "./screens/LoginScreen";
import {auth} from "./firebase";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
    const user=useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
       const unsubscribe =auth.onAuthStateChanged((userAuth) =>{
            if(userAuth) {
                dispatch(
                    login({
                    uid: userAuth.uid,
                    email:userAuth.email,
                }))
            }
            else{
                dispatch(logout())
            }
        })
        return unsubscribe
    },[dispatch])

  return (
      <div className="bg-neutral-900">
          <Router>
              {!user ?(
                  <LoginScreen />
              ) : (
                  <Switch>
                      <Route path="/profile" exact>
                          <ProfileScreen />
                      </Route>
                      <Route path="/" exact>
                          <HomeScreen />
                      </Route>
                  </Switch>
              )}
              </Router>
      </div>
  );
}

export default App;

