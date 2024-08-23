import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import { Urls } from './Helper';

export default function InfoBox({info}){
   
    
    let url=`https://openweathermap.org/img/wn/${info.icon}@2x.png`;

    return(
        <div className="InfoBox">
            <div className='card-container'>
                    <Card sx={{ maxWidth: 400  }}>

            <CardMedia
                sx={{ height: 150 }}
                image= {
                    info.humidity > 80
                    ?Urls.rain
                    :info.temp > 15
                    ?Urls.hot
                    :Urls.cold
                }
                title="green iguana"
            />
            
            <CardContent sx={{ height: 150 }}>
                <Typography gutterBottom variant="h5" component="div" className='temp-info' >
              <div className='image-container'>
                    <div> 
                        { info.city} &nbsp;
                        <b>{info.temp}&deg;C</b>
                    </div>
                    <div>
                        <CardMedia
                        sx={{ height: 40,width:80 }}
                        image= {url}
                        />
                        <b style={{fontSize : 16}}>{info.weather}</b>
                    </div>
               
              </div>
               
                </Typography>
                <hr />
                <Typography variant="body2" color="text.secondary" component={"span"}>
               <div className='main-container'>
                    <div className='cont1'>
                       <span> Min: <b>{info.tempMin}&deg;C</b> </span>
                     <span>  FeelsLike: <b>{info.feelsLike}&deg;C</b></span>
                    </div>
                    <div className='cont2'>
                        <span> Max:<b>{info.tempMax}&deg;C</b></span>
                        <span> Humidity : <b>{info.humidity}</b></span>
                    </div>
               </div>
               <div>
                
               </div>
                </Typography>
            </CardContent>
        
            </Card>
            </div>
        </div>
    );
}