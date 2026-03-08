function Soma(){
    let n1 = Number(document.getElementById('ex01-num01').value);
    let n2 = Number(document.getElementById('ex01-num02').value);

    const soma = n1 + n2;

    document.getElementById('resp1').innerText ='A soma é: ' + soma;
}


function Maior(){
    let n1 = Number(document.getElementById('ex02-num01').value);
    let n2 = Number(document.getElementById('ex02-num02').value);
    const resp2 = document.getElementById('resp2');

    if(n1 > n2){
        resp2.innerText = 'O maior é: ' + n1;
    }
    else if(n1 === n2){
        resp2.innerText = 'Os números são iguais: ' + n1;
    }
    else{
        resp2.innerText = 'O maior é: ' + n2;
    }
}


function Primo() {
    let num = Number(document.getElementById('ex03-num').value);
    let resp3 = document.getElementById('resp3');
    let primo = true;

    if (num <= 1 || !Number.isInteger(num)) {
        resp3.innerText = 'Digite um número inteiro maior que 1';
        return;
    }

    for(let i=2; i<num; i++){
        if (num % i === 0) {
            primo = false;
            break;
        }
    }


    if (primo) {
        resp3.innerText = `O número ${num} é primo`;
    } else {
        resp3.innerText = `O número ${num} não é primo`;
    }
}



function Pares(){
    let n1 = Number(document.getElementById('ex04-num01').value);
    let n2 = Number(document.getElementById('ex04-num02').value);
    let resp4 = document.getElementById('resp4');

    if (n1 <= 0 || !Number.isInteger(n1) ||
        n2 <= 0 || !Number.isInteger(n2)){
    resp4.innerText = 'Digite dois números inteiros positivos';
    return;
    }

    const minimo = Math.min(n1, n2);
    const maximo = Math.max(n1, n2);
    const numPares = [];
    
    for(let i = minimo; i <= maximo; i++){
        if(i % 2 === 0){
            numPares.push(i);
        }
    }
    
    resp4.innerText = 'Números pares no intervalo: '+ numPares;
}


function fibo(){
    const n = Number(document.getElementById('ex05-num').value);
    const resp5 = document.getElementById('resp5');
    
    let anterior = 0;
    let atual = 1;
    const fib = [];

   for(let i=0; i<n; i++){
        fib.push(anterior);

        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
    

    resp5.innerText = n+' números da sequencia: '+ fib;
}


function temp(){
    let c = Number(document.getElementById('ex06-num').value);
    let resp6 = document.getElementById('resp6');
    let f = ((9/5)*c)+32;

    resp6.innerText = "A temperatura em Fahrenheit é: "+ f;
}