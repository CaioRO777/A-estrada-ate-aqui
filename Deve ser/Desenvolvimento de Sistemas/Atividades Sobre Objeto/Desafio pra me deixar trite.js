/*## 🔥 Desafios Extras (Avançados)

### Desafio 1: Sistema de Biblioteca

Crie um sistema de gerenciamento de biblioteca com as seguintes especificações:

**Estrutura de Dados:**

- Um array `biblioteca` com objetos representando livros:
  - titulo
  - autor
  - anoPublicacao
  - genero
  - disponivel (boolean)
  - vezesEmprestado (número)

**Funcionalidades a implementar:**

1. `adicionarLivro(livro)` - adiciona um novo livro ao array
2. `emprestarLivro(titulo)` - procura o livro no array usando `for...of`, marca como indisponível e incrementa vezesEmprestado
3. `devolverLivro(titulo)` - procura o livro no array usando loop e marca como disponível
4. `listarDisponiveis()` - percorre o array com `for...of` e exibe apenas os livros disponíveis
5. `livroMaisPopular()` - percorre todos os livros com loop e retorna aquele com mais empréstimos
6. `buscarPorGenero(genero)` - percorre o array com `for...of`, cria um novo array vazio e adiciona os livros do gênero especificado

**Requisitos:**

- **USE APENAS `for...of` ou `for...in` para percorrer arrays**
- Trate casos onde o livro não existe
- Não permita emprestar um livro já emprestado
- Use estruturas condicionais dentro dos loops quando necessário*/


// -----------------------------
// SISTEMA DE BIBLIOTECA
// -----------------------------

let biblioteca = []; // array principal

// 1. Adicionar livro
function adicionarLivro(livro) {
    biblioteca.push(livro);
}

// 2. Emprestar livro
function emprestarLivro(titulo) {
    for (let livro of biblioteca) {
        if (livro.titulo === titulo) {

            if (!livro.disponivel) {
                console.log("❌ O livro já está emprestado!");
                return;
            }

            livro.disponivel = false;
            livro.vezesEmprestado++;
            console.log(`📕 Livro emprestado: ${livro.titulo}`);
            return;
        }
    }

    console.log("❌ Livro não encontrado!");
}

// 3. Devolver livro
function devolverLivro(titulo) {
    for (let livro of biblioteca) {
        if (livro.titulo === titulo) {

            if (livro.disponivel) {
                console.log("❌ Esse livro já está disponível!");
                return;
            }

            livro.disponivel = true;
            console.log(`📗 Livro devolvido: ${livro.titulo}`);
            return;
        }
    }

    console.log("❌ Livro não encontrado!");
}

// 4. Listar livros disponíveis
function listarDisponiveis() {
    console.log("📚 Livros disponíveis:");

    for (let livro of biblioteca) {
        if (livro.disponivel) {
            console.log(`- ${livro.titulo} (${livro.autor})`);
        }
    }
}

// 5. Livro mais popular (mais emprestado)
function livroMaisPopular() {
    if (biblioteca.length === 0) {
        console.log("❌ Nenhum livro cadastrado!");
        return;
    }

    let maisPopular = biblioteca[0];

    for (let livro of biblioteca) {
        if (livro.vezesEmprestado > maisPopular.vezesEmprestado) {
            maisPopular = livro;
        }
    }

    console.log(`🏆 Livro mais popular: ${maisPopular.titulo}, emprestado ${maisPopular.vezesEmprestado} vezes`);
}

// 6. Buscar livros por gênero
function buscarPorGenero(genero) {
    let resultado = [];

    for (let livro of biblioteca) {
        if (livro.genero === genero) {
            resultado.push(livro);
        }
    }

    if (resultado.length === 0) {
        console.log("❌ Nenhum livro encontrado nesse gênero.");
    } else {
        console.log(`📖 Livros do gênero "${genero}":`);
        for (let livro of resultado) {
            console.log("- " + livro.titulo);
        }
    }
}



// -----------------------------
// CRIAÇÃO DE LIVROS PARA TESTE
// -----------------------------

adicionarLivro({
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien",
    anoPublicacao: 1937,
    genero: "Fantasia",
    disponivel: true,
    vezesEmprestado: 0
});

adicionarLivro({
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance",
    disponivel: true,
    vezesEmprestado: 0
});

adicionarLivro({
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949,
    genero: "Distopia",
    disponivel: true,
    vezesEmprestado: 0
});


// -----------------------------
// TESTES
// -----------------------------
emprestarLivro("O Hobbit");
emprestarLivro("O Hobbit"); // já emprestado
devolverLivro("O Hobbit");
listarDisponiveis();
livroMaisPopular();
buscarPorGenero("Fantasia");
