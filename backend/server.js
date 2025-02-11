const express = require('express')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {    
    res.json('Hello Azlan!')
});

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})