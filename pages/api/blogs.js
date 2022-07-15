// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// localhost:3000/api/blogs
import * as fs  from 'fs'

export default function handler(req, res) {
    fs.readdir('blogData', (err, data) => {
        console.log(data);
    res.status(200).json(data)
  })
}