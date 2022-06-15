let eu = 'Layla'
let amigo = 'Lucas'

let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante"))
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrao"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

let precoErvilha = parseFloat(prompt("Digite o valor da ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

let precoArroz = parseFloat(prompt("Digite o valor do arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

let precoFeijao = parseFloat(prompt("Digite o valor do feijao"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

let precoVinho = parseFloat(prompt("Digite o valor do vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

let macarrao = precoMacarrao * quantidadeMacarrao
let refrigerante = precoRefrigerante * quantidadeRefrigerante
let ervilha = precoErvilha * quantidadeErvilha
let arroz = precoArroz * quantidadeArroz
let feijao = precoFeijao * quantidadeFeijao
let vinho = precoVinho * quantidadeVinho

total = macarrao + refrigerante + ervilha + arroz + feijao + vinho

alert(`Valor total das compras: ${total}`)

if(total % 2 === 0){
   alert (`${eu} pagara = ${total / 2 - vinho} \r\n ${amigo} pagara = ${total / 2 + vinho}`)
}else{
   alert (`${eu} pagara = ${total / 2} \r\n ${amigo} pagara = ${total / 2}`)
  }