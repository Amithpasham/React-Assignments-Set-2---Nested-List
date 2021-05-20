import React,{  useState } from 'react'
import Cities from './Cities'
export default function States({user,id}) {
    console.log(id)
const [count, setCount] = useState(false)
    return (
        <div>
                <li id={`state${id}`}onClick={()=>{setCount(!count)}}><button>{user.name}</button></li>
                <ul>
                    {count?
                    user.cities.map((city,i)=>{
                      return  <Cities key={i+1} id={i+1} city={city}/>
                    })
                    :""}
                </ul>
        </div>

    )}
