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

let fetch = require('node-fetch');
let handler = async (m, { conn, text }) => {
	if (!text) throw 'url salah';
	m.reply(wait)
	await conn.sendButtonVid(m.chat, text, 'Awas dosa kakak ini banyakk ><', wm, 'menu', '.menu', m)
}
handler.command = /^xnxxdlvid((i|e)o)?$/i
handler.limit = true

module.exports = handler