
const express = require("express");
const multer = require("multer");
const app = express();


// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

/*// Route To Load Index.html page to browser
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });*/

// The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
// You can create multiple middleware each with a different storage engine config so save different files in different locations on server
const upload = multer({ storage: fileStorageEngine });

// Single File Route Handler
app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single File upload success");
});


app.listen(5000);