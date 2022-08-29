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
	if (!text) throw `uhm.. mau cari apa?\n\nContoh: ${usedPrefix + command} bokep🐒`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!\nawas jangan nonton beginian ya dek, nanti aku bilangin ke ibu kamu loh ><';
	try {
		let res = await (await fetch(global.API('males', '/xnxxsearch', {
			q: text,
		}))).json()
		if (res.status !== 200) throw res;
		let rows = res.result.map(v => ({
			title: v.title,
			description: v.info,
			rowId: usedPrefix + 'xnxxdl ' + v.link
		}));
		let buttons = {
			buttonText: 'Dosa Di Tanggung Sendiri!',
			description: '\nhayolohh dosa kau bang\n\nlain kali jangan gitu ya banh🐒',
			footerText: 'barang siapa yg sering melakukan onani, mohon tobatlah kalian!'
		}
		await conn.sendListM(m.chat, buttons, rows, m)
	} catch (e) {
		console.error(e);
		throw e;
	}
}
handler.help = ["xnxx", "xnxxsearch"].map(v => v + ' <query>')
handler.tags = ["downloader"]
handler.command = /^xnxx(s?earch)?$/i

handler.register = true

module.exports = handler