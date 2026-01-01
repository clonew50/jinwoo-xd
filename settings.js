//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : Jinwoo
// @author : Malvin
// @youtube : https://www.youtube.com/@malvintech2
// @instagram : techlord01
// @telegram : t.me/malvinking2
// @github : xdking2
// @whatsapp : +263714757857

//----------------------[ Jinwoo ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'jinwoo:~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xiZVo5MGZ1QXcxc04vTGJOdnp4OCtvb3F2L2hKbUNXSXZEVkw2YTgwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnZxbk8rYjUrTnJlZXhoVHVJSnk4L0tWZDExcHFkUEZnWGVYdmRnenJqRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRUJCUjB4Y2ZmTHpSbjdYY1NaNm4zei90TDdGTUtEOGIyanhlQVZhcWxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRkhQVlZ4UmdhV29qR0FFNEcwbkRTZkszcERHdlRtVlROamQySHp6WW1JPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Ma0cxWGg4YUZHd3lYeWdoUUxhL2lVUTE4UlZjMHM0NDk3THdaeUhsRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpHU0lTSDJXcHFHejBkdThETE9LeXRKN0RSd25Gc3FsTGx3RWRPaHhIR0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pjOFBVNXB3bjhVcTBPSjdHME9Dd2hOMmpOWlZSK0d1bndCNjVpK05sUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMW51UndGTWx1TEZYSWlGZ2U3NTVrYzBEL1BRblZlOThrQ0JwT2R1N0htST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhtT3QyQ1gyZkNZckhsUkRLeFp5ai9weW9pQ2pVQ3A5cWQxZ01iRkNGRG9jMTF0VXp6QThPMEsrbXdBeU5KelVvTjNTV1dJdm5NenNLSEdRNGhZNWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM3LCJhZHZTZWNyZXRLZXkiOiJTYXlxd1Q3RjZLNUFSRTFGUUlPQVhTS3RsQTJEcWRmNTg0QmJnYTQ1NUUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIwMTIxMjQ0NjI5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzU1NTIxNEYzNDkzQkM1NEZDODUwRDkxN0Y1Rjk3MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY2ODMxMjI4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMDEyMTI0NDYyOTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM2QzBDRkY4REU5NUU1QjA1RjRCQTIyMDY5NzREQTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjgzMTIyOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjAxMjEyNDQ2Mjk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNjg0RTNDRjA2NDhCMTE2OTU0QzA3Q0VDMUJFQ0EyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjY4MzEyMjl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIwMTIxMjQ0NjI5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzRBMUQ4RUVEREYxQkI3RDk5MTI4RjQ2NThDQ0M0RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY2ODMxMjI5fV0sIm5leHRQcmVLZXlJZCI6MTYyNSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjE2MjUsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiWVVQUkFERVYiLCJtZSI6eyJpZCI6IjIwMTIxMjQ0NjI5OToxNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc5MDA2NDQzNTAzNzgzOjE0QGxpZCIsIm5hbWUiOiJjbG9uZXc1MCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjJzOXVjR0VPem92c29HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibVlIRTV2MHhzaVNFbUkvYVJCSlJWa0RMajBmRnNCM1BMY3dYQXg3K3hUVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTDZFVjNhQ1FtZXV1RTN3YkpRMGVpM3ZYQXNmb3pDMkVWZ0VkT1k3Y0NDdEczc0RmWTRoY3VuNnFCaElweWtlRUR6Uk8wWWNoRnhESTFLU040dy85Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjFjSlBFKzB3N2RTUVNNN3NEMThXRmRvUmg0Z05wRjRuOGtpLzMzZnpkQnVoTmg4SU5pY3QyN3dvV0N2SmRJNmFtV1h3YVIzOTVMbDhEb1Q1U0ZhdGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjAxMjEyNDQ2Mjk5OjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlptQnhPYjlNYklraEppUDJrUVNVVlpBeTQ5SHhiQWR6eTNNRndNZS9zVTEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lBd2dTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NjgzMTIyNywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFeWsifQ==' 
//Enter your Jinwoo session id here; must start with jinwoo:~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'ᴊɪɴᴡᴏᴏ-ʙᴏᴛ' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '201212446299' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['263714757857', '263780934873'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'ᴍᴀʟᴠɪɴ ᴋɪɴɢ' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "jinwoo" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "sung" 

//-------------------[ BOT'S PREFIX ]--------------------//

global.prefixz = process.env.BOT_PREFIX || '.'

//-----------------[ BOT'S MODE ]-----------------------//

global.mode = process.env.MODE || 'public';
// Set 'private' to enable private mode
// Set 'public' to enable public mode
// Set 'group' to enable only group
// Set 'pm' to enable only private chats

//----------[ STATUS REACTION EMOJI ]--------------//

global.statusemoji = process.env.STATUS_EMOJI || '🧡'

//---------------[ AUTO VIEW STATUS ]---------------//

global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'
// set true to enable and false to disable auto status view

//--------------[ AUTO REACT STATUS ]--------------//

global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'false'
// set true to enable and false to disable auto status react

//---------------[ ALWAYS ONLINE ]------------------//

global.alwaysonline = process.env.ALWAYS_ONLINE || 'true'
//Set true to make the bot online 24/7 or set false to disable always online


//--------------------[ CHATBOT ]-----------------------//

global.chatbot = process.env.CHATBOT || 'false'
// set true to enable and false to disable auto ai chatbot

//-------------------[ ANTI DELETE ]--------------------//

global.antidelete = process.env.ANTIDELETE || 'private'
// options:- 'private', 'chat' or 'off'
// private = Sends to message yourself 
// chat = sends to the current chat 
// off = Disables detection of deleted messages

//---------------------[ ANTI EDIT ]----------------------//

global.antiedit = process.env.ANTI_EDIT || 'private'
// options:- 'private', 'chat' or 'off'
// private = Sends to message yourself 
// chat = sends to the current chat 
// off = Disables detection of edited messages

//---------------------[ ANTI CALL ]----------------------//

global.anticall = process.env.ANTI_CALL || 'off'
// options :- 'off', 'decline' or 'block'
// off - Disables anticall
// decline - Declines incoming calls
// Block - Declines and blocks callers

//---------------[ WELCOME MESSAGE ]----------------//

global.welcome = process.env.WELCOME_MSG || 'false'
// set true to enable and false to disable welcoming and left messages to groups upon joining or leaving groups

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//--------------------[ AUTO READ ]--------------------//

global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//-------------------[ MENU STYLE ]--------------------//

global.menustyle = process.env.MENU_STYLE || '3' 
// options 1, 2, 3, 4, 5 or 6
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Footer/faded menu
//6 = Payment menu

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://www.instagram.com/@techlord01"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©Jinwoo bot"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © ᴊɪɴᴡᴏᴏ ᴠ2.5', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ Jinwoo-bot ]----------------------//
