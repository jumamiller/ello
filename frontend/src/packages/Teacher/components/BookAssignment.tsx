import {BookCard} from "../../../shared/components/card/BookCard.tsx";
import {Grid, IconButton, InputAdornment, Paper, TextField} from "@mui/material";
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";
import {useState, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import {toast, ToastContainer} from "react-toastify";

const CARD_HEIGHT = 200;
const CARD_WIDTH = '100%';
const notify = (msg) => {
   toast.success(msg)
}

export default function BookAssignment() {
    //useGetBooks hook has been called in TeacherLanding.tsx(parent) so we can access the books from the store here
    const {books, loading, error} = useSelector(state => state.TeacherLandingReducer);
    const [searchInput, setSearchInput] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);
    const readingList = JSON.parse(localStorage.getItem('books')) || [];

    useEffect(() => {
        //remove the books that are already in the reading list
        const filtered = books.filter(book => !readingList.some(b => b.title === book.title));
        if (searchInput == null) {
            setFilteredBooks(filtered);
        } else {
            const newList = filtered.filter(book =>
                book.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredBooks(newList);
        }
    }, [books, searchInput]);

    const addToReadingList = (book) => {
        const newReadingList = [...readingList, book];
        localStorage.setItem('books', JSON.stringify(newReadingList));
        setFilteredBooks(filteredBooks.filter(b => b.title !== book.title));
        notify(`${book.title} added to reading list`);
    };

    return (
        <Paper
            sx={{
                padding: 2,
                margin: 3
            }}
        >
            <ToastContainer />
            {loading? <p>Loading...</p> : null}
            <div style={{display: "flex", justifyContent: "center"}}>
                <Box
                    sx={{
                        width: "50%",
                        marginBottom: 2,
                    }}
                >
                    <TextField
                        fullWidth
                        id="search"
                        label="Search"
                        variant="outlined"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </div>
            <Grid container spacing={2} sx={{height: '100%'}}>
                {filteredBooks.map((book, index) => (
                    <Grid item xs={12} sm={3} md={2} lg={2} key={index}>
                        <BookCard
                            coverPhotoURL={book.coverPhotoURL}
                            title={book.title}
                            author={book.author}
                            readingLevel={book.readingLevel}
                            height={CARD_HEIGHT}
                            width={CARD_WIDTH}
                            buttonIcon={<PlaylistAddCircleIcon/>}
                            buttonText="Add"
                            onClick={() => addToReadingList(book)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}