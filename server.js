import app from "./src/app.js";
import connectDatabase from "./src/config/database.js";

connectDatabase();

app.listen(3000, () => {
  console.log("Server on port 3000");
});
