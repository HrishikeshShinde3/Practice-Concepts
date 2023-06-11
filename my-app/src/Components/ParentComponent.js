import React from 'react'
import ChieldComponent from './ChieldComponent'


export default function ParentComponent() {
    const name = 'hrishi'
    const age = 23
    const adhar = 665769
    const greeting = 'Hello world'

    const user = { namee: 'rushi', age: 23 };
    const fruits = ["apple", 'Banana', 'mango', 'lemon', 'orange']


    const handleClicked = () => {
        console.log("button clicked")
    }

    const isActive=false;

    const showText=true;

return (
    <div className='main'>
        <div className='content'>
            <ChieldComponent
                name={name}
                age={age}
                adhar={adhar}
                greeting={greeting}
                user={user}
                fruits={fruits}
                handleClicked={handleClicked}
                isActive={isActive}
                showText={showText}
            />
        </div>
    </div>
)
}
