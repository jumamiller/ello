import Header from "../components/Header.tsx";
import {Stack} from "@mui/material";
import useGetBooks from "../hooks/Books/UseGetBooks.ts";
import BookAssignment from "../components/BookAssignment.tsx";

export default function TeacherLanding(){
    useGetBooks();
    return (
        <Stack>
            <Header/>
            <BookAssignment/>
        </Stack>
    )
}