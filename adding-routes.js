const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/hello",
    handler: (request, h) => {
      return "Hello World!";
    },
  });

  server.route({
    method: "POST",
    path: "/post",
    handler: (request, h) => {
      return "Hello World! POST Request";
    },
  });

  await server.start();
  console.log("Server running on port 3000");
};

init();
