import mineflayer from 'mineflayer';

const bot = mineflayer.createBot({
    host: 'play.simon511000.fr',
    username: 'simon@simon511000.fr',
    auth: 'microsoft',
    version: '1.19.2'
});

bot.on('playerJoined', (player) => {
    if(player.username == "simon511000") return;
    bot.chat(`Yo ${player.username}, ne fait pas attention à moi, je suis un bot`);
});