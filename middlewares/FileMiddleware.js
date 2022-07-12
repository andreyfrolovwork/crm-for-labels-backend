const multer = require("multer");
const getRandom = require("../shared/getRandom.js");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "records/stack/");
  },
  filename(req, file, cb) {
    // Сохраняем загруженное изображение под случайным именем и записываем его в обьект req,
    // далее мы его перименуем и удалим
    req.fileSaveName = getRandom() + ".mp3";
    cb(null, req.fileSaveName);
  },
});

/*const types = ["image/webp"];*/

const fileFilter = (req, file, cb) => {
  cb(null, true);
  /*  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }*/
};

const fileMiddleware = multer({ storage, fileFilter });

module.exports = fileMiddleware;
