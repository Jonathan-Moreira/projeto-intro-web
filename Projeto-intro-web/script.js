// const nome = 
// const idade = 
// const regiao =
// const funcao = //boolean

// SEMANA 1- Pense em alguma coisa do cotidiano que seja contável e estruturada. Por enquanto, vamos chamar esta coisa de item.
// Com esse item, nós vamos construir nossas lógicas e evoluir no projeto através das semanas. 
// Pode ser qualquer coisa que possa ser descrita com características escritas. 

// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
// Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
// 💡A média deve ser igual à soma dos itens, dividida pelo total de itens.
// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os 
// valores de variáveis booleanas criadas até aqui são verdadeiras.


const nome1 = "sona"
const nomeMaiusculo1 = nome1.toUpperCase()
const idade1 = 21
const regiao1 = "demacia"
const funcao1 = "suporte"
const teveRework1 = false
const arraySkin = ["guardia estelar" , " Dj sona"]

// console.log(` Nome: ${nomeMaiusculo1} \n Idade: ${idade1} \n Região: ${regiao1} \n Funcao: ${funcao1} \n Rework: ${teveRework1} \n Melhor skin: ${arraySkin1}`)

// //\\//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\\//


const nome2 = "senna"
const nomeMaiusculo2 = nome2.toUpperCase()
const idade2 = 25
const regiao2 = "runeterra"
const funcao2 = "atirador(a)"
const teveRework2 = false
const arraySkin2 = ["true damage", " velho oeste"]

// console.log(` Nome: ${nomeMaiusculo2} \n Idade: ${idade2} \n Região: ${regiao2} \n Funcao: ${funcao2} \n Rework: ${teveRework2} \n Melhor skin: ${arraySkin2}`)

// //\\//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\\//

const nome3 = "leBlanc"
const nomeMaiusculo3 = nome3.toUpperCase()
const idade3 = 28
const regiao3 = "noxus"
const funcao3 = "assassino(a)"
const teveRework3 = true
const arraySkin3 = ["congregacao das bruxas", " cibernetica"]

// console.log(` Nome: ${nomeMaiusculo3} \n Idade: ${idade3} \n Região: ${regiao3} \n Funcao: ${funcao3} \n Rework: ${teveRework3} \n Melhor skin: ${arraySkin3}`)

// //\\//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\\//

// SEMANA 2- 1. Crie pelo menos mais uma característica para o item que você criou. 
// Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo,
// isto é, se é um array de strings, só deve receber strings.

// Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS,

const verficarRework = (teveRework1 && teveRework2 && teveRework3);
// console.log(verficarRework)

const media = (idade1 + idade2 + idade3)
// console.log(media)



//\\//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\\//
// SEMANA 3- Transforme os itens que criamos nas últimas semanas em objetos.
// Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
// Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()
// Ao fim.


const personagens = [
    {
        nome: "Sona",
        idade: 21,
        regiao: "demacia",
        funcao: "suporte",
        teveRework: false,
        arraySkin: ["guardia estelar", "Dj sona"]
    },

    {
        nome: "Senna",
        idade: 25,
        regiao: "runeterra",
        funcao: "atirador(a)",
        teveRework: false,
        arraySkin: ["true damage", " velho oeste"]
    },

    {
        nome: "LeBlanc",
        idade: 28,
        regiao: "noxus",
        funcao: "assassino(a)",
        teveRework: true,
        arraySkin: ["congregacao das bruxas", "cibernetica"]
    }
    
]
// SEMANA 4- 
// 1. Altere o item “Adicione os novos objetos no array de objetos, 
// utilizando o push()” (item 3 da semana 3), para criar uma verificação antes de dar o push. 
// A caraterística booleana do objeto deve ser validada. Isto é, o objeto só deve ser adicionado ao array 
// se a propriedade booleana for true;

// 2. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário 
// que o item não foi adicionado, e não faça o push


const arrayPersonagens = []

// (IF PURO - feito um condição, isso foi na força do odio sem o laço)

// if(personagens[0].teveRework === true){
//     arrayPersonagens.push(personagens[0])
// }

// if(personagens[1].teveRework === true) {
//     arrayPersonagens.push(personagens[1])
// }

// if(personagens[2].teveRework === true) {
//     arrayPersonagens.push(personagens[2])
// }
//  console.log(arrayPersonagens);

// (Esse aqui foi feito de uma forma mais estruturada usando o laço)

for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].teveRework === true) {
        arrayPersonagens.push(personagens[i])
    } else {
        alert(`${personagens[i].nome} não foi adicionado`)
    }
}
console.log(arrayPersonagens);



// if (true) {
//     if (teveRework1 === false) {
//         arraySkin1.push()
//     } else {
//         console.log(`${teveRework1} campeão encontrado`)
//     } if (teveRework2 === false) {
//         arraySkin2.push()
//     } else {
//         console.log(`${teveRework3} campeão encontrado`)
//     } if (teveRework3 === true) {
        
//     }else{
//         console.log( alert`${teveRework3} campeão não foi encontrado`);
//     }
// }
// console.log(personagens, arrayPersonagens)



//\\//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\\//

//SEMANA 5- Reescrevendo o relatório da semana 2, altere a forma que a característica de array, criada no item 1 da semana 2, 
// faça um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

// Ainda no relatório, altere-o para que ele seja criado utilizando um laço.
// Ou seja, você não deve mais imprimir individualmente cada item do relatório. 
// Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, 
// e verifique se ele é exibido corretamente.

let arraysDosOjetos1 = []

// for (let i = 0; i < arraySkin1.length; i++) {
//     arraysDosOjetos1 = arraysDosOjetos1 + ',' + arraySkin1[i]
// }
// console.log(arraysDosOjetos1)


// let arraysDosOjetos2 = ""

// for (let i = 0; i < arraySkin2.length; i++) {
//     arraysDosOjetos2 = arraysDosOjetos2 + ',' + arraySkin2[i]
// }
// console.log(arraysDosOjetos2)


// let arraysDosOjetos3 = ""

// for (let i = 0; i < arraySkin3.length; i++) {
//     arraysDosOjetos3 = arraysDosOjetos3 + ',' + arraySkin3[i]
// }
// console.log(arraysDosOjetos3)

for (let i = 0; i < arraySkin.length; i++) {
    arraySkin[i].personagens
}
console.log(arraysDosOjetos1)






// SEMANA 6- 
// 1. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

function personagensRelatorio(objeto) {
    console.log(`Nome: ${objeto.nome.toUpperCase()} \n idade: ${objeto.idade1} \n ${objeto.regiao1} \n ${objeto.funcao1} \n ${objeto.teveRework1} \n ${objeto.teveRework1} \n ${objeto.teveRework1}`)
}



// 2. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto,
//  e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. 
//  Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.











//SEMANA 7- 
// 1. Crie uma página HTML, e nesta página, dê um título para sua lista de itens;
// 2. Crie um cabeçalho, uma seção principal, e um footer para a página;
// 3. Na seção principal. Crie duas divisões. Uma deve possuir um input e um botão. A outra, deve possuir sections para criar os itens da lista;
// 1. Crie uma section para cada item da lista;
// 2. Para cada um dos três itens criados deve possuir todas as informações do array de objetos. As informações devem estar elencadas como lista não ordenada. Esta tela não precisa interagir com o JavaScript, tendo seus dados escritos diretamente nos elementos.
// 3. Transforme o nome/título do item em um link para um artigo sobre este item (pode ser do google, de algum blog ou da Wikipédia)
// 💡 Recomendamos adicionar imagens a seus itens agora. Ao fazer isso, lembre-se de criar mais uma propriedade String nos seus objetos, para guardar o caminho do link até a imagem.




















































