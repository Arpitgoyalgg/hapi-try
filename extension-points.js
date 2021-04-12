const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.ext("onRequest", function (request, h) {
    request.setUrl("/test");
    return h.continue;
  });

  server.route({
    method: "GET",
    path: "/test",
    handler: (request, h) => {
      return "You were redirected here test!";
    },
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "home";
    },
  });

  await server.start();
  console.log("Server running on port 3000");
};

init();
