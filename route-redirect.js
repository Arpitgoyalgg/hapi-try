const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "You were redirected here!";
    },
  });

  server.route({
    method: "GET",
    path: "/home",
    handler: (request, h) => {
      return h.redirect("/");
    },
  });

  await server.start();
  console.log("Server running on port 3000");
};

init();
