import {BookCard} from "../../../shared/components/card/BookCard.tsx";
import {Grid, Paper, useMediaQuery, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";

const CARD_HEIGHT = 180;
const CARD_WIDTH = 250;
export default function BookAssignment() {
    const navigate = useNavigate();
    const handleCardClick = (url) => {
        navigate(`/dashboard/${url}`);
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isZoomedIn = useMediaQuery(theme.breakpoints.up('md'));

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
                        {/* First Row */}
                        <Grid item xs={12} sm={6} md={4}>
                            <BookCard
                                name="F.O.S.A ACCOUNT"
                                height={CARD_HEIGHT}
                                width={CARD_WIDTH}
                                onClick={()=>handleCardClick("fosa-account")}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}