import {expect, describe, test} from 'vitest'

function login (username: string, password: string): boolean {
    return username === 'rosinha' && password === '123456';
}

test('Permitir fazer login com credenciais válidas', () => {
    const efetuandoLogin = login('rosinha', '123456')
    expect(efetuandoLogin).toBe(true)
});

describe ('Negar login com credenciais inválidas', () => {

    test('Negar login com senha incorreta', () => {
        const efetuandoLogin = login('rosinha', '1234')
        expect(efetuandoLogin).toBe(false)
    });
    
     test('Negar login com usuário incorreto', () => {
        const efetuandoLogin = login('rosa', '123456')
        expect(efetuandoLogin).toBe(false)
    });

     test('Negar login com usuário e senha incorretos', () => {
        const efetuandoLogin = login('rosa', '1234')
        expect(efetuandoLogin).toBe(false)
    });

     test('Negar login com campos vazios', () => {
        const efetuandoLogin = login('', '')
        expect(efetuandoLogin).toBe(false)
    });
})