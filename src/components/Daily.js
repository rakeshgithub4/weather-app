import React,{useState,useEffect} from 'react'

const Daily = (props) => {

    const [cnt,setCnt] = useState(1)
    const [fore,setFore] = useState(null)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${props.city}&cnt=${cnt}&appid=6aa8b51a170662d1e75742fc41b4fa08`)
        .then(res => res.json())
        .then(info => setFore(info))

    },[cnt])

    function increment(){
        if(cnt < 16){
            setCnt(cnt+1)
        }
   }
   function decrement(){
       if(cnt > 1){
           setCnt(cnt-1)
       }
   }


    return(
        <>
           
            <button onClick = {increment}>+{cnt}</button>
            <button onClick = {decrement}>-{cnt}</button>

        </>
    )

}


export default Daily;