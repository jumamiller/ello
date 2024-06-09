import {BookCard} from "../../../shared/components/card/BookCard.tsx";
import {Grid, Paper, useMediaQuery, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const CARD_HEIGHT = 180;
const CARD_WIDTH = 250;

export default function BookAssignment() {
    const {books,loading,error} = useSelector(state => state.TeacherLandingReducer);
    console.log(books);
    // if (loading) {
    //     return <div>Loading...</div>
    // }
    // if (error) {
    //     return <div>Error: {error}</div>
    // }
    // console.log(books);

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
                <Grid item xs={12} md={isZoomedIn ? 8 : 12} lg={isZoomedIn ? 8 : 12}
                      sx={{ backgroundColor: 'secondary.lighter' }}>
                    <Grid container spacing={isSmallScreen ? 2 : 3}>
                        {books.map((book, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <BookCard
                                    name={book.name}
                                    height={CARD_HEIGHT}
                                    width={CARD_WIDTH}
                                    onClick={() => handleCardClick(book.url)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
