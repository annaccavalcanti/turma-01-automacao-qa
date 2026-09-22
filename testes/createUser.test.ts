import {expect, test} from 'vitest'

interface User {
    nome: string;
    idade: number;
}

function createUser(nome: string, idade: number): User {
    return {nome, idade}
}

test('Criar um usuário com nome e idade', () => {

    const user = createUser('Carolina', 21)

    expect(user).toEqual({nome: 'Carolina', idade: 21});
    expect(user.nome).toBe('Carolina')
})