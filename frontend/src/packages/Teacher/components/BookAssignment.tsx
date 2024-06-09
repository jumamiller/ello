import {BookCard} from "../../../shared/components/card/BookCard.tsx";
import {Grid, Paper, useMediaQuery, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const CARD_HEIGHT = 200;
const CARD_WIDTH = '100%';

export default function BookAssignment() {
    const {books,loading,error} = useSelector(state => state.TeacherLandingReducer);

    const navigate = useNavigate();

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isZoomedIn = useMediaQuery(theme.breakpoints.up('md'));

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
            <Grid container spacing={2} sx={{ height: '100%' }}>
                {books.map((book, index) => (
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
