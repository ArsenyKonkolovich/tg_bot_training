import { Telegraf } from "telegraf"
import getPathOfUploadPicture from "./getPicture"

import * as dotenv from "dotenv"
dotenv.config()

const myReg = new RegExp(/[А-Яа-я\w\s]/, "g")
const token: any = process.env.BOT_TOKEN

const bot = new Telegraf(token)
bot.start((ctx) =>
  ctx.reply(
    "Пиши 'картинка' и я тебе выдам картиночку, а если напишешь что-то другое, то я просто повторю(только буквы и цифры)"
  )
)

bot.hears("картинка", (ctx) => {
  ctx.reply("Вот тебе картинка")
  getPathOfUploadPicture().then((fileName: string) => {
    ctx.replyWithPhoto({ source: fileName })
  })
})

bot.hears(myReg, (ctx) => {
  const chatId = ctx.update.message.chat.id
  console.log(ctx.update.message)
  ctx.copyMessage(chatId)
})

bot.launch()
