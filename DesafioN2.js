let vitorias = 100;
let derrotas = 5;
calcularResultado(vitorias, derrotas);

function calcularResultado(vitorias, derrotas) {
    let resultado = vitorias - derrotas;
    if(resultado <10){
        nivel = ("Ferro")
    }else if(resultado >10 && resultado <21){
        nivel = ("Bronze")
    }else if(resultado >20 && resultado <51){
        nivel = ("Prata")
    }else if(resultado >50 && resultado <81){
        nivel = ("Ouro")
    }else if(resultado >80 && resultado <91){
        nivel = ("Diamante")
    }else if(resultado >90 && resultado <101){
        nivel = ("Lendário")
    }else(resultado >100);{
        nivel = ("Imortal")
    }
    
    function saldoVitorias(vitorias, derrotas){
        let saldo = vitorias - derrotas;
        if(saldo <0){
            resposta = ("Derrotas")
        }else(saldo >0);{
            resposta = ("Vitórias")
        }
        console.log("O Herói tem saldo de " + Math.abs(resultado) + " " + resposta + " e está no nível " + nivel)
    }
        saldoVitorias(vitorias, derrotas)
}
