# Pasos de Luz

Proyecto de Diseño de Juegos Aplicado de Juan Ignacio Bruzzone.

El jugador pinta las casillas al caminar y ya no puede volver por ellas. Pulso disipa las Sombras vecinas; los sellos abren compuertas; el teleporter lleva de A a B. El piso negro queda bloqueado y no cuenta para ganar.

[**Jugar y leer el prototipado**](https://juanchibruzzone.github.io/Videojuegos.Aplicado/web/index.html) · [**Scope**](web/research/scope.md)

La web reúne las pruebas de cada regla y un recorrido de 16 niveles. Las soluciones están comprobadas en el motor de PuzzleScript. Falta probar el aprendizaje y ajustar la dificultad con jugadores.

## Documentos

- [Prototipado](docs/prototipado-actualizado.md): pruebas, feedback y progresión de niveles.
- [Scope](docs/scope.md): elementos, conjuntos, proceso de producción, etapas e interacciones y tiempo estimado.

El scope calcula 12 horas de trabajo restante: 11 para diseñar y probar niveles y una para ajustes. Los documentos de Drive están enlazados desde la web.

## Ejecutar el sitio

Necesita Node.js 20 o superior. No requiere instalar dependencias.

```sh
npm run dev
```

Flechas o WASD para moverse; X o Espacio para Pulso; Z para deshacer; R para reiniciar. También hay botones en pantalla. El tema claro u oscuro se guarda en el navegador.

```sh
npm test
node scripts/verify-prototypes.mjs
npm run build
```

El verificador busca y reproduce las soluciones con el mismo motor del sitio. Los resultados se guardan en [web/data/verification.json](web/data/verification.json). El build conserva la ruta `/web/index.html`; la raíz redirige allí.

## Archivos

Las reglas están en [web/prototipos](web/prototipos), las explicaciones en [web/research](web/research) y el generador en [scripts/generate-prototypes.mjs](scripts/generate-prototypes.mjs). La interfaz dibuja el estado devuelto por el motor oficial incluido en [web/vendor](web/vendor).

El workflow de Pages comprueba las reglas, prepara `dist/` y publica el sitio. No requiere secretos propios.

PuzzleScript es de Stephen Lavelle. Se incluye su [licencia MIT](web/vendor/PUZZLESCRIPT-LICENSE.txt) y la [procedencia del motor](web/vendor/origen.json).
