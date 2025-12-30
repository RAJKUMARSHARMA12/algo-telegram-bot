const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearch = `
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
`;

bot.start((ctx) => ctx.reply('Welcome to the Raj Kumar EMPIRE bot! 🚀'));

bot.command('binarySearch', (ctx) => ctx.reply(binarySearch));

// ✅ SINGLE message handler (BEST PRACTICE)
bot.on('message', (ctx) => {
  if (ctx.message.sticker) {
    return ctx.reply('👍');
  }

  if (ctx.message.text && ctx.message.text.startsWith('/')) return;

  if (ctx.message.text) {
    ctx.reply("I don't understand that command yet!");
  }
});

bot.launch();

console.log('Bot running...');
