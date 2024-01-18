// var titulo = document.querySelector("h1");
// titulo.innerHTML = "jogo do número secreto";
// paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um numero entre 1 e 100 ";
var listaNumerosSorteados  = [];
var valaorMaxNumeroAleatorio= 100;
var tentativas =1;
var numeroSecreto = GerarNumeroAleatorio();
var tentativas = 1;



MensagemInicial();
function NovoJogo(){
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    document.querySelector("#Chutar").removeAttribute('disabled');
    LimparCampo();
    tentativas=1
    numeroSecreto = GerarNumeroAleatorio();
    MensagemInicial();

}


function MensagemInicial(){
    modificarCampo(".titulo","jogo do número secreto");
    modificarCampo("p",`Escolha um numero entre 1 e ${valaorMaxNumeroAleatorio}`);

}

function modificarCampo(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(tag, "Brazilian Portuguese Female", {rate:1.2});
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}



function VerificarChute(){

  let chute = document.querySelector("input").value;

if(chute == numeroSecreto){
    modificarCampo(".titulo","Acertou" + `${tentativas>1? "tentativas": "tentativa" }: ${tentativas}`);
    modificarCampo("p",`Acertou o numero segreto ${numeroSecreto}`);

    document.querySelector("#reiniciar").removeAttribute('disabled');
    document.querySelector("#Chutar").setAttribute("disabled", "true");
}else if(chute > numeroSecreto ){
    modificarCampo(".titulo","Errou");
    ++tentativas
    modificarCampo("p",`O numero segreto é Menor. ${tentativas>1? "tentativas": "tentativa" }: ${tentativas}`);
  
    

}else {
    modificarCampo(".titulo","Errou");
    ++tentativas
    modificarCampo("p",`O numero segreto é Maior. ${tentativas>1? "tentativas": "tentativa" }: ${tentativas}`);

}
LimparCampo();

}

function LimparCampo(){
    chute = document.querySelector("input").value = 0;
}

function GerarNumeroAleatorio(){
    let numeoroEscolhido = parseInt( Math.random() * valaorMaxNumeroAleatorio + 1 );
    let quantidadeDeElementosNaLista= listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == valaorMaxNumeroAleatorio){
        listaNumerosSorteados= [];
    }
     if(  listaNumerosSorteados.includes(numeoroEscolhido)){
        GerarNumeroAleatorio();
     }else{
        listaNumerosSorteados.push(numeoroEscolhido);
        return numeoroEscolhido;
     }
}