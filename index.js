// Import required components from ServerFire
const {Server, bodyparser, Router, route, generateMiddleware, tools} = require('serverfire');

// Create router middleware
const router = new Router();
const r = route(router);

let pings = 0;


// Create server
const server = new Server();
server.create();

// Add CORS; ideal for API development
server.use(tools.cors);
// Add bodyparser for parsing POST requests
server.use(bodyparser);
// Include router in server
server.use(r);



router.static('/', __dirname + '/public');

router.all("/ping", (req, res) => {
  pings++;
  res.send(`Haha! Congratulations on finding this fun little thing. Since the last server restart, including your ping, there ${pings==1?"has":"have"} been ${pings} ping${pings==1?"":"s"} to this API!`);
})


// Start server
server.listen(3000);
