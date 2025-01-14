import "./main.css";
import { useState, useEffect } from "react";
import Card from "../../components/Card";
import Outlet from "../../components/Outlet";


const MainPage = () => {
const [result, setResult] = useState(null)

const handleGetPokemon = async(url = 'https://pokeapi.co/api/v2/pokemon/') =>{
const response = await fetch(url)
const data = await response.json()
setResult(data)
}
    useEffect(() => {
      handleGetPokemon()
    }, [])
  
    return (
      <>
            <div className="btnPokemon">
        <button onClick={() => handleGetPokemon(result.previous)}>Prev</button>
        <button onClick={() => handleGetPokemon(result.next)}>Next</button>
      </div>
      <div className="wrapper">
      {result?.results?.map((item, index) => (
        <div key={index}> 
        {/* <p>{index + 1} - {item.name} </p> */}
        <Card name={item.name}>{item.name}</Card>
        </div>
       
      ))}
      
      </div>
      

      </>
    )
  }
  export default MainPage