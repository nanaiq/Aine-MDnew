let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [085842769268]
│ •  [081227250948]
│ •  [085641476033] [Dana+Gopay]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
