const multer = require("multer");
const getRandom = require("../shared/getRandom.js");
const { v1: uuidv1 } = require("uuid");
const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === "path_to_mp3") {
      cb(null, "storage/mp3/");
    }
    if (file.fieldname === "path_to_wav") {
      cb(null, "storage/wav/");
    }
    if (file.fieldname === "path_to_cover") {
      cb(null, "storage/covers/");
    }
  },
  filename(req, file, cb) {
    // проверяем если обьект не пуст идем дальше, если пуст
    // значит создаем обьект куда будем помещать имена для дальнейшего пользования
    if (!req.savedFiles) {
      req.savedFiles = {};
    }
    /*    if (Object.keys(req.savedFile).length == 0) {
      console.log('пуст');
    }*/
    if (file.fieldname === "path_to_mp3") {
      req.savedFiles[file.fieldname] = uuidv1() + ".mp3";
      cb(null, req.savedFiles[file.fieldname]);
    }
    if (file.fieldname === "path_to_wav") {
      req.savedFiles[file.fieldname] = uuidv1() + ".wav";
      cb(null, req.savedFiles[file.fieldname]);
    }
    if (file.fieldname === "path_to_cover") {
      const fileExt = file.originalname.split(".")[1];
      req.savedFiles[file.fieldname] = uuidv1() + fileExt;
      cb(null, req.savedFiles[file.fieldname]);
    }
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

const fileMiddleware = multer({
  storage,
  fileFilter,
});

module.exports = fileMiddleware;
