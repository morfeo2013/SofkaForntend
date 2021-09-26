import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){


return(

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/usuarionuevo">Jugar</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/puntajes">Puntajes</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>



 




)



}