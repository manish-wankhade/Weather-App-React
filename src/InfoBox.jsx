import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import"./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    


    // const INIT_URL = "/weather.jpg"; // Static image from the public folder
    const INIT_URL = `https://picsum.photos/345/140?random=${info.city}`;



    return(
        <div className="InfoBox">
            {/* <h1>WeatherInfo-{info.weather}</h1> */}
           <div className='cardContainer'>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={INIT_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}{
                            info.humidity>80
                            ? <ThunderstormIcon/>
                            :info.temp>15
                            ?<WbSunnyIcon/>
                            :<AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p><b>Temperatur: {info.temp}&deg;C</b></p>
                        <p>Humidity ={info.humidity}</p>
                        <p>Min Temp:{info.tempMin}&deg;C</p>
                        <p>Max Temp:{info.tempMax}&deg;C</p>
                        <p><b>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</b></p>
                        </Typography>
                    </CardContent>
            
                </Card>
          </div>

        </div>
    )
} 