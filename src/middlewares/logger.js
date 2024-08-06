function logger(request, response, next) {
  console.log(
    `[${new Date().toISOString()}] Requested ${request.method} ${request.url}`
  );
  next();
}

const token = "SuperSecretToken";

function authorizeMentors(request, response, next) {
  if (request.headers.authorization === token) {
    next();
  } else {
    response.status(401).json({
      message: "You don't have any power here",
      success: false,
    });
  }
}

module.exports = {
  logger,
  authorizeMentors,
};
