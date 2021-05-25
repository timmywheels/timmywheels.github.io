import {USER} from "../actions/app";

const appReducer = (state: any, action: any) => {
    switch (action.type) {
        case USER:
            console.log("USER")
    }
}

export default appReducer;
