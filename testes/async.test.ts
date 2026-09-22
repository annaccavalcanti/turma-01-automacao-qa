import { expect, test } from 'vitest'

//uso de arrays e objetos com nomes de flores da cor rosa
const jardim = [
  { id: 1, nome: 'Peônia Cor-de-Rosa', corDeRosa: true },
  { id: 2, nome: 'Margarida Comum', corDeRosa: false },
  { id: 3, nome: 'Orquídea Rosa', corDeRosa: true },
  { id: 4, nome: 'Cravo Cor-de-Rosa', corDeRosa: true }
]

function buscarJardim(): Promise<typeof jardim> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jardim)
    }, 1000)
  })
}

//função assíncrona com async/await 
async function obterFloresCorDeRosa() {
  // O await pausa a execução aqui até a Promise responder
  const dados = await buscarJardim()

  // Manipulação do array e objetos (filtra apenas as verdadeiras)
  const apenasRosa = dados.filter(flor => flor.corDeRosa)

  // Retorna o resultado final processado
  return apenasRosa
}

test('Deve retornar apenas as opções cor-de-rosa de forma assíncrona', async () => {
  const resultado = await obterFloresCorDeRosa()

  expect(resultado).toHaveLength(3)
  expect(resultado[0].nome).toBe('Peônia Cor-de-Rosa')
  expect(resultado[1].nome).toBe('Orquídea Rosa')
  expect(resultado[2].nome).toBe('Cravo Cor-de-Rosa')
})