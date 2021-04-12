const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: ["GET", "POST"],
    path: "/hello",
    handler: (request, h) => {
      if (request.method == "get") {
        return "GET request";
      } else if (request.method == "post") {
        return "POST request";
      }
    },
  });

  await server.start();
  console.log("Server running on port 3000");
};

init();
