let handler = m => m

handler.before = async function (m) {
   if (m.sender.startsWith('91' || '91')) {
   	global.db.data.users[m.sender].banned = true
    await conn.updateBlockStatus(m.sender, "block") // hapus kalau ga mau pasang
   }
   
   if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
    await conn.updateBlockStatus(m.sender, "block") // hapus kalau ga mau pasang
   }
 }

module.exports = handler
