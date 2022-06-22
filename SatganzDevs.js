require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//Detect\\
let bad = JSON.parse(fs.readFileSync('./storage/bad.json'));
let salam = JSON.parse(fs.readFileSync('./storage/salam.json'));
let done = JSON.parse(fs.readFileSync('./storage/done.json'));
//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
/*-----[⬇️FUNCTIONAL]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
  if(time2 < "23:59:00"){
ucapanWaktu = 'Good night'
ucapanlog = 'Sudah malam sebenernya bot ngantuk mau turu💤'
    timeEmo = '🌃'}
  if(time2 < "19:00:00"){
    ucapanWaktu = 'Good afternoon'
ucapanlog = 'Sudah magrib saatnya solat magrib woi'
    timeEmo = '🌆'}
  if(time2 < "18:00:00"){
    ucapanWaktu         = 'Good afternoon'
    ucapanlog = 'Sudah ashar Jangan lupa loh' 
    timeEmo = '🌇'}
  if(time2 < "15:00:00"){
    ucapanWaktu         = 'Good afternoon'
    ucapanlog = 'Panas² enaknya mangan mas'
    timeEmo = '🌞'}
  if(time2 < "11:00:00"){
    ucapanWaktu         = 'Good morning'
    ucapanlog = 'Selamat pagi owner'
    timeEmo = '🌅'}
  if(time2 < "05:00:00"){
    ucapanWaktu         = 'Good night'
    ucapanlog = 'Sahurr.... ³'
    timeEmo = '🌃' }  

var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
 thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)


/*-----[⬇️Module Export]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
module.exports = SatDevs = async (SatDevs, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await SatDevs.decodeJid(SatDevs.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await SatDevs.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
	    let stgnz = flaming
	
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            SatDevs.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` ${global.ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/thumb.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            SatDevs.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` ${global.ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Media/thumb.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: m})
        }
	
	//[Toxic Detect]
if (bad.includes(body)) {
tos = ['Astaghfirullah','Heh mulut jaga','Gapernah diajarin cara ngomong?','Dih🤢','Toxic teross']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin) 
}
if (salam.includes(body)) {
	let buttons = [
{ buttonId: 'product', buttonText: { displayText: 'List Product' }, type: 1 },
{ buttonId: 'payment', buttonText: { displayText: 'Payment' }, type: 1 }
                    ]
                    await SatDevs.sendButtonText(m.chat, buttons, `Waalaikumsalam ${pushname} n\n\ Ada Yang Bisa Saya Bantu?`, SatDevs.user.name, m)
                }
if (done.includes(body)) {
musek = fs.readFileSync('./Media/vn/Gojo.mp3')
if (!isMedia) return replay(`Reply Video/Image With Caption ${prefix + command}`)
reply(mess.proses)
SatDevs.sendMessage(m.chat, {audio: musek, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
        //Public & Self\\
        if (!SatDevs.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            SatDevs.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	      //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
					SatDevs.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./Media/vn/${anju}.mp3`)
					SatDevs.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/image/${anjh}.jpg`)
					SatDevs.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/vid/${anjh}.mp4`)
					SatDevs.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: SatDevs.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, SatDevs.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        SatDevs.ev.emit('messages.upsert', msg)
        }
	    
	switch(command) {
		case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                SatDevs.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                SatDevs.public = false
                reply('Successful Change To Self Usage')
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await SatDevs.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎀Menu🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 Satganz DevsHERE🎉 」\n\n${text}`
                      SatDevs.send5ButImg(i, txt, SatDevs.user.name, global.thumb, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎀Menu🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 Satganz DevsHERE 🎉」\n\n${text}`
                      SatDevs.send5ButImg(yoi, txt, SatDevs.user.name, global.thumb, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `🐦 @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━🐦 *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🐦 *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                SatDevs.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `💫 *Name :* ${nama}\n💫 *User :* @${i.split('@')[0]}\n💫 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 SatDevs.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await SatDevs.groupMetadata(i)
                     teks += `💫 *Name :* ${metadata.subject}\n💫 *Owner :* @${metadata.owner.split('@')[0]}\n💫 *ID :* ${metadata.id}\n💫 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n💫 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 SatDevs.sendTextWithMentions(m.chat, teks, m)
             }
             break
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                SatDevs.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                SatDevs.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                SatDevs.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `💫 *Name :* ${i.nama}\n💫 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
            case 'list': case 'p': case 'bg': case 'bro': case 'cuy': {
            	txt=`Halo ${pushname}👋😷 n\ n\ Terimakasih Telah Menghubungi ${namatoko}`
            	let btn = [{
                                urlButton: {
                                    displayText: 'Github',
                                    url: `${github}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Website',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'product'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Payment',
                                    id: 'payment'
                                }
                            }]
                      let txt = `「 ${namatoko}HERE 」\n\n${text}`
                      SatDevs.send5ButImg(from, txt, SatDevs.user.name, global.thumb, btn)
		}
            break
                case 'product': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname} - ${ucapanWaktu}`,
                    description: `Choose What You Want 😊\n\n`,
                    buttonText: "MENU",
                    footerText: `${global.footer}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "List Product",
								"rows": [
									{
										"title": `${global.produk1}`,
										"description": ``,
										"rowId": `${prefix}pepeg1`
									}
								]
							},
							{
								"title": "Hot",
								"rows": [
									{
										"title": `${global.produk2}`,
										"description": ``,
										"rowId": `${prefix}pepeg2`
									},
									{
										"title": `${global.produk3}`,
										"description": ``,
										"rowId": `${prefix}pepeg3`
										},
									{
										"title": `${global.produk4}`,
										"description": ``,
										"rowId": `${prefix}pepeg4`
										},
									{
										"title": `${global.produk5}`,
										"description": ``,
										"rowId": `${prefix}pepeg5`
									},
									{
										"title": `${global.produk6}`,
										"description": ``,
										"rowId": `${prefix}pepeg6`
									},
									{
										"title": `${global.produk7}`,
										"description": ``,
										"rowId": `${prefix}pepeg7`
									},
									{
									     "title": `${global.produk8}`,
										"description": ``,
										"rowId": `${prefix}pepeg8`
									},
									{
									"title": `${global.produk9}`,
										"description": ``,
										"rowId": `${prefix}pepeg9`
									},
									{
									"title": `${global.produk10}`,
										"description": ``,
										"rowId": `${prefix}pepeg10`
									},
									{
									"title": `${global.produk11}`,
										"description": ``,
										"rowId": `${prefix}pepeg11`
									},
									{
									"title": `${global.produk12}`,
										"description": ``,
										"rowId": `${prefix}pepeg12`
									},
									{
									"title": `${global.produk13}`,
										"description": ``,
										"rowId": `${prefix}pepeg13`
									},
									{
									"title": `${global.produk14}`,
										"description": ``,
										"rowId": `${prefix}pepeg14`
									},
									{
									"title": `${global.produk15}`,
										"description": ``,
										"rowId": `${prefix}pepeg15`
									},
									{
									"title": `${global.produk16}`,
										"description": ``,
										"rowId": `${prefix}pepeg16`
									},
									{
									"title": `${global.produk17}`,
										"description": ``,
										"rowId": `${prefix}pepeg17`
									},
									{
									"title": `${global.produk18}`,
										"description": ``,
										"rowId": `${prefix}pepeg18`
									},
									{
									"title": `${global.produk19}`,
										"description": ``,
										"rowId": `${prefix}pepeg19`
									},
									{
									"title": `${global.produk20}`,
										"description": ``,
										"rowId": `${prefix}pepeg20`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            SatDevs.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'payment': case 'pembayaran': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname} - ${ucapanWaktu}`,
                    description: `Payment Method 😷`,
                    buttonText: "PAYMENT",
                    footerText: `${global.footer}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "All Payment ",
								"rows": [
									{
										"title": "Qris AllPayment",
										"description": "Qris",
										"rowId": `${prefix}qris`
									},
									{
										"title": "Gopay",
										"description": "Via Gopay",
										"rowId": `${prefix}gopay`
										},
										{
										"title": "Dana",
										"description": "Via Dana",
										"rowId": `${prefix}py2`
										},
									{
										"title": "Saweria",
										"description": "Via Saweria",
										"rowId": `${prefix}py1`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            SatDevs.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
    case 'donasi': case 'donate': {
                SatDevs.sendMessage(m.chat, { image: { url: 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=Donate+Me' }, caption: `Donasi Biar Semangat😊\nSaweria : ${global.saweria}` }, { quoted: m })
            }
            break
            case 'sc': case 'script': {
                reply(`wa.me/6281316701742`)
            }
            break
case 'pepeg1': case 'sewa': case 'sewabot':
var unicorn = await getBuffer(picak+`${global.produk1}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 *${botname}* 」━━⭓ 
┃╔══☯︎「 ${global.produk1} 」☯︎
${global.desk1}
┃╚═══════
┗━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg1'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
    
break
case 'pepeg2':
var unicorn = await getBuffer(picak+`${global.produk2}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 ${global.produk2} 」
${global.desk2}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg2'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break

case 'pepeg3':
var unicorn = await getBuffer(picak+`${global.produk3}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 ${global.produk3} 」	        
${global.desk3}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg3'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break

case 'py1': case 'saweria':
var unicorn = await getBuffer(picak+'Saweria')
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 SAWERIA 」	        
┃╠ Saweria : ${global.saweria}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Saweria","url": `${global.saweria}`}},{"urlButton": {"displayText": "Qr Saweria","url": `${global.qris}`}},{"quickReplyButton": {"displayText": "Back","id": 'payment'}}] )
break

case 'py2': case 'dana':
var unicorn = await getBuffer(picak+'Dana')
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 DANA 」	        
┃╠ Dana : ${global.dana}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "WebStore","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Back","id": 'payment'}}] )
break

case 'gopay': {
            let buttons = [
                    {buttonId: `payment`, buttonText: {displayText: 'Back'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/0648f288805d3773a552f.jpg' },
                    caption: `Qr Gopay`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                SatDevs.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
          case 'qris': {
            let buttons = [
                    {buttonId: `payment`, buttonText: {displayText: 'Back'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/01d8580d17f5deb63afb6.jpg' },
                    caption: `Qris All Payment`,
                    footer: global.footer,
                    buttons: buttons,
                    headerType: 4
                }
                SatDevs.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           
case 'pepeg4':
var unicorn = await getBuffer(picak+`${global.produk4}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 ${global.produk4} 」	         
${global.desk4}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg4'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break

case 'pepeg5':
var unicorn = await getBuffer(picak+`${global.produk5}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 ${global.produk5} 」	        
${global.desk5}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg5'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg6':
var unicorn = await getBuffer(picak+`${global.produk6}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 ${global.produk6} 」	        
${global.desk6}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg6'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg7':
var unicorn = await getBuffer(picak+`${global.produk7}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk7} 」	        
${global.desk7}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg7'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg8':
var unicorn = await getBuffer(picak+`${global.produk8}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk8} 」	        
${global.desk8}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg8'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg9':
var unicorn = await getBuffer(picak+`${global.produk9}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk9} 」	        
${global.desk9}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg9'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg10':
var unicorn = await getBuffer(picak+`${global.produk10}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk10} 」	        
${global.desk10}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg10'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg11':
var unicorn = await getBuffer(picak+`${global.produk11}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk12} 」	        
${global.desk11}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg11'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg12':
var unicorn = await getBuffer(picak+`${global.produk12}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk12} 」	        
${global.desk12}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg12'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg13':
var unicorn = await getBuffer(picak+`${global.produk13}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk13} 」	        
${global.desk13}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg13'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg14':
var unicorn = await getBuffer(picak+`${global.produk14}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk14} 」	        
${global.desk14}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg14'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg15':
var unicorn = await getBuffer(picak+`${global.produk15}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk15} 」	        
${global.desk15}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg15'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg16':
var unicorn = await getBuffer(picak+`${global.produk16}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk16} 」	        
${global.desk16}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg16'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg17':
var unicorn = await getBuffer(picak+`${global.produk17}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk17} 」	        
${global.desk17}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg17'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg18':
var unicorn = await getBuffer(picak+`${global.produk18}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk18} 」	        
${global.desk18}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg18'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg19':
var unicorn = await getBuffer(picak+`${global.produk19}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk1} 」	        
${global.desk19}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg19'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'pepeg20':
var unicorn = await getBuffer(picak+`${global.produk20}`)
await SatDevs.send5ButImg(from, `${pushname}` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ${global.produk20} 」	        
${global.desk20}
┃╚═════════════✪
┗━━「 ${pushname} - ${ucapanWaktu} 」━⭓`,unicorn, [{"urlButton": {"displayText": "Website","url": `${myweb}`}},{"quickReplyButton": {"displayText": "Harga","id": 'hg20'}},{"quickReplyButton": {"displayText": "Back","id": 'product'}},{"quickReplyButton": {"displayText": "Payment","id": 'payment'}}] )
break
case 'hg1': {
reply(`${global.harga1}`)
}
break
case 'hg2': {
reply(`${global.harga2}`)
}
break
case 'hg3k': {
reply(`${global.harga3}`)
}
break
case 'hg4': {
reply(`${global.harga4}`)
}
break
case 'hg5': {
reply(`${global.harga5}`)
}
break
case 'hg6': {
reply(`${global.harga6}`)
}
break
case 'hg7': {
reply(`${global.harga7}`)
}
break
case 'hg8': {
reply(`${global.harga8}`)
}
break
case 'hg9': {
reply(`${global.harga9}`)
}
break
case 'hg10': {
reply(`${global.harga10}`)
}
break
case 'hg11': {
reply(`${global.harga11}`)
}
break
case 'hg12': {
reply(`${global.harga12}`)
}
break
case 'hg13': {
reply(`${global.harga13}`)
}
break
case 'hg14': {
reply(`${global.harga14}`)
}
break
case 'hg15': {
reply(`${global.harg15}`)
}
break
case 'hg16': {
reply(`${global.harga16}`)
}
break
case 'hg17': {
reply(`${global.harga17}`)
}
break
case 'hg18': {
reply(`${global.harga18}`)
}
break
case 'hg19': {
reply(`${global.harga19}`)
}
break
case 'hg20': {
reply(`${global.harga20}`)
}
break
default:
               
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    SatDevs.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
