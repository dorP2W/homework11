import Express from "express"
import path from 'path'
import fs from 'fs'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static(path.join(__dirname)));

app.get('/', (req, res)=>{

    res.sendFile(path.join(__dirname,  'startPage.html'))
})

app.post('/', (req, res) => {
    try{

        console.log(req.body);
    }catch(err){
        console.log(err)
    }
    const { username, email, password } = req.body;
  
    // Write to a text file
    const data = `Username: ${username}, Email: ${email}, Password: ${password}\n`;
    fs.appendFileSync('users.txt', data, 'utf8');
  
    res.send(`hello ${username}`)
  });
  

app.listen(3000, ()=>{
    console.log("listening...")
})