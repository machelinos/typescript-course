"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let NivelFuerza;
    (function (NivelFuerza) {
        NivelFuerza[NivelFuerza["acuaman"] = 0] = "acuaman";
        NivelFuerza[NivelFuerza["batman"] = 1] = "batman";
        NivelFuerza[NivelFuerza["flash"] = 5] = "flash";
        NivelFuerza[NivelFuerza["superman"] = 100] = "superman";
    })(NivelFuerza || (NivelFuerza = {}));
    const fuerzaFlash = NivelFuerza.flash;
    const fuerzaSuperman = NivelFuerza.superman;
    const fuerzaBatman = NivelFuerza.batman;
    const fuerzaAcuaman = NivelFuerza.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
