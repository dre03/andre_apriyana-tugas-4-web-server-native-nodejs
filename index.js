const boot = require("./src/server");
const port = 3000;


const server = boot();


server.listen(port, () => {
  console.log(`Server run in http://localhost:${port}`);
});
