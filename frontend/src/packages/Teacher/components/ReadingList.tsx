import {BookCard} from "../../../shared/components/card/BookCard.tsx";
import {Grid, Paper, Typography} from "@mui/material";
import {useState, useEffect} from "react";
import Header from "./Header.tsx";
import Box from "@mui/material/Box";

const CARD_HEIGHT = 200;
const CARD_WIDTH = '100%';

export default function ReadingList() {
    const books = JSON.parse(localStorage.getItem('books'));
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        setFilteredBooks(books);
    }, [books]);

    const removeBook = (book) => {
        const newBooks = books.filter(b => b.title !== book.title);
        localStorage.setItem('books', JSON.stringify(newBooks));
        setFilteredBooks(newBooks);
    }

    return (
        <Paper>
            <Header/>
            <Grid container spacing={2} sx={{height: '100%'}}>
                {filteredBooks?.map((book, index) => (
                    <Grid item xs={12} sm={3} md={2} lg={2} key={index}>
                        <BookCard
                            coverPhotoURL={book.coverPhotoURL}
                            title={book.title}
                            author={book.author}
                            readingLevel={book.readingLevel}
                            height={CARD_HEIGHT}
                            width={CARD_WIDTH}
                            onClick={() => removeBook(book)}
                        />
                    </Grid>
                ))}
            </Grid>
            {filteredBooks==null && (
                <Box sx={{
                    padding: 2,
                    margin:3
                }}>
                    <Typography variant="h6" align="center" color="secondary.light">
                        No books added to your reading list
                    </Typography>
                </Box>
            )}
        </Paper>
    )
}