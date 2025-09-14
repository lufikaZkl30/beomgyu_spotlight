// Contoh animasi kecil: scroll ke atas saat klik logo
document.querySelector("header h1").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Bisa kamu tambahin JS lain, misalnya gallery slider, dll
