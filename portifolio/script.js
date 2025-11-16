const form = document.getElementById("formulario");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      
      document.getElementById("erro-nome").textContent = "";
      document.getElementById("erro-email").textContent = "";
      document.getElementById("erro-mensagem").textContent = "";

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      let valido = true;

      if (nome === "") {
        document.getElementById("erro-nome").textContent = "Digite seu nome.";
        valido = false;
      }
      if (email === "") {
        document.getElementById("erro-email").textContent = "Digite seu e-mail.";
        valido = false;
      }
      if (mensagem === "") {
        document.getElementById("erro-mensagem").textContent = "Digite sua mensagem.";
        valido = false;
      }

      if (!valido) return;

      
      showToast({
        title: 'Mensagem enviada',
        message: 'Obrigado! Sua mensagem foi enviada com sucesso.',
        duration: 4000
      });
      form.reset();
    });


function showToast(options) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  const icon = document.createElement('div');
  icon.className = 'icon';
  icon.textContent = '✓';

  const content = document.createElement('div');
  content.className = 'content';

  const title = document.createElement('div');
  title.className = 'title';
  title.textContent = options.title || 'Aviso';

  const message = document.createElement('div');
  message.className = 'message';
  message.textContent = options.message || '';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.setAttribute('aria-label', 'Fechar');
  closeBtn.innerHTML = '&times;';

  content.appendChild(title);
  content.appendChild(message);

  toast.appendChild(icon);
  toast.appendChild(content);
  toast.appendChild(closeBtn);

  container.appendChild(toast);

 
  const duration = typeof options.duration === 'number' ? options.duration : 3500;
  let hideTimeout = setTimeout(() => removeToast(toast), duration);

 
  closeBtn.addEventListener('click', () => {
    clearTimeout(hideTimeout);
    removeToast(toast);
  });

 
  function removeToast(el) {
    el.style.animation = 'toast-out 240ms ease forwards';
    el.addEventListener('animationend', () => {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
  }

}
