"use client"
import { useState } from "react";
import defaultDragons from "../lib/dragon.jsx";
import Divider from "@/components/Divider.jsx";

export default function Home() {
  const [dragons, setDragons] = useState(defaultDragons);
  console.log(defaultDragons);

  return (
    <div>
      <h1>Dragons</h1>
      {
        dragons.map((dragon) => {
          console.log(dragon);
          return (
            <div>
              <div key={dragon.id} className="dragon-container">
                <p>{dragon.id}</p>
                <h2>{dragon.name}</h2>
                <p>{dragon.emoji}</p>
                <p>{dragon.color}</p>
                <p>{dragon.size}</p>
                <p>{dragon.ability}</p>
                <p>{dragon.habitat}</p>
                <p>{dragon.age}</p>

              </div>
              <Divider />
            </div>
          );
     
    
        })}
    </div>  
)};
