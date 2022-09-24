import React, { FC} from "react";


interface PersonProps{
    name: string;
    cake: string;
}

const Cake: FC<PersonProps> = ({ name, cake }) =>{
    return (
        <>
            <h1 className="pb-10">Feliz Cumpleanos {name}!</h1>
            <img className="" src={cake}></img>

        </>
    )
} 

export default Cake;