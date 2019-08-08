const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectMongo = require('./mongodb/connectionFactory');

const routes = require('./routes/routes');

const app = express();
const port = process.env.port || 3000;
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

connectMongo.createConnection().then(data=>{
	console.log(data);
});


app.use(cors({origin: "*"}));
app.use(urlencodedParser);

app.use('/api', routes);

/* Start the application */
app.listen(port, function(){ 
	console.log('listening on port '+ port +"...");
});
