/*### Exercício 3: Sistema de Login Simples

Crie um objeto `usuario` com:

- nome
- email
- senha
- tentativasRestantes (inicialmente 3)

**Tarefas:**

1. Crie uma função `fazerLogin(senhaDigitada)` que:
   - Compare a senha digitada com a senha do objeto
   - Se estiver correta, exiba "Login realizado com sucesso!"
   - Se estiver incorreta, diminua as tentativas restantes
   - Exiba quantas tentativas ainda restam
   - Se as tentativas chegarem a zero, exiba "Conta bloqueada!"

---*/

let usuario = [
    {nome: "Carlos", email: "carlos@gmail.com", senha: 3445, tentativasRestantes: 3}

]

function fazerLogin (senhaDigitada){
    let user = usuario[0];

    if (user.tentativasRestantes === 0){
        console.log ("Conta Bloqueada!");
        return;
    }

    if (senhaDigitada === user.senha){
        console.log ("Login realizado com sucesso!");
        return;
    }
    user.tentativasRestantes--;

    console.log ("Senha incorreta! Tentativas restantes:", user.tentativasRestantes);

    if (user.tentativasRestantes === 0){
        console.log ("Conta Bloqueada!");
    }
}