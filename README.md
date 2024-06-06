# Proyecto Final del Bootcamp Desarrollo Web Frontend - Francisco Castillo, junio 2024
Documentación del archivo estilos2.css.
Esta documentación proporciona una visión detallada de los estilos CSS aplicados, su importancia en la estructura y apariencia del sitio web Data24.
## 1. Estructura del proyecto:

![carpetas_proyecto](https://github.com/pacoharris32/proyectofjcafront24/assets/33460828/c36c850a-4172-4e1a-9542-77947a42ed52)

* img: Carpeta para imágenes del proyecto.
* js: Carpeta para scripts de JavaScript que utiliza el sitio.
* scripts: Código JavaScript para herramienta de Accesibilidad del Gobierno de México.

## 2. Descripción del archivo estilos2.css perteneciente al sitio web, archivo index.html.
En esta sección se explica cada módulo del archivo estilos2.css, describiendo su propósito y cómo contribuye a la apariencia y funcionalidad del archivo index.html. Esta documentación ayudará a entender y mantener el código. ______________

# Reset y Box Sizing:
```ruby
* {
  margin: 0;
  box-sizing: border-box;
   }
```
Propósito: Elimina el margen por defecto de todos los elementos y establece el box-sizing a border-box para que el padding y el borde se incluyan en el ancho y alto total de los elementos.
Importancia: Asegura un diseño más predecible y consistente en todos los navegadores.

# Estilos Globales del Body:
```ruby
body {
  font-family: "Poppins", sans-serif;
  padding: 80px 0;
  min-height: 100vh;
  background: linear-gradient(90deg, rgb(245, 245, 247) 0%, rgb(159, 193, 176) 50%);
}
```
Propósito: Define la fuente global, agrega padding superior e inferior y establece una altura mínima de la vista. Aplica un fondo degradado. 
Importancia: Mejora la apariencia general y la legibilidad del sitio web.

# Logo y Animación:
```ruby
.logo {
  width: 300px;
  height: 300px;
  fill: crimson;
  animation: latidos infinite alternate 5s both 3s;
}
.logo:hover {
  animation-play-state: paused;
}
@keyframes latidos {
  0% { transform: rotate(0); }
  25% { transform: translateX(-200px) rotate(360deg); }
  50% { transform: translateX(200px) rotate(0deg); }
  75% { transform: translateX(-200px) rotate(0deg); }
  100% { transform: translateX(200px) rotate(180deg); }
}
```

![logoybarranav](https://github.com/pacoharris32/proyectofjcafront24/assets/33460828/e5c7d844-f48e-4bc5-87ee-9d2a1f00885c)

Propósito: Define el tamaño y color del logo SVG y añade una animación que rota y desplaza el logo horizontalmente. 
Importancia: Añade interactividad visual y atractivo estético. logoybarranav

# Header:
```ruby
header {
  background-color: #374342;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  margin-top: 0;
}
header h1 {
  margin: 0;
  font-size: 2em;
}
```
Propósito: Establece el fondo, color del texto, padding y alineación del contenido del encabezado. 
Importancia: Proporciona un área de encabezado clara y visible.

# Navegación Principal:
```ruby
nav {
  background-color: #0d0d0d;
  color: #fff;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

![header](https://github.com/pacoharris32/proyectofjcafront24/assets/33460828/ced02008-168f-42cf-afbc-a3a452b87823)

Propósito: Diseña la barra de navegación con un fondo oscuro, color de texto blanco, y sombra. Fija la barra en la parte superior. 
Importancia: Mantiene la barra de navegación visible en todo momento.

# Contenedor Principal:
```ruby
.container {
  width: 80%;
  margin: 20px auto;
  padding-top: 30px;
  padding-bottom: 120px;
}
```
Propósito: Define el ancho, margen y padding del contenedor principal. 
Importancia: Centraliza y proporciona espaciado para el contenido principal.

# Sección de Tarjetas:
```ruby
.cards {
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.card {
  flex: 1 1 300px;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
  background-color: #fff;
}
.card:hover {
  transform: translateY(-10px);
}
.card h3 {
  margin: 0;
  background-color: #93bbbf;
  color: #fff;
  border-radius: 15px 15px 0 0;
  min-height: 3em;
  display: flex;
  align-items: center;
  padding: 10px;
  text-align: center;
}
.card img {
  max-width: 100%;
  height: auto;
  padding: 5px;
  display: block;
}
.card-content {
  flex-grow: 1;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.card-content p {
  flex-grow: 1;
  margin: 0;
}
.card-content a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  margin-top: 10px;
  align-self: flex-end;
}
.card-content a:hover {
  text-decoration: underline;
}
```
Propósito: Define el diseño de la sección de tarjetas, incluyendo la disposición de flexbox, el espaciado, y los estilos individuales de las tarjetas. 
Importancia: Proporciona una manera organizada y estilizada de mostrar información en tarjetas. 4_port1

![4_port1](https://github.com/pacoharris32/proyectofjcafront24/assets/33460828/66119a73-dc38-4bf7-b358-39292008c807)

# Footer:
```ruby
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
}
```
Propósito: Establece el estilo del pie de página con un fondo oscuro, texto blanco, y centrado del contenido. 
Importancia: Asegura que el pie de página esté siempre visible en la parte inferior de la ventana.

![6_footer2](https://github.com/pacoharris32/proyectofjcafront24/assets/33460828/7c05e503-4d15-49af-8a7b-77f80d9682a9)

# Navegación Secundaria:
```ruby
#mainMenu {
  display: none;
}
#mainMenu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
#mainMenu li {
  margin: 10px 0;
}
#mainMenu a {
  color: white;
  text-decoration: none;
}
nav {
  display: flex;
  gap: 10px;
  justify-content: center;
  background-color: #444;
  padding: 10px;
}
nav a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}
```
Propósito: Define el estilo del menú principal y secundario, ocultando el menú principal por defecto. 
Importancia: Facilita la navegación del usuario con un menú bien diseñado.

# Formulario de Contacto:
```ruby
.contacto {
  margin-top: 90px;
  padding: 4rem 2rem;
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.contacto__title {
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 2rem;
}
.contacto__form {
  padding: 4rem 2rem;
  color: white;
  background-color: #333333;
  border-radius: 20px 0px 0px 0px;
}
.contacto__inputs {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
}
.contacto__input {
  padding: 1rem;
  background-color: #343333;
  border: 1px solid #bdb4b4;
  color: #bdb4b4;
  border-radius: 6px;
  flex-grow: 1;
}
.contacto__submit {
  background-color: #9FC1B0;
  color: black;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 10px;
  width: max-content;
}
.contacto__figure {
  background-color: #fff;
  padding: 2rem 0;
  border-radius: 0px 20px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contacto__img {
  width: 70%;
  max-width: 500px;
}
@media ( width > 764px ) {
  .contacto {
    flex-direction: row;
  }
  .contacto > * {
    width: 50%;
  }
}
```

Propósito: Estilos para la sección de contacto, incluyendo el formulario y la imagen. 
Importancia: Asegura que el formulario de contacto sea accesible y esté bien presentado.


# Estilos para Elementos de Introducción de datos de contacto:
```ruby
input, button, textarea {
  font: inherit;
}
```
Propósito: Asegura que los elementos de formulario hereden la fuente definida en el cuerpo. 
Importancia: Mantiene la consistencia tipográfica en todo el sitio.

![5_escribe](https://github.com/pacoharris32/proyectofjcafront24/assets/33460828/2ed435e3-4b73-4a6e-9e44-2b9523a45300)

``Esta documentación proporciona una visión detallada de los estilos CSS aplicados y su importancia en la estructura y apariencia del sitio web Data24.
``
