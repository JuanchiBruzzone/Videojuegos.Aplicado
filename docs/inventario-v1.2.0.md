# Inventario de cambios — v1.2.0

## Juego

- La campaña pasa de 16 a 22 salas. Se mantienen los tableros anteriores y se agregan La órbita quebrada, El sello del sur, Ecos del vacío, La tercera vigilia, Entre dos cielos y La constelación imposible.
- Cada sala nueva tiene 56 casillas y tres Sombras. Combina sello, compuerta, teleporter y piso negro, con paredes y bifurcaciones.
- La primera presentación de Pulso explica X, Espacio y el botón, la cercanía necesaria y que disipar no pinta.
- Se agregan efectos de pasos, bloqueo, Pulso, compuerta, salto, victoria, deshacer y reinicio.
- Se agrega música ambiental original sintetizada. Sonido y música tienen botones separados, recuerdan la preferencia y se activan a pedido. La música se corta al ocultar la pestaña.
- Se agrega una barra de iluminación, contador de nivel y respuesta visual breve al paso y a Pulso. Respeta movimiento reducido.
- Se ajustan tarjetas, controles, foco de teclado y distribución en pantallas chicas. Se retira el botón deshabilitado de próximas etapas.

Archivos: `web/audio.js`, `web/app.js`, `web/index.html`, `web/styles.css`, `web/data/campaign.js`, `web/data/stages.js` y `web/prototipos/11-progresion.puzzlescript`.

## Comprobaciones y exportación

- Se comprueban 37 casos con victoria en el motor oficial: 22 salas y 15 casos de los estudios anteriores.
- El verificador toma la versión desde la campaña.
- Las pruebas revisan las salas nuevas, sus soluciones y el reinicio; se actualizan las de progresión e interfaz.
- Se agregan pruebas de audio opcional, eventos, preferencias separadas y corte de música al ocultar la pestaña.
- Se actualiza la exportación de código y se conserva v1.1.0 junto a v1.0.0. Se agrega el archivo de v1.2.0.
- Pasaron `npm run verify`, `npm test`, `npm run export:game` y `npm run build`.

Archivos: `scripts/verify-prototypes.mjs`, `scripts/export-game.mjs`, `tests/audio.test.mjs`, `tests/interface.test.mjs`, `tests/prototypes.test.mjs`, `web/data/verification.json`, `docs/pasos-de-luz-codigo.md`, `docs/versiones/pasos-de-luz-v1.2.0.md` y `package.json`.

## Documentos

- Se crea Pilares en Drive, con las tres familias y sus nueve puntos.
- Se crea el documento maestro con índice enlazado, concepto, pilares, diseño, prototipado, Scope, catálogo de las 22 salas, planificación, feedback y código de las tres versiones.
- One Pager, Prototipado y Scope se actualizan en sus mismos archivos de Drive. Los documentos sueltos se conservan.
- Se revisan los diez PDF adjuntos del curso. Se completan los apartados de diseño, ciclos de juego, progresión y selección del vertical slice.
- A pedido del usuario, se borra el documento “Revisión del curso - Pasos de Luz - Juan Ignacio Bruzzone” y se quitan su apartado y enlaces del maestro. No queda como archivo suelto local.
- Se simplifican los textos nuevos de los documentos y las planillas.
- El código de Drive se reemplaza conservando su ID. `docs/drive.json` registra los enlaces actuales.
- Se actualizan README, Scope y Research de progresión en el repositorio.

Copias locales: `docs/documento-maestro.md`, `docs/pilares.md`, `docs/diseno-y-validacion.md`, `docs/one-pager.md`, `docs/prototipado-drive.md`, `docs/scope-drive.md`, `docs/prototipado-actualizado.md`, `docs/scope.md`, `docs/cambios.md`, `docs/drive.json`, `README.md`, `web/research/11-progresion.md` y `web/research/scope.md`.

## Planillas

- Feedback conserva sus dos hojas y el mismo ID. Se mantienen las palabras originales de Diego D y Vanesa.
- Se reescriben los comentarios propios en primera persona como Juan Ignacio y se agregan F13–F19 para audio, música, salas nuevas, presentación, pilares, maestro y pruebas pendientes.
- Se completan los IDs que faltaban en los comentarios externos y se dejan en revisión los bloqueos sin reproducir.
- Objetivos de testeo se amplía a once objetivos, incluidos audio, música, salas nuevas y bloqueo diagonal.
- Se ajustan encabezados, ancho de columnas, filas, texto envuelto, filtros, inmovilización y colores de estado. Se usa el mismo estilo en ambas hojas.
- Gantt y Elementos tienen encabezados y anchos más claros, texto ajustado y barras planificadas en verde. Se actualizan las referencias a 22 salas y 37 casos.
- Se conservan las fórmulas, las fechas internas y el plan original de 12 horas. No se registran como horas trabajadas.

## Pendientes

- Reproducir el bloqueo diagonal reportado en el nivel 4.
- Probar aprendizaje, dificultad y comodidad del audio con personas en esta versión.
- Preparar una build separada del vertical slice si se necesita para la entrega. La selección de salas 4, 8 y 14 queda documentada y disponible en el selector.

Las soluciones comprobadas muestran que los niveles se pueden completar. No sustituyen las pruebas con jugadores.
