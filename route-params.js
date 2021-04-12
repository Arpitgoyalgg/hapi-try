const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/hello/{first_name}/{age}",
    handler: (request, h) => {
      const name = request.params.first_name;
      const age = request.params.age;
      return `Hello ${name}! Your age is ${age}`;
    },
  });

  await server.start();
  console.log("Server running on port 3000");
};

init();
