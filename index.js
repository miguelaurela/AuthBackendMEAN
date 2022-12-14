const express =require('express');
const cors =require('cors');
require('dotenv').config();
console.log(process.env);

//crear el servidor/aplicación de express
const app=express();


app.use(cors());

//Lectura y parseo del body
app.use(express.json()) 
//Rutas
app.use('/api/auth',require('./routes/auth'))

app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})