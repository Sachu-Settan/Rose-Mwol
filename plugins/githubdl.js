let handler = async (m, { args, usedPrefix, command }) => {

    if (!args[0]) throw 'Where Is The Username Bro?\nExample Sachu-Settan'
    if (!args[1]) throw 'Where Is The Repo??\nExample Rose-Mwol'
    
    let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
    //ByRizkyAdi
    m.reply(`waiting for compress to zip`)
    conn.sendFile( m.chat, url, 'repo.zip', null, m)
    
    }
    handler.help = ['githubdl']
    handler.tags = ['github']
    handler.command = /githubdl/i
    
    handler.limit = 5
    
    module.exports = handler
