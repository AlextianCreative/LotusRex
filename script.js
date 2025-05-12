const jokes = [
  "Kenapa kucing nggak bisa main komputer? Karena dia takut mouse!",
  "Beli komputer baru, eh... masih sama aja, nggak bisa ngoding.",
  "Ngopi boleh, tapi jangan sampai ngeteh di saat yang salah.",
  "Kalau internet lemot, jangan emosi... ingat, dia juga punya perasaan.",
  "Aku tidak malas... aku cuma sedang menghemat energi untuk nanti.",
  "Ketawa itu gratis, kenapa kamu hemat banget ya?",
  "Kerja keras boleh, tapi jangan lupa tidur siang kayak kucing.",
  "Hiburan terbaik? Lihat saldo sebelum gajian. Seru banget.",
  "Jangan percaya sinyal, dia suka PHP."
];

function showJoke() {
  const box = document.getElementById("joke-box");
  const random = jokes[Math.floor(Math.random() * jokes.length)];
  box.textContent = random;
}
