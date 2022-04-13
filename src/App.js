import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
// import ChatVideo from './components/pages/ChatVideo/ChatVideo';
import Home from "./Home";
import SignIn from "./srcOld/components/pages/SignIn/SignIn";
import SignUp from "./srcOld/components/pages/SignUp/SignUp";
import PrivateRoute from "./srcOld/components/PrivateRoute";
import LoadingFullScreen from "./srcOld/components/shared/LoadingFullScreen";
import Snackbar from "./srcOld/components/shared/Snackbar";
import {
  selectFullscreenLoading,
  selectNotification,
} from "./srcOld/redux/reducer/ui";

function App() {
  const loading = useSelector(selectFullscreenLoading);
  const notification = useSelector(selectNotification);
  const notifyRef = useRef(null);

  useEffect(() => {
    if (!notifyRef.current) return;
    notifyRef.current.showSnackbar();
  }, [notification]);

  return (
    <>
      {loading && <LoadingFullScreen />}
      {notification && (
        <Snackbar
          message={notification.message}
          type={notification.status}
          ref={notifyRef}
        />
      )}

      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        {/* <PrivateRoute path="/home" component={Home} /> */}
        <Route path="/home" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="*">
          <Redirect to="/home" />
        </Route>

        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
