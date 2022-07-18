// nextjs post request to send email

import * as fs from 'fs';

export default async function  handler(req, res) {
    if (req.method === 'POST') {
        // Process a Post request
        console.log(req.body);
        let data = await fs.promises.readdir('contactdata');
        console.log(data)
        let file = 'contactdata/contact-' + data.length + '.json';
        await fs.promises.writeFile(file, JSON.stringify(req.body));
        res.send('POST request received');
        res.status(200).json({
            message: 'success'
        });
    }
    else {
        res.status(405).json({  
            message: 'Method not allowed'
        });
    }
}

