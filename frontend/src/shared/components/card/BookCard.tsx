import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";

const BookCard = ({ author, coverPhotoURL, readingLevel,title, onClick,height, width,buttonIcon,buttonText }) => (
    <Card sx={{ width:'100%',boxShadow:0 }}>
        <CardMedia
            sx={{ width,height }}
            image={`/src/${coverPhotoURL}`}
            title={title}
        />
        <CardContent>
            <Typography gutterBottom variant="body1" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="secondary.turquoise">
                Reading Level: {readingLevel}
            </Typography>
            <Typography variant="body2" color="secondary.light">
                By {author}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton sx={{color:'primary.dark'}} title="Add to reading list" size="small" onClick={onClick}>
                {buttonIcon} {buttonText}
            </IconButton>
        </CardActions>
    </Card>

);
export { BookCard };