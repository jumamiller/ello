import {TEACHER_API_FAILED, TEACHER_API_REQUEST, TEACHER_API_SUCCESS} from "./TeacherLandingActionTypes.tsx";

const initialState={
    loading: false,
    submitting: false,
    error: {},
}

const TeacherLandingReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEACHER_API_REQUEST:
            return {
                ...state,
                loading: true,
                submitting: true,
                error: {},
            };
        case TEACHER_API_SUCCESS:
            return {
                ...state,
                loading: false,
                submitting: false,
                error: {},
            };
        case TEACHER_API_FAILED:
            return {
                ...state,
                loading: false,
                submitting: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
export default TeacherLandingReducer;