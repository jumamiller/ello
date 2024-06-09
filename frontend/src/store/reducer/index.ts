import {combineReducers} from "redux";
import TeacherLandingReducer from "../../packages/Teacher/store/TeacherLandingReducer.tsx";

const rootReducer = combineReducers({
    TeacherLandingReducer,
});

export default rootReducer;