document.getElementById('')

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


