import React, {  useEffect, useState } from "react";
import Card from "./Card";

const Countries=()=>{
    const[Countries, setCountries]=useState([]);
    const EndPoint="https://xcountries-backend.labs.crio.do/all";

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const respoponse=await fetch(EndPoint);
                const data=await respoponse.json();
                setCountries(data);

            }catch(err){
                console.error("Error fetching data: ",err);
            }
        }
        fetchData();
    },[])
    return(
        <div style={{display:"flex", flexWrap:"wrap", gap:"10px"}} className="Countries">
           {Countries.map((country, index)=>
            <Card key={index} name={country.name} flag={country.flag} />
           )}
        </div>

    )
}
export default Countries;