import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import { CardActionArea } from '@mui/material';
export default function ImgMediaCard({ data }) {
    return (
        <Card sx={{ width: '100%', height: '100%', position: 'relative' }}>
            <Link
                href={data.url} target="_blank"
                style={{height: '100%'}}
            >
                <CardActionArea  style={{height: '100%'}} >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        image={data.urlToImage}
                        style={{maxHeight:'40vh'}}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <div style={{ position: "absolute", bottom: 0, left: 15, color: 'gray', fontSize: 15 }}>
                    {data.author||"作者未知"} &nbsp;
                    {data.publishedAt}
                </div>
            </Link>
        </Card>
    );
}
