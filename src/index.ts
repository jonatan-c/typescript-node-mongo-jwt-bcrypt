import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import "./database";

const port = 3000;

function main() {
  app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  });
}

main();
