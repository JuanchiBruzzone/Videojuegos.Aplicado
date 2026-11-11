# Pasos de Luz — Pilares

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

## Pilares comerciales

### Tiempo

La entrega está cerrada con 22 salas. El Gantt queda con cero horas restantes. Priorizo una campaña que pueda revisar y mantener solo.

### Inversión

Uso las herramientas que ya tengo: PuzzleScript, JavaScript, GitHub Pages y Drive. Para esta versión no tengo previsto comprar música, sprites ni servicios. La inversión principal es mi tiempo.

### Riesgo

Que un nivel tenga solución no quiere decir que se entienda o sea divertido. Para reducir ese riesgo, pruebo las reglas por separado, compruebo los recorridos y tomo el feedback. También necesito frenar el crecimiento del juego para poder revisar lo que ya hice.

## Pilares de diseño

### Objetivo

Iluminar todo el piso que se puede recorrer. Cada paso pinta una casilla y cierra el regreso. Al completar la sala, la constelación recupera su luz y puedo pasar a la siguiente.

### Experiencia

Busco que el jugador observe, pruebe y descubra el recorrido sin apuro. Me interesa que pueda entender dónde se equivocó y tener ganas de probar otra idea. Por eso no hay reloj y se puede deshacer o reiniciar.

### Límites

Un jugador, movimiento en cuatro direcciones y el tablero a la vista. Mantengo cinco reglas, hasta tres Sombras, un sello con su compuerta y un salto A → B por sala. La dificultad viene de cómo se combinan y de la forma del piso.

## Pilares de desarrollo

### Plataforma

El juego está hecho en PuzzleScript oficial y se puede copiar completo al editor. Los sonidos y los sprites forman parte de ese programa. La web conserva los estudios y permite probar el resultado.

### Proceso

Diseño una sala, genero el programa y compruebo que tenga solución en el motor. Después pruebo cómo se entiende, anoto el feedback, hago ajustes y vuelvo a comprobarla. Mantengo el código y los documentos sueltos junto al maestro.

### Know-how

Tengo funcionando el piso, las Sombras, Pulso, compuertas, teleporter y sonidos. Los scripts generan el programa y comprueban las soluciones. La revisión de cierre es interna; el feedback recibido de Diego D y Vanesa queda registrado en la planilla.

## Decisiones

Me quedo con el observatorio porque recuperar luz tiene sentido en ese lugar. Aclaré Pulso desde su primera aparición y sumé seis salas avanzadas usando las reglas que ya estaban. El motor reproduce efectos y señales tonales breves al iniciar y completar una sala. No lleva una pista musical de fondo.
