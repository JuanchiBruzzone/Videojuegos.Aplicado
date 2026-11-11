# Pasos de Luz — Pilares

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

## Pilares comerciales

### Tiempo

Quiero terminar una campaña que pueda hacer y revisar solo. El plan original es de 12 horas: 11 para niveles y pruebas y una para ajustes. Ahora el juego tiene 22 salas. Antes de seguir agregando cosas, me falta probarlas con otras personas y ajustar lo que no funcione.

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

El juego se juega en el navegador, con teclado o botones. Las reglas corren en el motor oficial de PuzzleScript. La web agrega la presentación, los controles y el audio. Publico los cambios en GitHub Pages.

### Proceso

Diseño una sala, genero el programa y compruebo que tenga solución en el motor. Después pruebo cómo se entiende, anoto el feedback, hago ajustes y vuelvo a comprobarla. Mantengo el código y los documentos sueltos junto al maestro.

### Know-how

Ya tengo funcionando el piso, las Sombras, Pulso, compuertas y teleporter. También tengo scripts para generar los niveles y comprobar las soluciones. Me falta aprender de las partidas de otras personas: qué pistas ayudan, dónde se traban y cómo sienten la dificultad.

## Decisiones

Me quedo con el observatorio porque recuperar luz tiene sentido en ese lugar. Aclaré Pulso desde su primera aparición y sumé seis salas avanzadas usando las reglas que ya estaban. El sonido y la música se pueden apagar.
