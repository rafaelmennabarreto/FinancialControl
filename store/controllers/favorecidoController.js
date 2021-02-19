const { ipcMain } = require("electron");

const { favorecidos } = require("../index");
const ResponseDto = require("../dto/responseDto");

console.log("started favorecido controller");

ipcMain.on("Favorecido", async (event, data) => {
  const { action } = data;

  switch (action) {
    case "SaveFavorecido":
      salvarFavorecido(event, data);
      break;
    case "DeleteFavorecido":
      deleteFavorecido(event, data);
      break;
  }
});

function salvarFavorecido(event, data) {
  const favorecido = data.content;

  favorecidos.insert(favorecido, (err, nd) => {
    if (err) {
      const response = new ResponseDto({
        message: `Erro : ${err.message}`,
        code: 400,
      });

      event.reply("SavedFavorecido", response);
    } else {
      favorecido.Id = nd._id;

      const response = new ResponseDto({
        message: "salvo com sucesso",
        data: favorecido,
        code: 200,
      });

      event.reply("SavedFavorecido", response);
    }
  });
}

function deleteFavorecido(event, data) {
  const favorecido = data.content;

  favorecidos.remove({ _id: favorecido.Id }, {}, (err, idRemoved) => {
    if (err) {
      const response = new ResponseDto({
        message: `Erro : ${err.message}`,
        code: 400,
      });

      event.reply("DeletedFavorecido", response);
    } else {
      const response = new ResponseDto({
        message: "Usuario Deletado",
        data: favorecido,
        code: 200,
      });

      event.reply("DeletedFavorecido", response);
    }

    favorecidos.persistence.compactDatafile();
  });
}
