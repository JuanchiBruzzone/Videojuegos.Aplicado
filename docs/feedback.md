# Pasos de Luz — Feedback y seguimiento

Juan Ignacio Bruzzone · Diseño de Juegos Aplicado

## Objetivos

- Comprobar que se entiende por qué no se puede volver sobre la luz.
- Observar si una pista indirecta alcanza para empezar a explorar cada mecánica.
- Revisar si las salas exigen planificar varios pasos sin depender de ensayo ciego.
- Comprobar la lectura del sello, la compuerta, las patrullas y el salto A → B.
- Encontrar puntos donde la dificultad sube demasiado o un nivel se vuelve repetitivo.

## Comentarios y ajustes

| ID | Área | Comentario | Cambio aplicado | Versión | Estado |
| --- | --- | --- | --- | --- | --- |
| F01 | Inicio | El primer contacto necesita dejar espacio para entender el movimiento y el piso. | Dos recorridos breves antes de la primera sala con decisiones. | 1.1.0 | Implementado |
| F02 | Tutorial | La explicación junto al tablero anticipa demasiado la respuesta. | Cinco pantallas de texto en español; las pistas sugieren qué observar y los controles siguen visibles. | 1.1.0 | Implementado |
| F03 | Recorridos | Un pasillo más largo no alcanza para aumentar la dificultad. | Salas con bifurcaciones y alternativas que dejan casillas sin alcanzar; crece la planificación necesaria. | 1.1.0 | Implementado |
| F04 | Sombra y Pulso | Hace falta distinguir despejar una casilla de pintarla, y aprender a leer más de una patrulla. | Primera Sombra en una sala pequeña; luego dos patrullas en recorridos mayores. Pulso conserva el piso oscuro. | 1.1.0 | Implementado |
| F05 | Sello y compuerta | Si el sello está en un pasillo obligatorio, abrir la compuerta se vuelve automático. | Sellos alejados y salas abiertas; hay que conservar el acceso a la compuerta después de activar la marca. | 1.1.0 | Implementado |
| F06 | Teleporter | El salto necesita poner a prueba el orden del recorrido. | A aparece en una sala con otras decisiones; viajar antes de completar ese sector deja luz pendiente. B inicia otra sala que también exige planificación. | 1.1.0 | Implementado |
| F07 | Piso negro | El obstáculo tiene que cambiar las rutas disponibles. | Huecos que cortan recorridos y obligan a planificar los accesos; después se combinan con el salto y las patrullas. | 1.1.0 | Implementado |
| F08 | Cierre | El final necesita exigir todas las reglas aprendidas. | Dos sectores, 46 casillas transitables, sello, compuerta, salto, piso negro y tres Sombras distribuidas entre ambos sectores. | 1.1.0 | Implementado |
| F09 | Controles | Continuar una pista con Espacio no debería gastar un Pulso ni adelantar la partida. | La pantalla bloquea el movimiento; Enter o Espacio la cierran y devuelven el foco al tablero. | 1.1.0 | Verificado en pruebas de interfaz |

## Qué comprobar en la próxima ronda

| Pregunta | Qué registrar |
| --- | --- |
| ¿Se entiende el objetivo sin una explicación adicional? | Nivel y momento donde surge la duda; palabras usadas por quien juega. |
| ¿La pista orienta sin resolver el puzzle? | Qué acción prueba primero y si necesita ayuda adicional. |
| ¿La Sombra se lee con tiempo para planificar? | Posición de la patrulla y acción que generó la confusión. |
| ¿Se reconoce que el salto es de ida? | Si deja casillas pendientes antes de viajar y cómo interpreta el resultado. |
| ¿Dónde se concentra la frustración? | Nivel, intentos, reinicios, deshacer y motivo de abandono, si ocurre. |
| ¿El cierre exige demasiado de golpe? | Diferencia entre la experiencia de las salas 14, 15 y 16. |

Cada entrada nueva debe identificar la versión, el nivel, el dispositivo o navegador, el problema, los pasos para reproducirlo y la decisión de desarrollo. Cuando un comentario venga de una persona, se conserva su nombre y su formulación junto al cambio correspondiente.
