import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Navbar from './Navbar';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let[error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4d48c13091736ab580c49f14f63b837f";

   let getWeatherInfo = async() => {
            // eslint-disable-next-line no-useless-catch
            try {
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);

            let result = {
                city: jsonResponse.name,
                temp : jsonResponse.main.temp,
                tempMin:  jsonResponse.main.temp_min,
                tempMax:  jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
                icon : jsonResponse.weather[0].icon,
            }
            
            console.log(result);
            return result;
            }catch(err){
                throw err;
             }
    };

    let handleCity = (event) =>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };
    return (
        <div className='Search-box'>
            <Navbar/>
           <br /><br />
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleCity}/>
            <br /> <br />
            <Button variant="contained" endIcon={<SearchIcon />} type='submit' >
                 Search
            </Button>
            </form>
            {error && <p style={{color: "red"}}>No such Place exists!</p>}
        </div>
    );
}