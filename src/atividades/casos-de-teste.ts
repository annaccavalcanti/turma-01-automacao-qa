type CasoDeTeste = {
    id: number;
    titulo: string;
    descrição: string;
    automatizado: boolean;
};

function criarCasoDeTeste(
    id: number,
    titulo: string,
    descrição: string,
    automatizado: boolean
): CasoDeTeste {
    return {
        id,
        titulo,
        descrição,
        automatizado
    };
}

function descrever(caso: CasoDeTeste): string {
    return `Id: ${caso.id} - Título: ${caso.titulo} - Descrição: ${caso.descrição} - Automatizado: ${caso.automatizado}`;
}

function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
    caso.automatizado = true;
    return caso;
}

const primeiroCasoDeTeste = criarCasoDeTeste(
    1,
    "Realizar login",
    "Verificar se o usuário consegue realizar login",
    false
);

const segundoCasoDeTeste = criarCasoDeTeste(
    2,
    "Cadastrar usuário",
    "Verificar se é possível cadastrar um usuário",
    false
);

console.log(descrever(primeiroCasoDeTeste));

const casoAutomatizado = marcarAutomatizado(segundoCasoDeTeste);

console.log(descrever(casoAutomatizado));

const casoComErro = criarCasoDeTeste(
    "texto",
    "Teste com erro",
    "Este caso possui um erro de tipo",
    false
);