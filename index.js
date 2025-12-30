const { Telegraf } = require('telegraf');
const express = require('express');
require('dotenv').config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// 🔹 Simple health check route
app.get('/', (req, res) => {
  res.send('Telegram bot is running 🚀');
});

// 🔹 Binary Search code
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

bot.on('message', (ctx) => {
  if (ctx.message.sticker) return ctx.reply('👍');
  if (ctx.message.text?.startsWith('/')) return;
  if (ctx.message.text) ctx.reply("I don't understand that command yet!");
});

// 🔹 Start bot
bot.launch();
console.log('Bot running...');

// 🔹 Start Express server (REQUIRED for Render)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
