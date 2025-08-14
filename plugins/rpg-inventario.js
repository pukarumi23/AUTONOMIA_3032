import db from '../lib/database.js';
import moment from 'moment-timezone';

let handler = async (m, { conn, usedPrefix }) => {
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

    if (!(who in global.db.data.users)) {
        return conn.reply(m.chat, `💙 El usuario no se encuentra en mi base de datos del mundo virtual. ✨🎵`, m, rcanal);
    }
    
    let img = 'https://i.pinimg.com/736x/09/83/75/098375b9ab1436065d988738f5dbe2c5.jpg';
    let user = global.db.data.users[who];
    let name = conn.getName(who);

    let premium = user.premium ? '✅' : '❌';

    let text = `╭━〔 Inventario de ${name} 〕⬣\n` +
               `┋ 💸 *${moneda} en Cartera:* ${user.coin || 0}\n` +  
               `┋ 🏦 *${moneda} en Banco:* ${user.bank || 0}\n` + 
               `┋ ♦️ *Esmeraldas:* ${user.emerald || 0}\n` + 
               `┋ 🔩 *Hierro:* ${user.iron || 0}\n` +  
               `┋ 🏅 *Oro:* ${user.gold || 0}\n` + 
               `┋ 🕋 *Carbón:* ${user.coal || 0}\n` +  
               `┋ 🪨 *Piedra:* ${user.stone || 0}\n` +  
               `┋ ✨ *Experiencia:* ${user.exp || 0}\n` + 
               `┋ ❤️ *Salud:* ${user.health || 100}\n` + 
               `┋ 💎 *Diamantes:* ${user.diamond || 0}\n` +   
               `┋ 🍬 *Dulces:* ${user.candies || 0}\n` + 
               `┋ 🎁 *Regalos:* ${user.gifts || 0}\n` + 
               `┋ 🎟️ *Tokens:* ${user.joincount || 0}\n` +  
               `┋ ⚜️ *Premium:* ${premium}\n` + 
               `┋ ⏳ *Última Aventura:* ${user.lastAdventure ? moment(user.lastAdventure).fromNow() : 'Nunca'}\n` + 
               `┋ 📅 *Fecha:* ${new Date().toLocaleString('id-ID')}\n` +
               `╰━━━━━━━━━━━━⬣`;

    await conn.sendFile(m.chat, img, 'miku.jpg', text, fkontak);
}

handler.help = ['inventario', 'inv'];
handler.tags = ['rpg'];
handler.command = ['inventario', 'inv', 'mochila']; 
handler.group = true;
handler.register = true;

export default handler;
