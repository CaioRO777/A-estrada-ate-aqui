import React, { useState } from 'react'

const cartoes = [
    { pergunta: "O que o useState faz?", resposta: "Guarda a 'memória' do componente e avisa o React para atualizar a tela." },
    { pergunta: "Para que serve o .map() no React?", resposta: "Para transformar uma lista de dados em elementos visuais (HTML)." },
    { pergunta: "Qual a diferença entre chaves {} e parênteses () no JSX?", resposta: "{} é para usar JavaScript dentro do HTML. () agrupa várias linhas de HTML no return." }
];

function AppdeFlashcards() {

    const [indiceAtual, setIndiceAtual] = useState(0);
    const [virado, setVirado] = useState(false);

    function virarCartao() {
        setVirado(!virado);
    }

    function proximoCartao() {

        if (indiceAtual < cartoes.length - 1) {
            setIndiceAtual(indiceAtual + 1);
            setVirado(false);
        } else {
            alert("Prabéns!! Você terminou os estudos de hoje! ");
        }
    }

    const cartaoAtual = cartoes[indiceAtual];

    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Meus Flashcard de React</h2>

            {/* O Nosso Cartão */}
            <div onClick={virarCartao}
                style={{
                    border: '2px solid #333',
                    borderRadius: '10px',
                    padding: '40px',
                    margin: '20px auto',
                    maxWidth: '350px',
                    cursor: 'pointer', //Muda o mouse para a "Mãozinha"
                    backgroundColor: virado ? '#e0f7fa' : '#fff9c4', // Muda a cor de fundo se virar
                    minHeight: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                {/* Aqui acontece a mágica da Renderização Condicional */}
                {/* Lemos assim: Está virado? Se sim (?), mostra a resposta. Se não (:), mostra a pergunta. */}
                <h3>{virado ? cartaoAtual.resposta : cartaoAtual.pergunta}</h3>

                <p style={{ fontSize: '12px', color: '#666', marginTop: '20px' }}>
                    (Clique no cartão para virar)
                </p>
            </div>
            {/* Botão para avançar */}
            <button onClick={proximoCartao} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                Próximo Cartão ➔
            </button>
            {/* Mostra o progresso */}
            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
                Cartão {indiceAtual + 1} de {cartoes.length}
            </p>
        </div>
    )
}

export default AppdeFlashcards
