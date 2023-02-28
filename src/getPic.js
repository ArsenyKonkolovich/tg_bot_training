import axios from "axios"
import fs from "fs"

const getNameOfUploadPicture = () => {
  const fileName = `${new Date()}.png`
  const deleteFile = () => {
    if (fs.existsSync(fileName)) {
      fs.unlinkSync(fileName)
    }
  }
  setTimeout(deleteFile, 5000)
  return axios
    .get("https://picsum.photos/300", { responseType: "arraybuffer" })
    .then(({ data }) => {
      fs.writeFileSync(fileName, data)
      return fileName
    })
}

export default getNameOfUploadPicture
