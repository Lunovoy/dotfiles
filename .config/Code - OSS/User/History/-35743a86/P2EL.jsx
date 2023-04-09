import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/public/assets/reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Александ Иванов
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Рейтинг: 1800
          </Typography>
          <Typography variant="body2" color="text.secondary">
            zoopark@mail.ru
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}