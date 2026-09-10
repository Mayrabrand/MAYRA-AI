cconst { gmd, commands, DEFAULT_SETTINGS } = require("../mayra");

gmd(
    {
        pattern: "menu",
        aliases: ["help", "commands", "list", "cmd"],
        react: "💜",
        category: "general",
        description: "Show the MAYRA-AI command menu",
    },

    async (from, Mayra, conText) => {
        const { reply, react, botFooter } = conText;

        try {
            const settings = DEFAULT_SETTINGS || {};

            const prefix = settings.PREFIX || ".";
            const botName = (
                settings.BOT_NAME || "MAYRA-AI"
            ).toUpperCase();

            // Get available commands
            const availableCommands = commands.filter(
                (cmd) =>
                    cmd.pattern &&
                    !cmd.dontAddCommandList
            );

            // Group commands by category
            const categories = {};

            for (const cmd of availableCommands) {
                const category = cmd.category || "general";

                if (!categories[category]) {
                    categories[category] = [];
                }

                categories[category].push(cmd);
            }

            // Category icons
            const categoryIcons = {
                general: "🌐",
                owner: "👑",
                admin: "🛡️",
                group: "👥",
                download: "📥",
                downloader: "📥",
                search: "🔎",
                fun: "🎮",
                tools: "🛠️",
                utility: "🔧",
                media: "🎵",
                ai: "🤖",
                sticker: "🎨",
                image: "🖼️",
                settings: "⚙️",
            };

            // =========================
            // HEADER
            // =========================

            let menu = "";

            menu += `╭━━━〔 💜 *${botName}* 〕━━━╮\n`;
            menu += `┃\n`;
            menu += `┃ 👋 *Hello there!*\n`;
            menu += `┃ 🤖 Your WhatsApp AI Assistant\n`;
            menu += `┃\n`;
            menu += `┃ 📌 Prefix   : *${prefix}*\n`;
            menu += `┃ 📊 Commands : *${availableCommands.length}*\n`;
            menu += `┃ ⚡ Status    : *ONLINE*\n`;
            menu += `┃\n`;
            menu += `╰━━━━━━━━━━━━━━━━━━━━━━━━╯\n\n`;

            // =========================
            // COMMAND MENU
            // =========================

            menu += `╭──────〔 📚 *COMMAND MENU* 〕──────╮\n`;

            const sortedCategories =
                Object.keys(categories).sort();

            for (const category of sortedCategories) {
                const list = categories[category];

                if (!list.length) continue;

                const icon =
                    cconst { gmd, commands, DEFAULT_SETTINGS } = require("../mayra");

gmd(
    {
        pattern: "menu",
        aliases: ["help", "commands", "list", "cmd"],
        react: "💜",
        category: "general",
        description: "Show the MAYRA-AI command menu",
    },

    async (from, Mayra, conText) => {
        const { reply, react, botFooter } = conText;

        try {
            const settings = DEFAULT_SETTINGS || {};

            const prefix = settings.PREFIX || ".";
            const botName = (
                settings.BOT_NAME || "MAYRA-AI"
            ).toUpperCase();

            // Get available commands
            const availableCommands = commands.filter(
                (cmd) =>
                    cmd.pattern &&
                    !cmd.dontAddCommandList
            );

            // Group commands by category
            const categories = {};

            for (const cmd of availableCommands) {
                const category = cmd.category || "general";

                if (!categories[category]) {
                    categories[category] = [];
                }

                categories[category].push(cmd);
            }

            // Category icons
            const categoryIcons = {
                general: "🌐",
                owner: "👑",
                admin: "🛡️",
                group: "👥",
                download: "📥",
                downloader: "📥",
                search: "🔎",
                fun: "🎮",
                tools: "🛠️",
                utility: "🔧",
                media: "🎵",
                ai: "🤖",
                sticker: "🎨",
                image: "🖼️",
                settings: "⚙️",
            };

            // =========================
            // HEADER
            // =========================

            let menu = "";

            menu += `╭━━━〔 💜 *${botName}* 〕━━━╮\n`;
            menu += `┃\n`;
            menu += `┃ 👋 *Hello there!*\n`;
            menu += `┃ 🤖 Your WhatsApp AI Assistant\n`;
            menu += `┃\n`;
            menu += `┃ 📌 Prefix   : *${prefix}*\n`;
            menu += `┃ 📊 Commands : *${availableCommands.length}*\n`;
            menu += `┃ ⚡ Status    : *ONLINE*\n`;
            menu += `┃\n`;
            menu += `╰━━━━━━━━━━━━━━━━━━━━━━━━╯\n\n`;

            // =========================
            // COMMAND MENU
            // =========================

            menu += `╭──────〔 📚 *COMMAND MENU* 〕──────╮\n`;

            const sortedCategories =
                Object.keys(categories).sort();

            for (const category of sortedCategories) {
                const list = categories[category];

                if (!list.length) continue;

                const icon =
const { gmd, commands, DEFAULT_SETTINGS } = require("../mayra");

gmd(
    {
        pattern: "menu",
        aliases: ["help", "commands", "list", "cmd"],
        react: "💜",
        category: "general",
        description: "Show the MAYRA-AI command menu",
    },

    async (from, Mayra, conText) => {
        const { reply, react, botFooter } = conText;

        try {
            const settings = DEFAULT_SETTINGS || {};

            const prefix = settings.PREFIX || ".";
            const botName = (
                settings.BOT_NAME || "MAYRA-AI"
            ).toUpperCase();

            // Get available commands
            const availableCommands = commands.filter(
                (cmd) =>
                    cmd.pattern &&
                    !cmd.dontAddCommandList
            );

            // Group commands by category
            const categories = {};

            for (const cmd of availableCommands) {
                const category = cmd.category || "general";

                if (!categories[category]) {
                    categories[category] = [];
                }

                categories[category].push(cmd);
            }

            // Category icons
            const categoryIcons = {
                general: "🌐",
                owner: "👑",
                admin: "🛡️",
                group: "👥",
                download: "📥",
                downloader: "📥",
                search: "🔎",
                fun: "🎮",
                tools: "🛠️",
                utility: "🔧",
                media: "🎵",
                ai: "🤖",
                sticker: "🎨",
                image: "🖼️",
                settings: "⚙️",
            };

            // =========================
            // HEADER
            // =========================

            let menu = "";

            menu += `╭━━━〔 💜 *${botName}* 〕━━━╮\n`;
            menu += `┃\n`;
            menu += `┃ 👋 *Hello there!*\n`;
            menu += `┃ 🤖 Your WhatsApp AI Assistant\n`;
            menu += `┃\n`;
            menu += `┃ 📌 Prefix   : *${prefix}*\n`;
            menu += `┃ 📊 Commands : *${availableCommands.length}*\n`;
            menu += `┃ ⚡ Status    : *ONLINE*\n`;
            menu += `┃\n`;
            menu += `╰━━━━━━━━━━━━━━━━━━━━━━━━╯\n\n`;

            // =========================
            // COMMAND MENU
            // =========================

            menu += `╭──────〔 📚 *COMMAND MENU* 〕──────╮\n`;

            const sortedCategories =
                Object.keys(categories).sort();

            for (const category of sortedCategories) {
                const list = categories[category];

                if (!list.length) continue;

                const icon =
                    categoryIcons[
                        category.toLowerCase()
                    ] || "✨";

                const title =
                    category.charAt(0).toUpperCase() +
                    category.slice(1);

                menu += `\n┃ ${icon} *${title}*\n`;
                menu += `┃\n`;

                for (const cmd of list) {
                    const name = cmd.pattern;

                    menu += `┃  ${icon} \`${prefix}${name}\``;

                    if (cmd.description) {
                        menu += ` — ${cmd.description}`;
                    }

                    menu += `\n`;
                }
            }

            menu += `\n╰──────────────────────────╯\n\n`;

            // =========================
            // USAGE
            // =========================

            menu += `╭──────〔 💡 *USAGE* 〕──────╮\n`;
            menu += `┃\n`;
            menu += `┃ ${prefix}menu\n`;
            menu += `┃ ${prefix}command <query>\n`;
            menu += `┃\n`;
            menu += `┃ *Examples:*\n`;
            menu += `┃ ${prefix}sticker\n`;
            menu += `┃ ${prefix}play song name\n`;
            menu += `┃ ${prefix}download url\n`;
            menu += `┃\n`;
            menu += `╰──────────────────────────╯\n\n`;

            // =========================
            // FOOTER
            // =========================

            menu += `╭────────〔 💜 *MAYRA-AI* 〕────────╮\n`;
            menu += `┃\n`;
            menu += `┃ ⚡ Fast • Smart • Powerful\n`;
            menu += `┃ 🔒 Secure WhatsApp Assistant\n`;
            menu += `┃\n`;
            menu += `╰──────✦ *LUKABRAND* ✦──────╯\n\n`;

            menu += `> _${botFooter || "Powered by LUKABRAND"}_`;

            // React
            await react("💜");

            // Send menu
            return reply(menu);

        } catch (error) {

            console.error("[MENU ERROR]", error);

            await react("❌");

            return reply(
                `❌ *Menu Error*\n\n` +
                `Something went wrong while loading the command menu.\n\n` +
                `> _${botFooter || "Powered by LUKABRAND"}_`
            );
        }
    }
);Enter                    categoryIcons[
                        category.toLowerCase()
                    ] || "✨";

                const title =
                    category.charAt(0).toUpperCase() +
                    category.slice(1);

                menu += `\n┃ ${icon} *${title}*\n`;
                menu += `┃\n`;

                for (const cmd of list) {
                    const name = cmd.pattern;

                    menu += `┃  ${icon} \`${prefix}${name}\``;

                    if (cmd.description) {
                        menu += ` — ${cmd.description}`;
                    }

                    menu += `\n`;
                }
            }

            menu += `\n╰──────────────────────────╯\n\n`;

            // =========================
            // USAGE
            // =========================

            menu += `╭──────〔 💡 *USAGE* 〕──────╮\n`;
            menu += `┃\n`;
            menu += `┃ ${prefix}menu\n`;
            menu += `┃ ${prefix}command <query>\n`;
            menu += `┃\n`;
            menu += `┃ *Examples:*\n`;
            menu += `┃ ${prefix}sticker\n`;
            menu += `┃ ${prefix}play song name\n`;
            menu += `┃ ${prefix}download url\n`;
            menu += `┃\n`;
            menu += `╰──────────────────────────╯\n\n`;

            // =========================
            // FOOTER
            // =========================

            menu += `╭────────〔 💜 *MAYRA-AI* 〕────────╮\n`;
            menu += `┃\n`;
            menu += `┃ ⚡ Fast • Smart • Powerful\n`;
            menu += `┃ 🔒 Secure WhatsApp Assistant\n`;
            menu += `┃\n`;
            menu += `╰──────✦ *LUKABRAND* ✦──────╯\n\n`;

            menu += `> _${botFooter || "Powered by LUKABRAND"}_`;

            // React
            await react("💜");

            // Send menu
            return reply(menu);

        } catch (error) {

            console.error("[MENU ERROR]", error);

            await react("❌");

            return reply(
                `❌ *Menu Error*\n\n` +
                `Something went wrong while loading the command menu.\n\n` +
                `> _${botFooter || "Powered by LUKABRAND"}_`
            );
        }
    }
);Enter[
                        category.toLowerCase()
                    ] || "✨";

                const title =
                    category.charAt(0).toUpperCase() +
                    category.slice(1);

                menu += `\n┃ ${icon} *${title}*\n`;
                menu += `┃\n`;

                for (const cmd of list) {
                    const name = cmd.pattern;

                    menu += `┃  ${icon} \`${prefix}${name}\``;

                    if (cmd.description) {
                        menu += ` — ${cmd.description}`;
                    }

                    menu += `\n`;
                }
            }

            menu += `\n╰──────────────────────────╯\n\n`;

            // =========================
            // USAGE
            // =========================

            menu += `╭──────〔 💡 *USAGE* 〕──────╮\n`;
            menu += `┃\n`;
            menu += `┃ ${prefix}menu\n`;
            menu += `┃ ${prefix}command <query>\n`;
            menu += `┃\n`;
            menu += `┃ *Examples:*\n`;
            menu += `┃ ${prefix}sticker\n`;
            menu += `┃ ${prefix}play song name\n`;
            menu += `┃ ${prefix}download url\n`;
            menu += `┃\n`;
            menu += `╰──────────────────────────╯\n\n`;

            // =========================
            // FOOTER
            // =========================

            menu += `╭────────〔 💜 *MAYRA-AI* 〕────────╮\n`;
            menu += `┃\n`;
            menu += `┃ ⚡ Fast • Smart • Powerful\n`;
            menu += `┃ 🔒 Secure WhatsApp Assistant\n`;
            menu += `┃\n`;
            menu += `╰──────✦ *LUKABRAND* ✦──────╯\n\n`;

            menu += `> _${botFooter || "Powered by LUKABRAND"}_`;

            // React
            await react("💜");

            // Send menu
            return reply(menu);

        } catch (error) {

            console.error("[MENU ERROR]", error);

            await react("❌");

            return reply(
                `❌ *Menu Error*\n\n` +
                `Something went wrong while loading the command menu.\n\n` +
                `> _${botFooter || "Powered by LUKABRAND"}_`
            );
        }
    }
);Enteronst { gmd, commands, DEFAULT_SETTINGS } = require("../mayra");

gmd(
    {
        pattern: "menu",
        aliases: ["help", "commands", "list", "cmd"],
        react: "💜",
        category: "general",
        description: "Show the MAYRA-AI command menu",
    },

    async (from, Mayra, conText) => {
        const { reply, react, botFooter } = conText;

        try {
            const settings = DEFAULT_SETTINGS || {};

            const prefix = settings.PREFIX || ".";
            const botName = (
                settings.BOT_NAME || "MAYRA-AI"
            ).toUpperCase();

            // Get available commands
            const availableCommands = commands.filter(
                (cmd) =>
                    cmd.pattern &&
                    !cmd.dontAddCommandList
            );

            // Group commands by category
            const categories = {};

            for (const cmd of availableCommands) {
                const category = cmd.category || "general";

                if (!categories[category]) {
                    categories[category] = [];
                }

                categories[category].push(cmd);
            }

            // Category icons
            const categoryIcons = {
                general: "🌐",
                owner: "👑",
                admin: "🛡️",
                group: "👥",
                download: "📥",
                downloader: "📥",
                search: "🔎",
                fun: "🎮",
                tools: "🛠️",
                utility: "🔧",
                media: "🎵",
                ai: "🤖",
                sticker: "🎨",
                image: "🖼️",
                settings: "⚙️",
            };

            // =========================
            // HEADER
            // =========================

            let menu = "";

            menu += `╭━━━〔 💜 *${botName}* 〕━━━╮\n`;
            menu += `┃\n`;
            menu += `┃ 👋 *Hello there!*\n`;
            menu += `┃ 🤖 Your WhatsApp AI Assistant\n`;
            menu += `┃\n`;
            menu += `┃ 📌 Prefix   : *${prefix}*\n`;
            menu += `┃ 📊 Commands : *${availableCommands.length}*\n`;
            menu += `┃ ⚡ Status    : *ONLINE*\n`;
            menu += `┃\n`;
            menu += `╰━━━━━━━━━━━━━━━━━━━━━━━━╯\n\n`;

            // =========================
            // COMMAND MENU
            // =========================

            menu += `╭──────〔 📚 *COMMAND MENU* 〕──────╮\n`;

            const sortedCategories =
                Object.keys(categories).sort();

            for (const category of sortedCategories) {
                const list = categories[category];

                if (!list.length) continue;

                const icon =
                    categoryIcons[
                        category.toLowerCase()
                    ] || "✨";

