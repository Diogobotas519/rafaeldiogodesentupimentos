// JavaScript
function changeTab(tab) {
    var tabs = ['contacto', 'canalizacoes', 'desentupimentos'];
    var url = window.location.href.split('?')[0]; // Obtém a URL da página sem parâmetros de consulta
    var params = new URLSearchParams(window.location.search);
    var existingTab = params.get('tab');
    if (existingTab !== tab) {
        window.location.href = url + '?tab=' + tab; // Adiciona o parâmetro de consulta para a aba clicada
    }
    tabs.forEach(function(tabId) {
        document.getElementById(tabId).style.display = (tabId === tab) ? 'block' : 'none';
    });
}

// Verifica se a página foi carregada com um parâmetro de aba e exibe o conteúdo correspondente
window.onload = function() {
    var params = new URLSearchParams(window.location.search);
    var tab = params.get('tab');
    if (tab === 'contacte-nos') {
        document.getElementById('contacte-nos').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    } else if (tab === 'canalizacoes') {
        document.getElementById('canalizacoes').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    } else if (tab === 'desentupimentos') {
        document.getElementById('desentupimentos').style.display = 'block';
        document.getElementById('main').style.display = 'none';
    }
};