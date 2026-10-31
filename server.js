import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/youtube", async (req, res) => {
  const id = req.query.v;
  const apiKey = "AIzaSyAk0Ho-MN8aCRSzDiqJlF_O9dm9MM5y9Dk";
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

