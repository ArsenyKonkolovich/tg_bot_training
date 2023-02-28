import { Telegraf } from "telegraf"
import { message } from "telegraf/filters"
import getNameOfUploadPicture from "./getPic.js"

import * as dotenv from "dotenv"
dotenv.config()

const myReg = new RegExp(/[А-Яа-я\w\s]/, "g")

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) =>
  ctx.reply(
    "Пиши 'картинка' и я тебе выдам картиночку, а если напишешь что-то другое, то я просто повторю"
  )
)
// bot.help((ctx) => ctx.reply("Send me a sticker"))
// bot.on(message("sticker"), (ctx) => {
//   ctx.reply("Намана")
// })
bot.hears("картинка", (ctx) => {
  ctx.reply("Вот тебе картинка")
  getNameOfUploadPicture().then((fileName) => {
    ctx.replyWithPhoto({ source: fileName })
  })
})

bot.hears(myReg, (ctx) => {
  const chatId = ctx.update.message.chat.id
  ctx.copyMessage(chatId)
})

bot.launch()
