const express = require('express');
const app = express();
// Increased limit to handle larger JSON payloads
app.use(express.json({ limit: '50mb' }));
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data here
  // ...
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});