const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
	res.send('Hola Mundo');
});

const employeeRoutes = require('./src/routes/employee.routes');
app.use('/api/v1/employees',employeeRoutes);


app.listen(port,()=>{
	console.log('Servidor Escuchando en el puerto: ',port);
});
