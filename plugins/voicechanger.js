
const fs = require('fs')
const { exec } = require('child_process')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
        let q = m.quoted ? { message: { [m.quoted.mtype]: m.quoted } } : m
        let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
        let set
        if (/supereq/.test(command)) set = 'blown blown|superequalizer=1b=10:2b=10:3b=1:4b=5:5b=7:6b=5:7b=2:8b=3:9b=4:10b=5:11b=6:12b=7:13b=8:14b=8:15b=9:16b=9:17b=10:18b=10[a];[a]loudnorm=I=-16:TP=-1.5:LRA=14" -ar 48k'
        if (/bass/.test(command)) set = '-af equalizer=f=94:width_type=o:width=2:g=30'
        if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
        if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrape/.test(command)) set = '-af volume=12'
        if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reverse/.test(command)) set = '-filter_complex "areverse"'
        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (/audio/.test(mime)) {
            let media = await conn.downloadAndSaveMediaMessage(q)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) throw `_*Error!*_`
                let buff = fs.readFileSync(ran)
                conn.sendFile(m.chat, buff, ran, null, m, /vn/.test(args[0]), { quoted: m, mimetype: 'audio/mp4' })
                fs.unlinkSync(ran)
            })
        } else throw `Reply to the vn/audio you want to change with a caption *${usedPrefix + command}*`
    } catch (e) {
        throw e
    }
}
handler.help = ['bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'supereq', 'robot', 'slow', 'smooth', 'tupai'].map(v => v + ' [vn]')
handler.tags = ['audio']
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|squirrel|chipmunk|supereq)$/i

module.exports = handler

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
