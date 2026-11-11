# Pasos de Luz

Proyecto de Diseño de Juegos Aplicado de Juan Ignacio Bruzzone.

El jugador pinta las casillas al caminar y ya no puede volver por ellas. Pulso disipa las Sombras vecinas; los sellos abren compuertas; el teleporter lleva de A a B. El piso negro queda bloqueado y no cuenta para ganar.

[**Jugar y leer el prototipado**](https://juanchibruzzone.github.io/Videojuegos.Aplicado/web/index.html) · [**Scope**](web/research/scope.md)

La versión 1.2.0 reúne las pruebas de cada regla y 22 niveles: dos salas iniciales breves, pistas entre mecánicas, el cierre original de 46 casillas y seis salas avanzadas de 56 casillas con tres Sombras. La web agrega efectos y música originales sintetizados, opcionales e independientes. Las soluciones están comprobadas en el motor de PuzzleScript. Falta probar el aprendizaje y ajustar la dificultad con jugadores.

## Documentos

- [Código y versiones](docs/pasos-de-luz-codigo.md): fuente completa de PuzzleScript y registro de cambios.
- [Planilla de feedback](https://docs.google.com/spreadsheets/d/1t--fFLI9ZQ5oaVTt8CZsZMpleBgPVXPXw7JNlcznKWs/edit): observaciones por nivel, cambios, estados y versiones; incluye los objetivos de testeo.
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
npm run generate
npm run verify
npm test
npm run export:game
npm run build
```

El verificador busca y reproduce las soluciones con el mismo motor del sitio. Los resultados se guardan en [web/data/verification.json](web/data/verification.json). El build conserva la ruta `/web/index.html`; la raíz redirige allí.

## Archivos

Los niveles y sus pistas se editan en [web/data/campaign.js](web/data/campaign.js). Después de generar y verificar, `npm run export:game` actualiza el Markdown con la fuente completa y conserva el código anterior. Los IDs de Drive se registran en `docs/drive.json`; las futuras actualizaciones conservan esos mismos IDs. El código se actualiza como Markdown y el feedback se edita en la planilla nativa.

Las reglas están en [web/prototipos](web/prototipos), las explicaciones en [web/research](web/research) y el generador en [scripts/generate-prototypes.mjs](scripts/generate-prototypes.mjs). La interfaz dibuja el estado devuelto por el motor oficial incluido en [web/vendor](web/vendor).

El workflow de Pages comprueba las reglas, prepara `dist/` y publica el sitio. No requiere secretos propios.

PuzzleScript es de Stephen Lavelle. Se incluye su [licencia MIT](web/vendor/PUZZLESCRIPT-LICENSE.txt) y la [procedencia del motor](web/vendor/origen.json).

## Documentación consolidada

- [Documento maestro](docs/documento-maestro.md): concepto, pilares, diseño, prototipado, Scope, progresión, testing y fuentes.
- [Pilares](docs/pilares.md) y [diseño y pruebas](docs/diseno-y-validacion.md).
- [Inventario de cambios](docs/inventario-v1.2.0.md).
- Los IDs estables de Docs y Sheets se registran en [Drive](docs/drive.json). Los originales sueltos se conservan.

El audio se activa a pedido con Sonido y Música. Es una capa de la web; copiar únicamente la fuente PuzzleScript no incluye esa capa. No necesita descargas ni dependencias adicionales.
