
const btn = document.getElementById("alterar_tema");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

const meuBotao = document.getElementById("meuBotao");

meuBotao.addEventListener("click", function() {
    alert("Botão clicado!");
});

// cria uma variável para controlar se o leitor de texto está ligado ou desligado.
// começa como false porque, ao carregar a página, o leitor ainda NÃO está ativo.
let leitorAtivo = false;

// vai buscar no HTML o botão que vai ligar/desligar o leitor de texto.
const botaoLeitor = document.getElementById("leitor_texto");

// adiciona um "ouvinte de evento" ao botão.
// isso significa: quando o usuário clicar nesse botão, o código dentro será executado.
botaoLeitor.addEventListener("click", function () {

    // inverte o valor da variável leitorAtivo.
    // se era false, vira true.
    // se era true, vira false.
    // isso é o que permite ligar e desligar o leitor com o mesmo botão.
    leitorAtivo = !leitorAtivo;

    // verifica se o leitor acabou de ser ativado.
    if (leitorAtivo) {

        // muda o texto do botão para deixar claro ao usuário
        // que o leitor está ligado e pode ser desativado.
        botaoLeitor.innerText = "Desativar Leitor de Texto";

    } else {

        // se o leitor foi desativado, muda o texto do botão novamente
        // para indicar que ele pode ser ativado.
        botaoLeitor.innerText = "Ativar Leitor de Texto";

        // Para imediatamente qualquer leitura de texto que esteja acontecendo.
        // Isso evita que o site continue falando mesmo com o leitor desligado.
        window.speechSynthesis.cancel();
    }
});

// Adiciona um evento de clique em TODO o corpo da página.
// Isso permite detectar cliques em textos, botões, títulos, parágrafos, etc.
document.body.addEventListener("click", function (evento) {

    // Se o leitor NÃO estiver ativo, o código para aqui.
    // O "return" impede que o restante da função seja executado.
    // Isso garante que o site só leia textos quando o leitor estiver ligado.
    if (!leitorAtivo) return;

    // Pega o texto do elemento que foi clicado.
    // Exemplo: se o usuário clicar em um <p>, ele pega o texto desse parágrafo.
    const texto = evento.target.innerText;

    // Verifica se realmente existe texto naquele elemento.
    // Isso evita tentar ler elementos vazios ou sem conteúdo.
    if (texto) {

        // Cria um objeto de fala com o texto capturado.
        // Esse objeto representa o que o navegador vai "falar".
        const fala = new SpeechSynthesisUtterance(texto);

        // Define o idioma da leitura como português do Brasil.
        // Isso melhora a pronúncia das palavras.
        fala.lang = "pt-BR";

        // Cancela qualquer fala anterior antes de iniciar uma nova.
        // Isso evita que várias leituras se sobreponham.
        window.speechSynthesis.cancel();

        // Inicia a leitura do texto em voz alta.
        window.speechSynthesis.speak(fala);
    }
});
