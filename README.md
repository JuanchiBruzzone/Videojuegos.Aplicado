# Pasos de Luz

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

Puzzle por turnos hecho en PuzzleScript. Cada paso ilumina una casilla y cierra el regreso. El objetivo es completar el piso sin dejar zonas aisladas.

La entrega v1.2.1 tiene 22 salas. Incluye Sombras y Pulso, sellos y compuertas, salto A → B y piso negro. Los sprites y los sonidos forman parte del programa de PuzzleScript.

## Juego y documentos

- [Código vigente en Markdown](docs/pasos-de-luz-codigo.md).
- [Fuente PuzzleScript](web/prototipos/11-progresion.puzzlescript): se puede copiar completa al editor oficial.
- [Documento maestro](docs/documento-maestro.md): diseño y entrega, sin bloques de código.
- [Pilares](docs/pilares.md), [One Pager](docs/one-pager.md), [Prototipado](docs/prototipado-drive.md), [Scope](docs/scope-drive.md) y [diseño y cierre](docs/diseno-y-validacion.md).
- [Versiones anteriores](docs/old_versions/): archivos Markdown separados.
- [Feedback](https://docs.google.com/spreadsheets/d/1t--fFLI9ZQ5oaVTt8CZsZMpleBgPVXPXw7JNlcznKWs/edit) y [Gantt](https://docs.google.com/spreadsheets/d/19ap1aBHbOc_YoAgADywLEHryXbitf_iOpP0NDtCuGGs/edit).
- [Inventario del cierre](docs/inventario-v1.2.1.md).

La [web](https://juanchibruzzone.github.io/Videojuegos.Aplicado/web/index.html) conserva los once estudios del prototipado, Scope y una vista previa del juego. El vertical slice es la entrega actual con las 22 salas.

## Comprobaciones

No hay dependencias para instalar. Para generar el programa y comprobar los cambios:

```sh
npm run generate
npm run verify
npm test
npm run export:game
npm run build
```

El verificador reproduce 37 casos con victoria en el motor oficial. La revisión del cierre fue interna. El Gantt queda con cero horas restantes.

Los sonidos se definen en SOUNDS y se disparan desde las reglas y eventos de PuzzleScript. Al iniciar y completar una sala hay señales tonales breves; no se incluye música de fondo. La vista previa reproduce esos mismos efectos.

Los IDs de los documentos y planillas se conservan en [docs/drive.json](docs/drive.json). Los documentos originales siguen sueltos en Drive.
