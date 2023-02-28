import axios from "axios"
import fs from "fs"
import Formdata from "form-data"

const getNameOfUploadPicture = () => {
  const formData = new Formdata()
  return axios
    .get("https://picsum.photos/200", { responseType: "arraybuffer" })
    .then(({ data }) => {
      formData.append("photo", data)
      fs.writeFileSync("1.png", data)
      return formData
    })
}

export default getNameOfUploadPicture
