# Piso negro fijo

El piso negro no se puede pisar ni pintar. Tampoco cuenta para completar el nivel. Es distinto del piso azul oscuro, que sí se puede recorrer y todavía espera luz.

La primera sala pone un bloque negro en el centro. Obliga a rodearlo y permite ver que la victoria no exige pintarlo. La siguiente combina ese desvío con el teleporter.

En PuzzleScript uso un objeto separado, `Void`, en la capa de colisión. No lleva `Dark`, por lo que queda fuera de la cuenta de casillas pendientes.

La forma del piso pasa a ser otra herramienta para diseñar los niveles: puedo cortar atajos y separar recorridos sin sumar una acción al jugador.
