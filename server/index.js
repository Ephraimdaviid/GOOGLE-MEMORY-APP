import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));


app.use(cors());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
});

const postSchema = new mongoose.Schema({
  form_title: String,
  form_message: String,
  form_tags: String,
  form_creator: String
});

const Model = mongoose.model('Posts_Model', postSchema);


app.post('/posts/create',  async (req, res) => {
     try {
      const post = await Model.create(req.body);

      console.log(post);


      res.json(post);
     } catch (error) {
       console.error(error);
     }
});

app.get('/post/get_data', async (req, res) => {
  try {
    const posts = await Model.find()
    
    res.json(posts);
  
 } catch (error) {
    console.error(error);
 }   
  });  

const PORT = 5000;

const CONNECTION_URI = 'mongodb+srv://memoryapp:memoryapp@cluster0.70wzj78.mongodb.net/?retryWrites=true&w=majority'


mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))
  )
  .catch((error) => console.log(error));
