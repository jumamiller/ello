import {toast} from "react-toastify";
import {TEACHER_API_FAILED, TEACHER_API_REQUEST, TEACHER_API_SUCCESS} from "./TeacherLandingActionTypes.tsx";
import { useQuery, gql } from "@apollo/client";
import {GET_BOOKS} from "../GraphQL/queries";

const notifyError = msg => {
    toast.error(msg)
}
export const getBooks = () => async (dispatch) => {
    try {
        dispatch({
            type: TEACHER_API_REQUEST,
            loading: true,
        });
        const res = await useQuery(GET_BOOKS);
        dispatch({
            type: TEACHER_API_SUCCESS,
            payload: res.data['books'],
            loading: false,
            message: res?.data?.message || 'Books fetched successfully',
        });
    } catch (err) {
        dispatch({
            type: TEACHER_API_FAILED,
            error: err?.response?.data,
            loading: false
        });
        notifyError(err?.response?.data?.message || 'Failed to fetch books')
    }
}