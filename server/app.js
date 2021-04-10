import express from "express";
import bodyParser from "body-parser";
import path from "path";
import apiRoutes from "./routes";
import session from "express-session";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { handleError } from "./utils/handler";
import cors from "cors";
import "./config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API calls
app.use(apiRoutes);
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

// Serve any static files
app.use(express.static(path.join(__dirname, "..", "client/build")));
// Handle React routing, return all requests to React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "client/build", "index.html"));
});
app.use(handleError);
app.listen(port, () => console.log(`Listening on port ${port}`));
