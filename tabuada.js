// Função para exibir a tabuada do 1 ao 10
function exibirTabuada() {
    // Loop para iterar sobre os números de 1 a 10
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabuada do ${i}:`);
        
        // Loop para multiplicar o número i pelos números de 1 a 10
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        
        // Exibe uma linha em branco para separar as tabuadas
        console.log('');
    }
}

// Chama a função para exibir a tabuada
exibirTabuada();
