// Formulario de contacto para Netlify

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const feedback = document.getElementById("form-feedback");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Estado: enviando
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";
    feedback.style.display = "none";

    const formData = new FormData(form);
    const encoded = new URLSearchParams(formData).toString();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded,
      });

      if (response.ok) {
        // Éxito
        feedback.textContent = "✓ Mensaje enviado. Te contactaremos pronto.";
        feedback.style.color = "var(--color-accent, #a8ff3e)";
        feedback.style.display = "block";
        form.reset();
        submitBtn.textContent = "Mensaje enviado";
      } else {
        throw new Error("Error en el servidor");
      }
    } catch (err) {
      // Error
      feedback.textContent = "✗ Algo salió mal. Intenta de nuevo o escríbenos directamente.";
      feedback.style.color = "#ff6b6b";
      feedback.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar mensaje \u00a0 ->";
    }
  });
});