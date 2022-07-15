// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// localhost:3000/api/getblog?slug=sufagd
import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(404).json({ error: "Not found" });
    }
    console.log(req.query.slug);
    res.status(200).json(JSON.parse(data));
  });
}
