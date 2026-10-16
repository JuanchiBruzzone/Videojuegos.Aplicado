# Pasos de Luz — Prototipado

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

Actualización: 15 de octubre de 2026.

## Objetivo

Quise comprobar si el recorrido de Pasos de Luz podía sostener el juego antes de seguir sumándole sistemas. La idea es avanzar por casillas oscuras, iluminarlas al pasar y completar todo el tablero sin quedar encerrado.

Después de la devolución del profesor, volví a llevar cada duda a una prueba jugable. Esta actualización recoge esa reconstrucción, realizada el 15 de octubre de 2026, y cierra la interacción que faltaba explicar entre la Sombra y la última casilla.

## 1. Cambio de luz al moverme

Arranqué con un tablero chico y dejé al jugador volver libremente sobre las casillas iluminadas. En esta primera prueba quería mirar el cambio del piso, sin mezclarlo todavía con la dificultad del recorrido.

Separé Background, el piso y el jugador en capas distintas. Background queda como base permanente; Dark representa el piso oscuro y Light el iluminado. Así el jugador puede ocupar una casilla mientras cambia el estado del piso.

La transformación se aplica con late: primero termina el movimiento y después la casilla de llegada pasa de Dark a Light. Comprobé que se ilumina la nueva posición y que la capa Background se conserva en todo el tablero.

Resultado: mantuve el cambio después del movimiento. La casilla inicial ya empieza iluminada.

## 2. Condición de victoria

En vez de agregar una puerta de salida, hice que la victoria dependiera del estado del tablero. Si todavía queda una casilla Dark, el recorrido no está completo. Cuando no queda ninguna, el nivel termina.

Acá corregí una afirmación de la entrega anterior: había escrito no Background. En la implementación, Background es una capa obligatoria y no desaparece. La condición que uso y comprobé en el motor es no Dark.

Resultado: mantuve la victoria por iluminación total. Encontré y reproduje un recorrido que completa el tablero sin una salida aparte.

## 3. Volver a pisar una casilla iluminada

Comparé la primera prueba, donde podía volver atrás, con otra que bloquea la entrada en Light. En la primera podía corregir el recorrido con mucha facilidad. En la segunda, cada paso modifica las opciones que me quedan.

La regla detecta el intento de entrar en una casilla iluminada y detiene el movimiento. Si el jugador sigue en el mismo lugar, se cancela el turno completo. Eso también evita que una acción bloqueada cambie otros elementos del tablero.

Resultado: mantuve el bloqueo de las casillas iluminadas. Las dos versiones quedan disponibles en la web para comparar la diferencia.

## 4. Condición de derrota

Probé un recorrido que deja cuatro casillas oscuras y encierra al jugador. El tablero reconoce que no hay una casilla oscura vecina a la que se pueda seguir, pero conserva la escena para que se vea dónde estuvo el error.

Preferí mostrar ese encierro y dejar disponibles Deshacer y Reiniciar. Comprobé que deshacer recupera el paso anterior y que reiniciar vuelve al tablero inicial. La victoria se comprueba primero: quedarse sin movimientos después de iluminar todo significa ganar.

Cuando hay una Sombra vecina, todavía existe una acción posible: usar Pulso. Por eso una casilla oscura ocupada por la Sombra no se trata automáticamente como una derrota.

Resultado: mantuve el reinicio manual y una señal de encierro, sin borrar de inmediato el intento.

## 5. Entrada del enemigo

La devolución del profesor señaló el punto que faltaba cerrar: si la Sombra ocupa oscuridad y yo tengo que iluminar todo, ¿cómo recupero su casilla, especialmente si es la última?

Definí una regla concreta para esta versión. La Sombra patrulla en horizontal después de un movimiento válido del jugador. Cambia de dirección o se detiene ante paredes y casillas iluminadas. No puede ocupar luz ni entrar en el jugador. Intentar caminar directamente hacia ella bloquea el paso.

Agregué Pulso como acción, con Espacio o el botón de la web. Si la Sombra está en una casilla vecina, arriba, abajo, a la izquierda o a la derecha, el Pulso la disipa. El jugador no se mueve y el piso todavía queda oscuro. Recién al entrar en ese espacio lo ilumina.

La prueba mínima tiene dos casillas: el jugador empieza en una iluminada y la Sombra ocupa la única oscura. Primero intenté avanzar y comprobé el bloqueo. Después usé Pulso: la Sombra desapareció, pero el nivel todavía no estaba ganado. Al avanzar una vez más se iluminó la última casilla y se completó el nivel.

También probé la regla en un pasillo con patrulla y en una sala completa. Comprobé que un Pulso lejano no quite la Sombra, que golpear una pared no le dé un turno extra y que la patrulla no impida acercarme por una colisión simultánea.

Resultado: mantengo la Sombra como una presión secundaria y Pulso como la forma de despejarla. Esta versión usa una Sombra por nivel, sin persecución en tiempo real ni un recurso consumible para el Pulso.

## 6. Ambientación, premisa y narrativa

El dungeon fue útil para empezar, pero explicaba poco por qué tenía que iluminar cada espacio y por qué no podía volver por el camino recorrido.

Mantuve la reformulación del observatorio abandonado. Cada nivel representa una constelación apagada: caminar vuelve a conectar sus fragmentos, y las partes restauradas quedan fuera del recorrido que todavía puedo hacer. La Sombra ocupa los lugares que no recuperaron su luz.

En la sexta prueba agregué un selector para ver el mismo tablero como dungeon u observatorio. Cambia la presentación y conserva la posición del jugador, la luz y la Sombra. Así puedo comparar la lectura visual sin cambiar el puzzle.

Resultado: mantuve el observatorio para Pasos de Luz. El dungeon queda como referencia del punto de partida.

## Resultado final del prototipado

Las seis dudas originales tienen ahora una prueba jugable y su explicación en Research. Agregué una séptima etapa dedicada a la devolución del profesor, con tres casos: la última casilla ocupada, el acercamiento en un pasillo y una constelación completa.

Los siete programas compilan en el motor oficial de PuzzleScript. Los nueve casos que tienen condición de victoria cuentan con un recorrido encontrado y reproducido en ese mismo motor. La primera etapa queda como una prueba libre del cambio de luz.

La regla queda cerrada: el jugador ilumina las casillas al entrar y no puede volver sobre Light. Gana cuando no queda Dark. Si se encierra antes, puede deshacer o reiniciar. Si una Sombra ocupa el espacio que necesita, puede disiparla desde una casilla vecina con Pulso y después entrar para iluminarla.

Implementación y pruebas jugables: https://github.com/JuanchiBruzzone/Videojuegos.Aplicado

La web conserva las etapas anteriores y permite leer la explicación junto al juego. Scope queda preparado como la siguiente parte del trabajo; todavía no definí allí niveles o sistemas nuevos.

## Conclusión

El prototipado me permitió llevar cada duda a una prueba concreta y conservar las versiones para compararlas. La devolución del profesor me sirvió para detectar que la Sombra estaba explicada como idea, pero todavía dejaba una interacción sin resolver.

Con Pulso pude cerrar esa parte sin cambiar el objetivo de iluminar todo. Incluso si la Sombra ocupa la última casilla, puedo despejarla y completar el recorrido. La misma regla funciona en el caso mínimo y en los tableros completos que probé.

La idea central se mantiene: cada paso recupera luz y también cierra una posibilidad de regreso. Con estas pruebas implementadas, puedo pasar al scope y decidir cuánto de esta idea voy a desarrollar para la entrega.


## Ampliación durante el scope: sellos y compuertas

Para sumar una variación sin cambiar la regla central, agregué un sello que abre una compuerta al pisarlo. La compuerta queda abierta, pero su piso sigue oscuro hasta recorrerlo. Cada sala puede tener como máximo un sello y una compuerta.

Probé un pasillo para aislar la apertura y otra sala que la combina con la Sombra. Los dos casos tienen solución encontrada y reproducida en el motor oficial. La web reúne ocho estudios y once casos con victoria, además de la primera prueba libre. Los ocho niveles de la campaña siguen pendientes de producción.
