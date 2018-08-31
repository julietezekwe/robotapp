import React from "react";
import Card from "./Card";

const CardList = ({ robots}) =>{
    
    return (
        <div>
           {
            robots.map((value, i) => {
                return (
                <Card 
                key={i} 
                id={value.id} 
                name={value.name} 
                email={value.email}
                
                 />
                )
              })
           }
        </div>
    );
}

export default CardList;