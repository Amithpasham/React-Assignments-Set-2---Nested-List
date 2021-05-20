import React,{  useState }  from 'react'
import Town from './Town'
export default function Cities({city,id}) {
    const [count, setCount] = useState(false)
    return (
        <>
           
                <li id={`city${id}`}onClick={()=>{setCount(!count)}}><button>{city.name}</button></li>
                <ul>
                    {count?
                   city.towns.map((town,i)=>{
                      return  <Town key={i+1} id={i+1} town={town}/>
                    })
                    :""}
                </ul>
        </>
    )
}