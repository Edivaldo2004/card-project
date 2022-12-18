function inserir() {

    let nome = document.getElementById("nome").value;
    let conta = document.getElementById("conta").value;
    let agencia = document.getElementById("agencia").value;

   let imprimir_nome = document.getElementById("imprimir_nome").innerHTML = nome;
   let imprimir_conta = document.getElementById("imprimir_conta").innerHTML = conta;
   let imprimir_agencia = document.getElementById("imprimir_agencia").innerHTML = agencia;
}