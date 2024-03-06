const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const token = 'YOUR_BOT_TOKEN';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Parse the message and respond accordingly
    if (messageText.includes('hello') || messageText.includes('hi')) {
        bot.sendMessage(chatId, 'Hello! How can I assist you?');
    } else if (messageText.includes('bye')) {
        bot.sendMessage(chatId, 'Goodbye! Have a great day!');
    } else {
        bot.sendMessage(chatId, 'I am a simple bot. You can say hello, hi, or bye to me.');
    }
});
