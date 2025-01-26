
// Função para exibir a aba correspondente
function showTab(tabId) {
    // Oculta todas as seções de treino
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove a classe 'active' de todas as abas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Mostra o conteúdo da aba selecionada
    document.getElementById(tabId).classList.add('active');

    // Adiciona a classe 'active' à aba selecionada
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}




document.getElementById("enviarWhatsApp").addEventListener("click", function () {
    let treinoAtivo = "";
    let treinoAtivoID = ""; // Para pegar o ID do treino ativo

    // Detectar o treino ativo (ID e nome do treino)
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        if (tab.classList.contains("active")) {
            treinoAtivoID = tab.id; // ID do treino ativo (ex: treinoA, treinoB, ...)
            if (treinoAtivoID === "treinoA") {
                treinoAtivo = "A - Quadríceps e Panturrilha";
            } else if (treinoAtivoID === "treinoB") {
                treinoAtivo = "B - Peito, Ombro e Tríceps";
            } else if (treinoAtivoID === "treinoC") {
                treinoAtivo = "C - Posteriores de Coxa, Glúteos e Panturrilha";
            } else if (treinoAtivoID === "treinoD") {
                treinoAtivo = "D - Costas e Bíceps";
            } else if (treinoAtivoID === "treinoE") {
                treinoAtivo = "E - Pernas Completas";
            }
        }
    });

    // Obter a data e o dia da semana
    let data = new Date();
    let dia = data.toLocaleDateString(); // Formato padrão de data, ex: 25/01/2025
    let diaSemana = data.toLocaleString("pt-BR", { weekday: "long" }); // Ex: sábado

    // Obter todos os exercícios do treino ativo (referenciar o treino ativo dinamicamente)
    const exercicios = document.querySelectorAll(`#${treinoAtivoID} .exercicio`);

    // Coletar informações dos exercícios
    let treinoInfo = "";
    exercicios.forEach((exercicio, index) => {
        const nomeExercicio = exercicio.querySelector("header h3").textContent;
        const seriesInputs = exercicio.querySelectorAll(".series-group input");
        const repsInputs = exercicio.querySelectorAll(".reps-group input");
        const pesoInputs = exercicio.querySelectorAll(".peso-group input");
        const comentario = exercicio.querySelector("textarea").value;

        // Coletar valores das séries, repetições e peso
        const seriesValues = Array.from(seriesInputs).map(input => input.value.trim()).filter(val => val).join(" | ");
        const repsValues = Array.from(repsInputs).map(input => input.value.trim()).filter(val => val).join(" | ");
        const pesoValues = Array.from(pesoInputs).map(input => input.value.trim()).filter(val => val).join(" | ");

        // Adicionar o exercício ao treinoInfo
        treinoInfo += `${nomeExercicio} - Séries: ${seriesValues} - Reps: ${repsValues} - Peso: ${pesoValues} - Comentários: ${comentario}\n`;
    });

    // Montar a mensagem
    let mensagem = `Treino ${treinoAtivo} - Dia: ${diaSemana}, ${dia}\n\n${treinoInfo}`;

    // Enviar a mensagem para o WhatsApp
    const url = `https://wa.me/?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
});









