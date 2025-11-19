import React, { useState } from "react";
import Aboutmovie from "./Aboutmovie";

const Moviemain = () => {
const [movie, setMovie] = useState([
  {
    name: "DADA",
    actor: "Kavin",
    year: 2023,
    language: "Tamil",
    about:
      "Dada is a 2023 Tamil family romance drama about a young college couple..."
  },
  {
    name: "LEO",
    actor: "Vijay",
    year: 2023,
    language: "Tamil",
    about:
      "Leo is an action thriller about a cafe owner whose past resurfaces..."
  },
  {
    name: "VIKRAM",
    actor: "Kamal Haasan",
    year: 2022,
    language: "Tamil",
    about:
      "Vikram is a high-octane action thriller following a black-ops team hunting masked killers."
  },
  {
    name: "KAITHI",
    actor: "Karthi",
    year: 2019,
    language: "Tamil",
    about:
      "Kaithi is an intense action film about an ex-convict trying to meet his daughter while being caught in a drug bust."
  },
  {
    name: "PONNIYIN SELVAN: I",
    actor: "Vikram",
    year: 2022,
    language: "Tamil",
    about:
      "PS-1 is a historical epic based on Kalki's novel, showcasing the Chola dynasty's political intrigue."
  },
  {
    name: "JAILER",
    actor: "Rajinikanth",
    year: 2023,
    language: "Tamil",
    about:
      "Jailer is an action dark-comedy about a retired jailer who hunts down a criminal gang."
  }
]);

  return (
    <div>
      {movie.map((elm, index) => (
        <div key={index}>  
          <h2>{elm.name}</h2>
          <p>Actor: {elm.actor}</p>
          <p>Year: {elm.year}</p>
          <p>Language: {elm.language}</p>
          <button>Book Ticket</button>

          <Aboutmovie film ={movie}></Aboutmovie>
        </div>
      ))}
    </div>
  );
};

export default Moviemain;
