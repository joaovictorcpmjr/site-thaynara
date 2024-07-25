document.getElementById('sendf').addEventListener('click', function () {
    var nome = document.getElementById('nomef').value;
    var nota = document.getElementById('nota').value;
    var opniao = document.getElementById('opniao').value;

    if (nome && nota && opniao) {
        var feedback = {
            id: Date.now(),
            nome: nome,
            nota: nota,
            opniao: opniao
        };

        // Obter os feedbacks do localStorage
        var feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

        // Adicionar o novo feedback
        feedbacks.push(feedback);

        // Salvar novamente no localStorage
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

        // Adicionar o feedback ao container
        adicionarFeedbackAoContainer(feedback);

        // Limpar os campos do formulário
        document.getElementById('nomef').value = '';
        document.getElementById('nota').value = '';
        document.getElementById('opniao').value = '';

        // Fechar o modal
        $('#agendaModal').modal('hide');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Validação da nota
function validarNota(input) {
    var value = input.value;
    if (value < 0) {
        input.value = 0;
    } else if (value > 5) {
        input.value = 5;
    }
}

// Adicionar um feedback ao container
function adicionarFeedbackAoContainer(feedback) {
    var feedbackCard = document.createElement('div');
    feedbackCard.className = 'card feedback-card';
    feedbackCard.id = feedback.id;
    feedbackCard.innerHTML = `
        <div class="card-body feedcard">
            <h5 class="card-title">Cliente: ${feedback.nome}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Nota: ${converterNotaEmEstrelas(feedback.nota)}</h6>
            <p class="card-text">Opinião: ${feedback.opniao}</p>
        </div>
    `;
    document.getElementById('feedbackContainer').appendChild(feedbackCard);
}

// Função para converter nota em estrelas
function converterNotaEmEstrelas(nota) {
    var estrelas = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= nota) {
            estrelas += '<i class="fas fa-star"></i>';
        } else {
            estrelas += '<i class="far fa-star"></i>';
        }
    }
    return estrelas;
}

// Resetar o localStorage
function resetarLocalStorage() {
    localStorage.clear();
    // Também pode limpar a interface do usuário, se necessário
    document.getElementById('feedbackContainer').innerHTML = '';
}

// Carregar feedbacks do localStorage ao carregar a página
window.onload = function () {
    var feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.forEach(function (feedback) {
        adicionarFeedbackAoContainer(feedback);
    });
}


