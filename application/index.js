var express = require('express');

class Index {

  constructor() {
    this.expressApplication = this.createApplication();
    this.config = this.getConfig();
  }

  run() {
    this.setupMiddlewares();
    this.setupRouters();
    this.runExpressApplication();
  }

  createApplication() {
    return express();
  }

  getConfig() {
    return {
      port: process.env.PORT || 8080,
      accessToken: process.env.ACCESS_TOKEN || "ufeiuqfwcn23233me_f2",
    }
  }

  setupRouters(expressApplication, config) {
    this.expressApplication.get('/location', this.locationRouteHandler.bind(this));
  }

  locationRouteHandler(request, response) {

    const accessToken = request.query.accessToken || null;
    const ip = request.query.ip || null;

    if (this._isValidAccessToken(accessToken)) {
      response.send("Not implemented! Ip: " + ip);
    }else{
      response.sendStatus(401);
    }

  }

  _isValidAccessToken(accessToken) {
    return (this.config.accessToken && accessToken == this.config.accessToken);
  }

  setupMiddlewares() {
  }

  runExpressApplication() {
    this.expressApplication.listen(this.config.port, () => {
      console.log('Example app listening on port: ', this.config.port);
    });
  }

}

const indexServer = new Index();
indexServer.run();
