import React, { FC} from "react";


interface PersonProps{
    name: string;
    cake: string;
}

const Cake: FC<PersonProps> = ({ name, cake }) =>{
    return (
        <>
            <h1>Feliz Cumpleanos {name}!</h1>
            <img src={cake}></img>

        </>
    )
} 

export default Cake;