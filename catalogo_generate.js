$(()=>{ // ready

    const inputArquivo = document.getElementById('arquivoCSV');
    inputArquivo.addEventListener('change', function (evento) {
        const arquivo = evento.target.files[0];
        
        lerArquivoCSV(arquivo, function (conteudo) {
            // Aqui você pode prosseguir para o próximo passo
            console.log(conteudo);

            var cols = parseCSV(conteudo);
            console.log(cols);

            var json = {
                titulo: cols[0],
                descricao: cols[1],
                link: cols[2]
            }

            console.log(json);
        });
    });

});

function parseCSV(csv) {
    /* split the data into array of lines of type */
    const csvLines = csv.split(/\r\n|\n/);
    /* loop throw all the lines a remove first part (from the start, to comma) */
    return csvLines.map(line => line.split(';'))
}

function lerArquivoCSV(arquivo, callback) {
    const leitor = new FileReader();

    leitor.onload = function (evento) {
        const conteudo = evento.target.result;
        callback(conteudo);
    };

    leitor.readAsText(arquivo);
}