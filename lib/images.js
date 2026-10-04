// ════════════════════════════════════════════════════════════
// 📁 IMAGES - Liste des images du bot, une différente à chaque appel
// ════════════════════════════════════════════════════════════
const botImages = [
    https://files.catbox.moe/1e5fdn.jpg
];

function randomImage() {
    return botImages[Math.floor(Math.random() * botImages.length)];
}

module.exports = { botImages, randomImage };
