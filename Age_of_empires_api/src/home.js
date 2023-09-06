import React from "react";
import "./Home.css"
function Home() {
  return (
    <div className="container">
      <h1>API de Age of Empires 2 🏰</h1>
      <p>Una API que te sumerge en el emocionante mundo de Age of Empires 2, proporcionando información y datos relacionados con el juego.</p>

      <h2>Tabla de contenidos 📑</h2>
      <ul>
        <li>Instalación</li>
        <li>Uso</li>
        <li>Contribución</li>
        <li>Contacto</li>
        <li>Colaboración con el Instituto Técnico Renault Argentina</li>
      </ul>

      <h2>Instalación 🚀</h2>
      <ol>
        <li>Clona este repositorio: <code>git clone https://github.com/GabyCostilla/API-Age-of-empires</code></li>
        <li>Ingresa al directorio del repositorio: <code>cd api-age-of-empires-2</code></li>
        <li>Instala las dependencias: <code>npm install</code></li>
      </ol>

      <h2>Uso 🕹️</h2>
      <p>Para adentrarte en esta emocionante API, realiza solicitudes HTTP a los endpoints relevantes y levanta el servidor en tu entorno local. Asegúrate de incluir los encabezados necesarios, como la autenticación si es requerida.</p>

      <h2>Contribución 🤝</h2>
      <p>¡Contribuciones son más que bienvenidas! Si deseas unirte a este emocionante proyecto, sigue estos pasos:</p>
      <ol>
        <li>Bifurca el repositorio y crea una rama para tus contribuciones.</li>
        <li>Realiza tus cambios y asegúrate de seguir las pautas de estilo.</li>
        <li>Envía una solicitud de extracción describiendo tus emocionantes cambios.</li>
      </ol>

      <h2>Contacto 📬</h2>
      <p>Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo a través de:</p>
      <ul>
        <li>Email: gabrielckeret@gmail.com</li>
        <li>Instagram: @gabnzana_en_compota</li>
      </ul>

      <h2>Colaboración con el Instituto Técnico Renault Argentina 🚗</h2>
      <p>Este proyecto es parte de una colaboración con el Instituto Técnico Renault Argentina, donde se promueve el aprendizaje práctico y la innovación tecnológica.</p>
      <ul>
        <li><a href="https://www.institutorenault.com.ar/" target="_blank" rel="noopener noreferrer">Pagina Oficial: Instituto Técnico Renault</a></li>
        <li>Instagram: @Instituto Técnico Renault</li>
      </ul>
    </div>
  );
}

export default Home;
