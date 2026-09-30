import { expect, test } from 'vitest'

interface Flor {
  id: number
  nome: string
  corDeRosa: boolean
}

// array 
const jardim: Flor[] = [
  { id: 1, nome: 'Peônia Cor-de-Rosa', corDeRosa: true },
  { id: 2, nome: 'Margarida Comum', corDeRosa: false },
  { id: 3, nome: 'Orquídea Rosa', corDeRosa: true },
  { id: 4, nome: 'Cravo Cor-de-Rosa', corDeRosa: true },
  { id: 5, nome: 'Rosa-Algodão-Doce Cintilante', corDeRosa: true }
]

// filter
const apenasRosa = jardim.filter(flor => flor.corDeRosa)

// map
const nomes = apenasRosa.map(flor => flor.nome)

// reduce
const quantidade = apenasRosa.reduce((total) => total + 1, 0)

// função async
async function buscarFlorPorId(id: number): Promise<Flor> {

  // simulação promise
  await new Promise(resolve => setTimeout(resolve, 100))

  // filtra as flores que têm o id procurado
  const encontradas = jardim.filter(flor => flor.id === id)

  if (encontradas.length === 0) {
    throw new Error('Flor não encontrada')
  }
  return encontradas[0]
}

// testando o map
test('Deve retornar os nomes das flores cor-de-rosa', () => {
  expect(nomes).toEqual([
    'Peônia Cor-de-Rosa',
    'Orquídea Rosa',
    'Cravo Cor-de-Rosa',
    'Rosa-Algodão-Doce Cintilante'
  ])
})

// testando o filter
test('Deve filtrar sem a Margarida Comum', () => {
  const margarida = apenasRosa.filter(flor => flor.nome === 'Margarida Comum')

  expect(margarida).toHaveLength(0)
})

// testando o reduce
test('Deve contar as flores cor-de-rosa', () => {
  expect(quantidade).toBe(4)
})

// se der certo
test('Deve buscar a flor pelo id', async () => {
  const flor = await buscarFlorPorId(1)

  expect(flor.nome).toBe('Peônia Cor-de-Rosa')
})

// se der errado
test('Deve dar erro quando o id não existe', async () => {
  await expect(buscarFlorPorId(999)).rejects.toThrow('Flor não encontrada')
})
