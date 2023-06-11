import React from 'react'

export default function ChieldComponent(props) {
  return (
    <div>
        Name : {props.name}
        <br/>
        age : {props.age}
        <br/>
        adhar : {props.adhar}
        <br/>
        greeting : {props.greeting}
        <br/>
        Namee : {props.user.namee}
        <br/>
        age : {props.user.age}
        <br/>
        fruits :{props.fruits[3]}
        <br/>
        ---------------------------------
        <ul>
            {props.fruits.map(
                (fruits,index)=>(
                <li> key={index}  {fruits}</li>)

          
            )}
        </ul>
        <br/>
        ---------------------------------
        <br/>
        <button onClick={props.handleClicked}>click me</button>
        <br/>
        ---------------------------------
        <br/>
        {props.isActive? "Active" : "InActive"}
        <br/>
        ---------------------------------
        <br/>
        {props.showText? 'hi':'bye' }
    </div>
  )
}
