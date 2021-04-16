const TelegramBot = require('node-telegram-bot-api');

const config = require('./config');

const bot = new TelegramBot(config.token, { polling: true });

const animationPath = './assets/SonoLillo.gif';

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Benvenuto! Prova a digitare /chisei');
});

bot.onText(/\/chisei/, (message, match) => {
  const chatId = message.chat.id;
  // bot.sendMessage(chatId, 'So Lillo!');
  bot.sendAnimation(chatId, animationPath);
});
