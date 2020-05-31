require("@babel/register")({
    presets: ["@babel/preset-env"]
  });
  
  // Import the rest of our application.
const app = require('./express/server');
app.listen(3000, () => console.log('Local app listening on port 3000!'));
