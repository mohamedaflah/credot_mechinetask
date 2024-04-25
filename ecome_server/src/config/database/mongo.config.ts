import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URL as string,{dbName:"credotTask"})
  .then(() => {
    console.log(` Db connected `);
  })
  .catch((err) => {
    console.log(` Error occured while connectig DB ${err}`);
  });
