import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {GET_BOOKS} from "../../GraphQL/queries";
import {TEACHER_API_FAILED, TEACHER_API_REQUEST, TEACHER_API_SUCCESS} from "../../store/TeacherLandingActionTypes.tsx";

const useGetBooks = () => {
    const { data, loading, error } = useQuery(GET_BOOKS);

    const books = data?.books || [];

    const dispatch = useDispatch();

    useEffect(() => {
        if (loading) {
            dispatch({
                type: TEACHER_API_REQUEST,
                loading: true,
            });
        } else if (error) {
            dispatch({
                type: TEACHER_API_FAILED,
                error: error?.message || "Failed to fetch books",
                loading: false,
            });
            toast.error(error?.message || "Failed to fetch books");
        } else {
            dispatch({
                type: TEACHER_API_SUCCESS,
                payload: books,
                loading: false,
                message: "Books fetched successfully",
            });
        }
    }, [loading, error, dispatch, books]);

    return books;
};
export default useGetBooks;
