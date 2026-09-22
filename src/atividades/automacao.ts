import PromptSync from "prompt-sync";

const prompt = PromptSync();

let automatizaveis: number = 0;
let naoAutomatizaveis: number = 0;

for(let i = 1; i<=5; i++) {
    const cenario: string = prompt(`Digite o ${i}° cenário `);
    const resposta: string = prompt(`É automatizável? (sim/não)`);
    resposta.toLowerCase();

    if (resposta === "sim" ) {
        console.log(`${cenario} -> Automatiza`);
        automatizaveis++
    } else if (resposta === "não" || resposta === "nao") {
        console.log(`${cenario} -> Não-Automatizar`)
        naoAutomatizaveis++
    } else {
        console.log("ocorreu um erro!")
    }
}

console.log(`Total de cenários automatizaveis: ${automatizaveis}`);
console.log(`Total de cenários não automatizaveis: ${naoAutomatizaveis}`);