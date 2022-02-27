let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://raw.githubusercontent.com/Sachu-Settan/Rose-Mwol/main/Media/Rose-Bot-Sachu-small.jpg")).buffer(), devil, 'ʀᴏꜱᴇ-ᴍᴡᴏʟ  ʙʏ ꜱᴀᴄʜᴜ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://github.com/Sachu-Settan/Rose-Mwol \n\n\ © ʀᴏꜱᴇ-ᴍᴡᴏʟꫂ⁩⁴⁰⁴⁩' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler