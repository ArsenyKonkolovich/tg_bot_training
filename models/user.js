import Sequelize from "sequelize"
import table from "../SQConfig.js"

export const Users = table.define("Users", {
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

export const Notes = table.define("Notes", {
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
})

Notes.belongsTo(Users)
Users.hasMany(Notes)

await Users.sync()
await Notes.sync()

const user = await Users.create({ name: "Zalupa" })
console.log(user.id)
const note = await Notes.create({
  UserId: user.id,
  header: "Head",
  text: "Text",
})
console.log(note.header)
