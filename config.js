require('dotenv').config();

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN || '7646559842:AAGYPtAjuIWSciqJoh1-QpuqaoHwvI0xFK0',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://kyosih426:kennmongo@cluster0.fcv8v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  ADMIN_IDS: process.env.ADMIN_IDS
    ? process.env.ADMIN_IDS.split(',').map(id => Number(id.trim())).filter(id => id > 0)
    : [],
};

console.log("Admin IDs:", module.exports.ADMIN_IDS);
