function calcularEsfera() {
    const raio = parseFloat(document.getElementById('raio').value);

    if (isNaN(raio)) {
        alert('Por favor, digite um raio válido.');
        return;
    }

    const comprimento = 2 * Math.PI * raio;
    const area = Math.PI * Math.pow(raio, 2);
    const volume = (4/3) * Math.PI * Math.pow(raio, 3);

    document.getElementById('comprimento').textContent = comprimento.toFixed(2);
    document.getElementById('area').textContent = area.toFixed(2);
    document.getElementById('volume').textContent = volume.toFixed(2);
}