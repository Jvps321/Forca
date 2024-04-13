const palavra = document.getElementById("palavra");
const btn1 = document.querySelector("button");
const resposta = document.getElementById("resposta");
const personagem = document.getElementById("personagem");
const historico = document.querySelector(" p");

let lista;
let renova = []
let revela;
let contador = 1

function pegaEscrita(){
    
    lista = palavra.value.split("")
    resposta.focus()
    renova = []
    console.log(lista)
    personagem.src = `./img/0.png`
    contador = 1
    palavra.type = "text";
    palavra.value = ""
    for(let i = 0; i<lista.length; i++){
        if(lista[i] == " "){
            palavra.value += " | "
        }else{

            palavra.value += " _ "
        }
    }
    historico.innerHTML = ""
}

function oi(){
    let verdadeiro = false
    revela = ""

    lista.forEach((element, i) => {
        
        if(element == resposta.value){
            

            if(renova[i] !== lista[i]){
                console.log(renova)
                console.log(lista)
                console.log("********")
                
                renova[i] = lista[i]
                
                console.log(renova)
                console.log(lista)
                console.log("|||||||||")
                revela += " " + renova[i]
                palavra.value = revela
                verdadeiro = true
            }
            
            
            
        }else{
            if(element == " "){
                renova[i] = " | "
            }else{
                if(renova[i] !== lista[i]){
                    renova[i] = " _ "
                }
            }
            revela += " " + renova[i]
            //console.log(renova)
            palavra.value = revela
        }
        
        console.log(verdadeiro)
    });
    if(verdadeiro == false){
        personagem.src = `./img/${contador}.png`
        contador++
    }
    historico.innerHTML += resposta.value + ","
    resposta.focus()
    resposta.value = ""
    if(contador > 6){
        
        
        palavra.focus()
    }
}

function focusPalavra(){
    contador = 1
    palavra.value = ""
    palavra.type = palavra.type = "password"
}
