Rick and Morty Episodes App

Este es un proyecto en Ionic con Angular que muestra los personajes de cada episodio de Rick and Morty usando la API oficial.

🚀 Tecnologías Usadas

Ionic (Framework para aplicaciones híbridas)

Angular (Framework frontend)

TypeScript

API de Rick and Morty (rickandmortyapi.com)

📌 Instalación y Configuración

1️⃣ Clonar el Repositorio

git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

2️⃣ Instalar Ionic CLI (si no lo tienes)

npm install -g @ionic/cli

3️⃣ Activar el Entorno Virtual

Si el proyecto está en un entorno virtual, actívalo antes de continuar:

source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

4️⃣ Instalar Dependencias del Proyecto

npm install

5️⃣ Ejecutar la Aplicación

ionic serve

Esto abrirá la app en el navegador en http://localhost:8100/.

📂 Estructura del Proyecto

📦 tu-repositorio
├── 📂 src
│   ├── 📂 app
│   │   ├── 📂 pages
│   │   │   ├── 📂 episodes (Lista de episodios)
│   │   │   ├── 📂 episode-detail (Detalles de un episodio)
│   │   ├── 📂 services (Servicios para consumir la API)
│   ├── 📂 assets (Recursos estáticos)
│   ├── 📂 environments (Configuración de entornos)
├── 📜 package.json (Dependencias y scripts)
├── 📜 README.md (Este archivo 📄)

📡 API Usada

El proyecto consume la API de Rick and Morty:

Lista de episodios: https://rickandmortyapi.com/api/episode

Detalles de un episodio: https://rickandmortyapi.com/api/episode/{id}

Personajes de un episodio: Cada episodio tiene una lista de URLs de personajes.

Ejemplo de estructura de respuesta:

{
  "id": 1,
  "name": "Pilot",
  "air_date": "December 2, 2013",
  "episode": "S01E01",
  "characters": [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2"
  ]
}

⚡ Funcionalidades

✅ Lista de episodios con nombre y fecha de emisión.✅ Detalle de un episodio con personajes asociados.✅ Navegación entre páginas.✅ Estilizado con Ionic.

