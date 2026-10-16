# Pasos de Luz · Cuaderno de desarrollo

Una bitácora jugable de Diseño de Juegos Aplicado, por Juan Ignacio Bruzzone.

Cada etapa conserva una pregunta, una prueba que se puede jugar y una explicación corta de lo que decidí. **Prototipado / Scope** organiza las partes del trabajo; **Juego / Research** cambia cómo miro una misma etapa. En Research puedo leer y probar al mismo tiempo.

## Prototipado

1. **Una casilla cambia:** comprobar el cambio de oscuridad a luz después del movimiento.
2. **Iluminar para ganar:** completar el tablero con `no Dark`.
3. **El camino no vuelve:** bloquear las casillas iluminadas.
4. **Cuando me encierro:** mostrar el error y permitir deshacer o reiniciar.
5. **La Sombra y el Pulso:** patrulla horizontal y una forma de despejarla.
6. **Del dungeon al observatorio:** comparar el contexto con el mismo tablero.
7. **La última casilla:** responder la devolución del profesor con tres casos jugables.
8. **Sellos y compuertas:** probar un sello que abre un camino, solo y junto a la Sombra.

Las demos usan el **motor oficial de PuzzleScript**, incluido en el repositorio para que no dependan de una página externa. El adaptador lee el tablero y la web lo dibuja. Las reglas de juego están en [web/prototipos](web/prototipos), no duplicadas en la interfaz.

## La Sombra y el feedback

La Sombra ocupa piso oscuro y bloquea la entrada. Se mueve en horizontal después de un movimiento válido y se frena o cambia de dirección ante luz o paredes. **Pulso**, con X, Espacio o el botón, disipa una Sombra vecina sin mover al jugador ni iluminar el piso. Después puedo entrar en esa casilla, incluso si es la última que falta, y ganar.

El caso mínimo empieza con dos casillas: jugador en luz y Sombra en oscuridad. Se comprueban los tres pasos: entrada bloqueada, Pulso, entrada y victoria. También hay un pasillo con patrulla y una sala completa.

Se corrigió una afirmación de la entrega inicial: `Background` se conserva como capa base y la oscuridad pendiente es `Dark`. La victoria de esta implementación usa `no Dark`.

## Abrir en local

Necesita Node.js 20 o superior. No hay dependencias para instalar.

```sh
npm run dev
```

Abrir la dirección que imprime el servidor. Flechas o WASD mueven al jugador; X o Espacio usa Pulso; Z deshace y R reinicia. También hay controles en pantalla.

```sh
npm test
node scripts/verify-prototypes.mjs
npm run build
```

El verificador busca y reproduce soluciones en el motor de PuzzleScript. Hay **11 casos con condición de victoria**, además de la primera prueba libre. Los recorridos comprobados se guardan en [web/data/verification.json](web/data/verification.json). Las pruebas cubren también el encierro, la recuperación, el Pulso lejano y las colisiones de la Sombra.

## Web y apariencia

La dirección principal es [web/index.html](https://juanchibruzzone.github.io/Videojuegos.Aplicado/web/index.html). La raíz redirige a esa página y conserva el fragmento de navegación. El build mantiene la misma estructura, tanto si Pages sirve la rama como si publica el artefacto de Actions.

El selector **Claro / Oscuro** está arriba a la derecha. Usa la preferencia del sistema hasta elegir un tema y recuerda esa elección en el navegador. El texto de lectura usa 16 px, controles y explicaciones breves 14 px, y los metadatos 12 px como mínimo.

El documento nativo de scope está en la carpeta de Drive del proyecto: [Scope — Pasos de Luz](https://docs.google.com/document/d/12ipp_OEbfiu44vDaXs30RaV3pqQidQ-FUhxg5mEtUYQ).

## Activar GitHub Pages

Para publicar con Actions, el workflow está preparado. Elegí **Settings → Pages → Build and deployment → Source → GitHub Actions** y ejecutá **Publicar cuaderno en Pages** desde Actions. El workflow comprueba las reglas, prepara `dist/` y publica ese contenido. No necesita secretos propios.

La publicación depende de activar esa configuración; no se considera desplegada solo por tener el workflow.

## Cómo seguir

El [scope](web/research/scope.md) fija una campaña de ocho niveles por producir, con una estimación de 24 horas de trabajo y 6 de margen. Define los elementos, el proceso de cada conjunto, sus interacciones y el orden de producción. La entrega de scope cierra el 18 de octubre de 2026; ese plazo no es la fecha de entrega del juego terminado. Para sumar un prototipo, se agrega su ficha en [web/data/stages.js](web/data/stages.js), el programa de PuzzleScript y el texto Markdown en [web/research](web/research). [scripts/generate-prototypes.mjs](scripts/generate-prototypes.mjs) conserva la generación de las ocho pruebas actuales.

Las reconstrucciones se implementaron en octubre de 2026 a partir de la entrega y la devolución. No son un registro de ejecuciones realizadas en septiembre. Los chats privados migrados y sus adjuntos no forman parte de este repositorio.

## Referencias

- [Reglas de PuzzleScript](https://www.puzzlescript.net/Documentation/rules.html).
- [Capas de colisión](https://www.puzzlescript.net/Documentation/collisionlayers.html).
- [Condiciones de victoria](https://www.puzzlescript.net/Documentation/winconditions.html).
- [Workflows de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
- [Procedencia del motor y revisión usada](web/vendor/origen.json). PuzzleScript es de Stephen Lavelle, licencia MIT incluida en `web/vendor/PUZZLESCRIPT-LICENSE.txt`.
