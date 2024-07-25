document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("#send");

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        
        const nome = document.querySelector("#nome").value.trim();
        const servico = document.querySelector("#servico").value.trim();
        const data = document.querySelector("#data").value.trim();
        const hora = document.querySelector("#hora").value.trim();

        // Verificar campos
        if (nome === "" || servico === "" || data === "" || hora === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            // Formatação da data para DD/MM/AAAA
            const dataFormatada = formatarData(data); 

            var message = `Olá, sou ${nome}. Preciso de ${servico}, se disponível no dia ${dataFormatada}, horário ${hora}.`;
            var whatsappUrl = `https://api.whatsapp.com/send?phone=5534992773769&text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');

            console.log(nome, servico, data, hora);
        }
    });

    // Formatando a data no formato DD/MM/AAAA
    function formatarData(data) {
        const dataObj = new Date(data);
        const dia = String(dataObj.getDate()).padStart(2, '0'); 
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); 
        const ano = dataObj.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
});