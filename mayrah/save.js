const {
    gmd,
    downloadMediaMessage,
} = require("../mayra");

gmd(
    {
        pattern: "save",
        aliases: ["s", "saveit", "savestatus"],
        react: "💾",
        category: "tools",
        description: "Save replied media, status or message",
    },

    async (from, Mayra, conText) => {
        const {
            reply,
            react,
            botFooter,
        } = conText;

        try {
            const msg =
                Mayra?.message ||
                Mayra;

            const contextInfo =
                msg?.extendedTextMessage?.contextInfo;

            const quoted =
                contextInfo?.quotedMessage;

            if (!quoted) {
                await react("❌");

                return reply(
                    `╭━━━〔 💾 *SAVE* 〕━━━╮\n` +
                    `┃\n` +
                    `┃ ❌ *Reply to a message*\n` +
                    `┃    that you want to save.\n` +
                    `┃\n` +
                    `┃ 📸 Image\n` +
                    `┃ 🎥 Video\n` +
                    `┃ 🎵 Audio\n` +
                    `┃ 🎨 Sticker\n` +
                    `┃ 📄 Document\n` +
                    `┃ 💬 Text\n` +
                    `┃\n` +
                    `┃ 💡 Example:\n` +
                    `┃ .save\n` +
                    `┃\n` +
                    `╰━━━━━━━━━━━━━━━━━━━━╯\n\n` +
                    `> _${botFooter || "MAYRA-AI"}_`
                );
            }

            await react("⏳");

            // Detect message type
            let type = Object.keys(quoted)[0];

            // Ignore message metadata
            const ignored = [
                "messageContextInfo",
                "senderKeyDistributionMessage",
                "contextInfo",
            ];

            if (ignored.includes(type)) {
                type = Object.keys(quoted).find(
                    key => !ignored.includes(key)
                );
            }

            // =========================
            // TEXT MESSAGE
            // =========================

            if (
                type === "conversation" ||
                type === "extendedTextMessage"
            ) {
                let text = "";

                if (type === "conversation") {
                    text = quoted.conversation;
                } else {
                    text =
                        quoted.extendedTextMessage?.text ||
                        "";
                }

                if (!text) {
                    await react("❌");
                    return reply(
                        "❌ Unable to read the quoted message."
                    );
                }

                await Mayra.sendMessage(
                    from,
                    {
                        text: text,
                    }
                );

                await react("✅");
                return;
            }

            // =========================
            // MEDIA MESSAGE
            // =========================

            const mediaTypes = {
                imageMessage: "image",
                videoMessage: "video",
                audioMessage: "audio",
                documentMessage: "document",
                stickerMessage: "sticker",
            };

            const mediaType =
                mediaTypes[type];

            if (!mediaType) {
                await react("❌");
const {
    gmd,
    downloadMediaMessage,
} = require("../mayra");

gmd(
    {
        pattern: "save",
        aliases: ["s", "saveit", "savestatus"],
        react: "💾",
        category: "tools",
        description: "Save replied media, status or message",
    },

    async (from, Mayra, conText) => {
        const {
            reply,
            react,
            botFooter,
        } = conText;

        try {
            const msg =
                Mayra?.message ||
                Mayra;

            const contextInfo =
                msg?.extendedTextMessage?.contextInfo;

            const quoted =
                contextInfo?.quotedMessage;

            if (!quoted) {
                await react("❌");

                return reply(
                    `╭━━━〔 💾 *SAVE* 〕━━━╮\n` +
                    `┃\n` +
                    `┃ ❌ *Reply to a message*\n` +
                    `┃    that you want to save.\n` +
                    `┃\n` +
                    `┃ 📸 Image\n` +
                    `┃ 🎥 Video\n` +
                    `┃ 🎵 Audio\n` +
                    `┃ 🎨 Sticker\n` +
                    `┃ 📄 Document\n` +
                    `┃ 💬 Text\n` +
                    `┃\n` +
                    `┃ 💡 Example:\n` +
                    `┃ .save\n` +
                    `┃\n` +
                    `╰━━━━━━━━━━━━━━━━━━━━╯\n\n` +
                    `> _${botFooter || "MAYRA-AI"}_`
                );
            }

            await react("⏳");

            // Detect message type
            let type = Object.keys(quoted)[0];

            // Ignore message metadata
            const ignored = [
                "messageContextInfo",
                "senderKeyDistributionMessage",
                "contextInfo",
            ];

            if (ignored.includes(type)) {
                type = Object.keys(quoted).find(
                    key => !ignored.includes(key)
                );
            }

            // =========================
            // TEXT MESSAGE
            // =========================

            if (
                type === "conversation" ||
                type === "extendedTextMessage"
            ) {
                let text = "";

                if (type === "conversation") {
                    text = quoted.conversation;
                } else {
                    text =
                        quoted.extendedTextMessage?.text ||
                        "";
                }

                if (!text) {
                    await react("❌");
                    return reply(
                        "❌ Unable to read the quoted message."
                    );
                }

                await Mayra.sendMessage(
                    from,
                    {
                        text: text,
                    }
                );

                await react("✅");
                return;
            }

            // =========================
            // MEDIA MESSAGE
            // =========================

            const mediaTypes = {
                imageMessage: "image",
                videoMessage: "video",
                audioMessage: "audio",
                documentMessage: "document",
                stickerMessage: "sticker",
            };

            const mediaType =
                mediaTypes[type];

            if (!mediaType) {
                await react("❌");

                return reply(
                    `❌ *Unsupported message type*\n\n` +
                    `Type: ${type || "unknown"}\n\n` +
                    `> _${botFooter || "MAYRA-AI"}_`
                );
            }

            // =========================
            // DOWNLOAD MEDIA
            // =========================

            let media;

            try {
                media =
                    await downloadMediaMessage(
                        {
                            message: quoted,
                        },
                        "buffer",
                        {}
                    );
            } catch (err) {
                console.error(
                    "[SAVE DOWNLOAD ERROR]",
                    err
                );

                await react("❌");

                return reply(
                    `❌ *Download failed*\n\n` +
                    `I couldn't download this media.\n\n` +
                    `> _${botFooter || "MAYRA-AI"}_`
                );
            }

            if (!media) {
                await react("❌");

                return reply(
                    `❌ *No media found.*\n\n` +
                    `> _${botFooter || "MAYRA-AI"}_`
                );
            }

            // =========================
            // CAPTION
            // =========================

            const caption =
                quoted.imageMessage?.caption ||
                quoted.videoMessage?.caption ||
                quoted.documentMessage?.caption ||
                "";

            // =========================
            // SEND IMAGE
            // =========================

            if (mediaType === "image") {
                await Mayra.sendMessage(
                    from,
                    {
                        image: media,
                        caption:
                            caption ||
                            "💾 Saved by MAYRA-AI",
                    }
                );
            }

            // =========================
            // SEND VIDEO
            // =========================

            else if (mediaType === "video") {
                await Mayra.sendMessage(
                    from,
                    {
                        video: media,
                        caption:
                            caption ||
                            "💾 Saved by MAYRA-AI",
                    }
                );
            }

            // =========================
            // SEND AUDIO
            // =========================

            else if (mediaType === "audio") {
                const ptt =
                    quoted.audioMessage?.ptt ||
                    false;

                await Mayra.sendMessage(
                    from,
                    {
                        audio: media,
                        mimetype:
                            quoted.audioMessage
                                ?.mimetype ||
                            "audio/mpeg",
                        ptt: ptt,
                    }
                );
            }

            // =========================
            // SEND STICKER
            // =========================

            else if (mediaType === "sticker") {
                await Mayra.sendMessage(
                    from,
                    {
                        sticker: media,
                    }
                );
            }

            // =========================
            // SEND DOCUMENT
            // =========================

            else if (mediaType === "document") {
                const fileName =
                    quoted.documentMessage
                        ?.fileName ||
                    "saved-file";

                const mimetype =
                    quoted.documentMessage
                        ?.mimetype ||
                    "application/octet-stream";

                await Mayra.sendMessage(
                    from,
                    {
                        document: media,
                        fileName: fileName,
                        mimetype: mimetype,
                        caption: caption,
                    }
                );
            }

            await react("✅");

        } catch (error) {
            console.error(
                "[SAVE ERROR]",
                error
            );

            try {
                await react("❌");
            } catch {}

            return reply(
                `❌ *SAVE ERROR*\n\n` +
                `${error.message || "Something went wrong."}\n\n` +
                `> _${botFooter || "MAYRA-AI"}_`
            );
        }
    }
);Enter
                return reply(
                    `❌ *Unsupported message type*\n\n` +
                    `Type: ${type || "unknown"}\n\n` +
                    `> _${botFooter || "MAYRA-AI"}_`
                );
            }

            // =========================
            // DOWNLOAD MEDIA
            // =========================

            let media;

            try {
                media =
                    await downloadMediaMessage(
                        {
                            message: quoted,
                        },
                        "buffer",
                        {}
                    );
            } catch (err) {
                console.error(
                    "[SAVE DOWNLOAD ERROR]",
                    err
                );

                await react("❌");

                return reply(
                    `❌ *Download failed*\n\n` +
                    `I couldn't download this media.\n\n` +
                    `> _${botFooter || "MAYRA-AI"}_`
                );
            }

            if (!media) {
                await react("❌");

                return reply(
                    `❌ *No media found.*\n\n` +
                    `> _${botFooter || "MAYRA-AI"}_`
                );
            }

            // =========================
            // CAPTION
            // =========================

            const caption =
                quoted.imageMessage?.caption ||
                quoted.videoMessage?.caption ||
                quoted.documentMessage?.caption ||
                "";

            // =========================
            // SEND IMAGE
            // =========================

            if (mediaType === "image") {
                await Mayra.sendMessage(
                    from,
                    {
                        image: media,
                        caption:
                            caption ||
                            "💾 Saved by MAYRA-AI",
                    }
                );
            }

            // =========================
            // SEND VIDEO
            // =========================

            else if (mediaType === "video") {
                await Mayra.sendMessage(
                    from,
                    {
                        video: media,
                        caption:
                            caption ||
                            "💾 Saved by MAYRA-AI",
                    }
                );
            }

            // =========================
            // SEND AUDIO
            // =========================

            else if (mediaType === "audio") {
                const ptt =
                    quoted.audioMessage?.ptt ||
                    false;

                await Mayra.sendMessage(
