import Sequelize from "sequelize"
import table from "../SQConfig.js"

export const User = table.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

export const Note = table.define("notes", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  header: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
  },
})

await User.sync()
await Note.sync()

const note = await Note.findOne({ where: { userId: 1 } })
console.log(note.header)
