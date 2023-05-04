import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/task.js';
 

const app= express();
const PORT= 5000;

app.use (bodyParser.json());
app.use('/task',taskRoutes);
app.get('/',(req,res)=>res.send("hello"));
app.listen(PORT,()=> console.log(`ss:${PORT}`));