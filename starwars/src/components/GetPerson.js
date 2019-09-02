
import axios from "axios";

export default function GetPerson (setter){
    axios
    .get("https://swapi.co/api/people/")
    // .get(`https://swapi.co/api/people/${count}`)
    .then(res =>{
     setter(res.data.results)
    })
    .catch (err => console.log ("Try to fix your code"))

}