import React from 'react';
import Holder from './components/Holder'

const App = () =>{
    return(
        <div class="cover-bg fondo">
            <div class="top-bar">
            <p class="space-top">Home</p>
            <p class="space-top">About us</p>
            </div>
            <div class="title-container">
                <div class="flex flex-col">
                <h1 class="title">Login Page</h1>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <h2 class="">Florería de Honduras</h2>
                </div>
            <div class="login-container">
                <Holder>
                    <div class="flex flex-col">
                   <div class="my-5 flex items-center">
                       <p class="mx-5">Nombre de usuario:</p>
                       <input type="text" placeholder="Nombre de usuario"></input>
                   </div>
                   <div class="my-5 flex items-center">
                       <p class="mx-5">Contraseña:</p>
                       <input type="text" placeholder="Contraseña"></input>
                   </div>
                   <button class="login-button">Log in</button>
                   </div>
                </Holder>
            </div>
        </div>
    )
}

export default App;