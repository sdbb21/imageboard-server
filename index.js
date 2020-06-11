const express = require("express");
// const cors = require("cors");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const app = express();
const PORT = process.env.PORT || 4000;
const jsonParser = express.json();

app.use(jsonParser);
// app.use(cors);

app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
