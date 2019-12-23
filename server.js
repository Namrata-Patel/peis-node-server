const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());
 
const users = [
{name: 'Harry Potter', id: 1},
{name: 'Twilight', id: 2},
{name: 'Lorien Legacies', id: 3},
{name: 'Test2', id: 4}
]
 
 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//READ Request Handlers
app.get('/', (req, res) => {
res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});
 
app.get('/api/users', (req,res)=> {
res.send(users);
});
 
app.get('/api/users/:id', (req, res) => {
const user = users.find(c => c.id === parseInt(req.params.id));
 
if (!user) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
res.send(user);
});
  
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));