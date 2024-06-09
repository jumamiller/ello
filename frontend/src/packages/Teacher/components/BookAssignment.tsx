import {BookCard} from "../../../shared/components/card/BookCard.tsx";
import {Grid, IconButton, InputAdornment, Paper, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Box from "@mui/material/Box";
import {useState, useEffect} from "react";
import SearchIcon from "@mui/icons-material/Search";

const CARD_HEIGHT = 200;
const CARD_WIDTH = '100%';

export default function BookAssignment() {
    const {books, loading, error} = useSelector(state => state.TeacherLandingReducer);
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        if (searchInput == null) {
            setFilteredBooks(books);
        } else {
            const filtered = books.filter(book =>
                book.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredBooks(filtered);
        }
    }, [books, searchInput]);

    const handleCardClick = (url) => {
        navigate(`/dashboard/${url}`);
    };

    return (
        <Paper
            sx={{
                padding: 2,
                margin: 3
            }}
        >
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
                            onClick={() => handleCardClick(book.url)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}