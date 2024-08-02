function logger(request, response, next) {
  console.log(
    `[${new Date().toISOString()}] Requested ${request.method} ${request.url}`
  );
  next();
}

module.exports = logger;
