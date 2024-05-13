function enfrentarJefeFinal() {
    const jefeFinal = obtenerNombreJefeFinal() ;
    const decision = confirm(`Te encuentras con un ${jefeFinal}. ¿Listo para tu prueba final?`);

    if (decision) {
        mostrarMensaje('¡Felicidades has derrotado al jefe final!');
    } else {
        mostrarMensaje('La próxima vez podrás');
    }
}