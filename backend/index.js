const express = require('express');
const bodyParser=  require('body-parser');
const mongoose=  require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const multer=  require('multer');
const helmet=  require('helmet');
const morgan=  require('morgan');
const path = require('path');
const { fileURLToPath } = require('url'); 

const userRouter = require('./routes/userRouter');
const postsRouter = require('./routes/postsRouter');


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
dotenv.config();
const app =express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "40mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));

// File Storage 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage });

app.use('/api/v1/user',userRouter);
app.use('/api/v1/posts',postsRouter);

// app.listen(3000);
const PORT = process.env.PORT || 3000;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} could not connect`));
