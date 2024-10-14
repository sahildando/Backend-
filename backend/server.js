import express from 'express';


const app = express();
app.use(express.static('dist'));

//  app.get('/', (req, res) => {
//     res.send('Server is ready');
//  });

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'This is a joke'
    },
    {
      id: 1,
      title: 'Another joke',
      content: 'This is another joke'
    }
  ];
  res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);

  }
);