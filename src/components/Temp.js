import React,{useState,useEffect} from 'react'

const Temp = () => {
   
    const [city,setCity] = useState()
    const [details,setDetails] = useState(null)
    const [fore,setFore] = useState(null)
    const [daily,setDaily] = useState(null)
    const [a,setA] = useState(null)
    const [b,setB] = useState(null)


    function getCity(e) {
       
        setCity(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => navigator.geolocation.getCurrentPosition((pos) => {
            setA(pos.coords.latitude);
            setB(pos.coords.longitude);
        }),1000)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6aa8b51a170662d1e75742fc41b4fa08`)
        .then(res => res.json())
        .then(data => setDetails(data.main))

        fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=6aa8b51a170662d1e75742fc41b4fa08`)
        .then(res => res.json())
        .then(result => setFore(result))
        
    

    },[city])

    


    return(
        <>
        <div className = "box">
            <h1>Weather Details</h1>
            <div className = "inputData">
            <input type = "text" className = "inputField" 
            placeholder = "Search city name" required 
            onChange = {getCity}/>
            </div>
            <div>
               <h4>latitude = {a} and longitude = {b}</h4>
               <h2>{city}</h2>
            </div>
            {!details ? (<p>No Data found related to city</p> )
            : ( <div className = "det">
                    <h1>{details.temp}°C</h1>
                    <h4>{`MinTemp = ${details.temp_min}°C and MaxTemp = ${details.temp_max}°C`}</h4>
                    <h3>{details.description}</h3>
               </div> ) }
           

        </div>


        </>
    )
}


export default Temp;