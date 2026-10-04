const config = require('../config');

// ════════════════════════════════════════════════════════════
// 🔥 KAYDO BOT V1 — STYLE PERSONNALISÉ
// ════════════════════════════════════════════════════════════

function frame(title, lines) {
    const list = Array.isArray(lines) ? lines : [lines];

    const body = list
        .filter(l => l !== undefined && l !== null && l !== '')
        .map(l => `┃🔹 ${l}`)
        .join('\n');

    return `╭━━〔 ${title} 〕━━┈⊷
${body}
╰━━━━━━━━━━━━━━━━━━━┈⊷`;
}


// ════════════════════════════════════════════════════════════
// 🤖 STYLE PRINCIPAL DU BOT
// ════════════════════════════════════════════════════════════

function siddTechx(title, value, status) {
    const lines = [];

    if (value !== undefined && value !== null && value !== '') {
        lines.push(`${title} : ${value}`);
    }

    if (status !== undefined && status !== null && status !== '') {
        lines.push(`STATUS : ${status}`);
    }

    return `\n${frame(config.BOT_NAME || 'KAYDO BOT V1', lines)}\n`;
}


// ════════════════════════════════════════════════════════════
// 📦 BOX
// ════════════════════════════════════════════════════════════

function box(title, lines) {
    return frame(title, lines);
}


// ════════════════════════════════════════════════════════════
// ✅ SUCCESS
// ════════════════════════════════════════════════════════════

function success(text) {
    return frame('SUCCESS', text);
}


// ════════════════════════════════════════════════════════════
// ❌ ERROR
// ════════════════════════════════════════════════════════════

function error(text) {
    return frame('ERROR', text || 'UNE ERREUR EST SURVENUE');
}


// ════════════════════════════════════════════════════════════
// ⚠️ WARNING
// ════════════════════════════════════════════════════════════

function warning(text) {
    return frame('WARNING', text);
}


// ════════════════════════════════════════════════════════════
// ℹ️ INFO
// ════════════════════════════════════════════════════════════

function info(text) {
    return frame('INFO', text);
}


// ════════════════════════════════════════════════════════════
// 📜 MENU
// ════════════════════════════════════════════════════════════

function menu(title, lines) {
    return frame(title, lines);
}


module.exports = {
    siddTechx,
    frame,
    box,
    success,
    error,
    warning,
    info,
    menu
};
