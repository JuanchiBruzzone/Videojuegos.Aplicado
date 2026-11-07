# Pasos de Luz — Versiones y cambios

## v1.1.0 — Recorridos y pistas

- Se rediseñan las 16 salas: dos recorridos iniciales breves, introducciones de mecánicas y desafíos que combinan reglas. El cierre tiene 46 casillas y tres Sombras.
- Las compuertas requieren conservar accesos; el salto A → B obliga a terminar la sala de entrada; el piso negro corta rutas entre sectores.
- Se agregan cinco pantallas de pistas en español antes de pintar, Pulso, sello, teleporter y piso negro. Usan `message` en la fuente de PuzzleScript y una pantalla modal en la web.
- Enter, Espacio y el botón permiten continuar. Cerrar la pista no mueve al jugador ni dispara Pulso. Se puede volver a leerla.
- Los niveles, pistas y objetivos de diseño se mantienen juntos en `web/data/campaign.js`.
- El adaptador distingue mensajes de salas jugables; se conservan la selección de nivel, el avance, deshacer y reiniciar.
- Se separa el progreso guardado de esta versión para que las salas nuevas se puedan completar de nuevo.
- Se conserva el código completo de v1.0.0 y se agrega una exportación Markdown con ambas versiones.
- Se registran los comentarios y ajustes F01–F08 en la planilla de feedback.

Validación: búsqueda y reproducción de los 31 casos en el motor oficial, pruebas de reglas e interfaz y build del sitio. Las métricas de rutas describen opciones del tablero; el ajuste de dificultad percibida requiere observar partidas.

## v1.0.0 — Versión de partida

Once estudios de prototipado y una campaña de 16 niveles con pintura, Sombra/Pulso, sello/compuerta, teleporter A → B y piso negro. Indicaciones junto al tablero, controles de deshacer y reiniciar, selector de nivel y avance al completar una sala.

Se conserva la fuente completa en `docs/versiones/pasos-de-luz-v1.0.0.md`.
