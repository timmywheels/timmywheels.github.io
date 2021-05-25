import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import combineReducers from "./reducers";
import appReducer from "./reducers/appReducer";
import AppContext from "./context/AppContext";
import AppLayout from "./components/layout/AppLayout";

const initialAppState = {}

const App = () => {

    const [state, dispatch] = React.useReducer(
        combineReducers({
            app: appReducer
        }),
        {
            app: initialAppState
        },
    )


    return (
        <AppContext.Provider>
            <Router>
                <Switch>
                    <AppLayout>
                        <Route path={'/'} component={}>
                    </AppLayout>
                </Switch>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
