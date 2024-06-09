import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BookCard = ({ author, coverPhotoURL, readingLevel,title, onClick,height, width }) => (
    <Card sx={{ width: '100%' }}>
        <CardMedia
            sx={{ height,width }}
            image={`/src/${coverPhotoURL}`}
            title={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {readingLevel}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>

);
export { BookCard };