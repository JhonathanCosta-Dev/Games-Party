// Exibir/ocultar o botão de rolar para o topo
window.onscroll = function() {
    let scrollButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };
  
  // Rolar para o topo
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Fechar modal ao clicar fora
  window.onclick = function(event) {
    let modal = document.getElementById('modalCadastro');
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  // Abrir o modal
  window.onload = function () {
    document.getElementById("modalCadastro").style.display = "block";
  };
  
  // Fechar o modal
  function fecharModal() {
    document.getElementById("modalCadastro").style.display = "none";
  }
  