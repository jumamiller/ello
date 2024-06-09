import {TEACHER_API_FAILED, TEACHER_API_REQUEST, TEACHER_API_SUCCESS} from "./TeacherLandingActionTypes.tsx";

const initialState={
    loading: false,
    books: [],
    error: {},
}

const TeacherLandingReducer = (state = initialState, action) => {
    const { type, payload, loading} = action;
    switch (type) {
        case TEACHER_API_REQUEST:
            return {
                ...state,
                loading: loading,
                submitting: true,
                error: {},
            };
        case TEACHER_API_SUCCESS:
            return {
                books: payload,
                loading,
            };
        case TEACHER_API_FAILED:
            return {
                loading,
                error: payload,
            };
        default:
            return state;
    }
}
export default TeacherLandingReducer;