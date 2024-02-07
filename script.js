const perguntas = [
  {
    pergunta: 'O que significa a sigla DOM em JavaScript?',
    respostas: [
      'Documento de Objeto Mínimo',
      'Modelo de Objeto Direto',
      'Modelo de Objeto de Documento'
    ],
    correta: 2
  },
  {
    pergunta:
      'Qual é o método em JavaScript usado para imprimir algo no console?',
    respostas: ['console.print()', 'console.log()', 'print()'],
    correta: 1
  },
  {
    pergunta:
      'Qual é a sintaxe correta para se referir a um arquivo de script externo chamado "script.js"?',
    respostas: [
      '<script href="script.js">',
      '<script src="script.js">',
      '<script name="script.js">'
    ],
    correta: 1
  },
  {
    pergunta:
      'Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?',
    respostas: [
      '// Comentário aqui',
      '/* Comentário aqui */',
      '# Comentário aqui'
    ],
    correta: 0
  },
  {
    pergunta: 'O que é uma função anônima em JavaScript?',
    respostas: [
      'Uma função sem nome',
      'Uma função que não pode ser chamada',
      'Uma função que retorna undefined'
    ],
    correta: 0
  },
  {
    pergunta: 'Qual é o operador de igualdade estrita em JavaScript?',
    respostas: ['==', '===', '='],
    correta: 1
  },
  {
    pergunta: 'Como se declara uma variável em JavaScript?',
    respostas: ['var', 'let', 'both var and let'],
    correta: 2
  },
  {
    pergunta: 'Qual é o resultado da expressão (10 % 3)?',
    respostas: ['3', '1', '0'],
    correta: 1
  },
  {
    pergunta: 'Qual é a função do método isNaN() em JavaScript?',
    respostas: [
      'Verifica se um número é ímpar',
      'Verifica se um número é negativo',
      'Verifica se um valor não é um número'
    ],
    correta: 2
  },
  {
    pergunta: 'Qual é a função do método parseInt() em JavaScript?',
    respostas: [
      'Converte uma string em um número inteiro',
      'Converte um número em uma string',
      'Arredonda um número para o inteiro mais próximo'
    ],
    correta: 0
  }
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
// document : faz parte da estrutura DOM que modela o documento para javascript /// querySelector é para selecionar qualquer objeto la dentro

const corretas = new Set()
const totalDePerguntas = perguntas.length //camel case depois do espaço letra sempre maiúscula
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// lop ou laço de repetição : serve para entrar em um array e para cada item do array ele vai fazer alguma coisa
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true) // <-- booleano // cloneNode função que clona o nó ( tags do html )
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute(
      'name',
      'pergunta-' + perguntas.indexOf(item)
    )
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = event => {
      const estaCorreta = event.target.value == item.correta // booleano ( true or false)
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
