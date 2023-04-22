interface IUser {
    modulo: number;
    fecha: string;
    tipoPersona: number;
    transferencia: boolean;
}
function Ejercicio1() {
    return {
        /*
            Construya un algoritmo con JavaScript” para las estadísticas de atención de una
            universidad teniendo en cuenta los siguientes requisitos:
            1. Hay dos módulos de atención: terminal para llamada telefónica y oficina.
            2. El sistema brinda las estadísticas de todo el proceso de atención:
            • Cantidad de usuarios atendidos.
            • Atendidos por día y especificación por segmento (Estudiante – docente) en
            cada uno de los módulos de atención.
            • Se permite trasferir de módulo de atención y se debe generar estadística de
            esta trasferencia.

        */
        p1: () => {
            //Usuarios atendidos inicia en 0
            const users: IUser[] = [];
            //Tipos de modulos aceptados 99 para salir
            const modulos: number[] = [1, 2, 99];
            //Tipos de persona 1-docente, 2-estudiante
            const tiposPersona: number[] = [1, 2];
            //Optimizacion de codigo
            function filterUser(modulo: number, tipo: number): number {
                return users.filter(val => val.modulo === modulo && val.tipoPersona === tipo).length;
            }
            do {
                //Eliminar consola actual
                console.clear();
                //usuarios atendidos
                console.log(`Usuarios atendidos: ${users.length}`);
                //Usuarios atendidos por modulo y usuario
                console.log(`Oficina:\nEstudiantes: ${filterUser(1, 2)} - Docentes ${filterUser(1, 1)}\nTelefono:\nEstudiantes: ${filterUser(2, 2)} - Docentes ${filterUser(2, 1)}`);
                //Tipo de modulo 99 para salir
                const modulo = parseInt(prompt("Seleccione módulo a usar:\n1: Oficina\n2: Telefono") ?? '0');
                //Si modulo es 99 se sale del programa
                if(modulo === 99) break;
                //Fecha actual
                const fecha = new Date().toJSON().slice(0, 10);
                //Tipo de persona
                const tipoPersona = parseInt(prompt("Usted es:\n1: Docente\n2: Estudiante") ?? "0");
                //Validacion de modulos y tipos
                if (!modulos.includes(modulo) || !tiposPersona.includes(tipoPersona)) {
                    console.log("Opción inválida");
                    continue;
                }
                //Transferencia por modulo telefono
                let transferencia = false;
                //Pregunta si desea transferir
                if (modulo === 1) {
                    const trans = parseInt(prompt("Desea transferir a teléfono?\n1: Sí\n2: No") ?? "0");
                    if (trans === 1) transferencia = true;
                }
                //Se guardan en users
                users.push({ modulo, fecha, tipoPersona, transferencia });
            } while (true);
            console.log(users);
            return true;
        }
    }
}