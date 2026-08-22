
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || '';
const dev = process.env.OWNER_NUMBER || '255768619068';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'false';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By Keith Md';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙';

const botPrefix = process.env.PREFIX || ".";
const botAuthor = process.env.AUTHOR || "Luka";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://i.ibb.co/PsZnb9NH/0d81ac6b1fb1.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/Mayrabrand/MAYRA-AI";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Dar Es Salaam";
const botBotname = process.env.BOTNAME || "MAYRA-AI";
const botPackname = process.env.BOT_PACKNAME || "MAYRA-AI";
const botMode = process.env.BOT_MODE || "public";
const botSessionName = process.env.BOT_SESSION_NAME || "keith-md";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
