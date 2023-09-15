import { useState, useEffect } from "react"
import axios from "axios"
function Home(){
    const [query, setquery] = useState({})

    const Fetchdata =async () =>{
        try{
        const {data} = await axios.get('https://api-mock.appsaras-dev.sarasapp.com/dashboard/school-admin-main/1')
        console.log(data)
        setquery(data.dashboard)
        }
        catch(e) {
            console.error(e);
        }   
    }

    useEffect(()=>{
        Fetchdata()
    },[])

    return(
        <>
         
          {Object.entries(query).map(([key, value]) => (
            <div key={key}>
                <strong>{key === "schoolName" ? "School Name" : key}:</strong> {value}
            </div>
          ))}
        </>
    )
}

export default Home