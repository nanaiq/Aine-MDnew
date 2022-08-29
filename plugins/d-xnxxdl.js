/*
 *
 * Buatan Fokus ID
 * https://github.com/fokusdotid
 *
 * Api?
 * https://malesin.xyz
 *
 *
 */


const fetch = require('node-fetch');
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau download apa?\n\nContoh: ${usedPrefix + command} link xnxx`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!';
	try {
		let res = await (await fetch(global.API('males', '/xnxxdl', {
			url: text
		}))).json()
		if (res.status !== 200) throw res;
		let { title, image, duration, info, files } = await res;
		let caption = `
*Judul:* ${title}
*Description:* ${info}
*Durasi:* ${duration}
`.trim()
		await conn.send2ButtonImg(m.chat, image, caption, wm, 'Low', usedPrefix + 'xnxxdlvid ' + files.low, 'High', usedPrefix + 'xnxxdlvid ' + files.high, m)
	} catch (e) {
		throw e;
	}
}
handler.help = ["xnxxdl", "dlxnxx"].map(v => v + ' <url>')
handler.tags = ["downloader"]
handler.command = /^(xnxxdl|dlxnxx)$/i
handler.register = true

module.exports = handler