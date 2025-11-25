import express, { json } from "express";
import cors from "cors"
const PORT = 3000;
const app = express();

app.use( cors());

app.use( json());


app.get('/', (req, res) => {
    res.send('<h2> API </h2>')
})

app.get('/api/post', (req, res) => {
    const data = [
        { id: 1, title: "post 1", body: "detalle post 1"},
        { id: 2, title: "post 2", body: "detalle post 2"},
        { id: 3, title: "post 3", body: "detalle post 3"},
        { id: 4, title: "post 4", body: "detalle post 4"},
        { id: 5, title: "post 5", body: "detalle post 5"}

    ]

    res.json( {msg: 'ok', data}  );
})

app.listen(  PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`)
} )