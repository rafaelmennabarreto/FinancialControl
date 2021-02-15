const { ipcMain } = require("electron");

const { favorecidos } = require("../index");
const ResponseDto = require("../dto/responseDto");

console.log("started favorecido controller");

ipcMain.on("SaveFavorecido", async (event, data) => {
  const favorecido = data.content;

  favorecidos.insert(favorecido, (err, nd) => {
    if (err) {
      console.error("erro : " + err.message);
    } else {
      favorecido.Id = nd._id;

      const response = new ResponseDto({
        message: "salvo com sucesso",
        data: favorecido,
      });

      event.reply("SavedFavorecido", response);
    }
  });
});
