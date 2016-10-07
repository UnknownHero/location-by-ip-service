const express = require('express');
const geoip = require('geoip-lite');

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
      let geoInfo = geoip.lookup(ip);
      this._sendResult(geoInfo,response);
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

  _sendResult(geoInfo, response) {
    let formattedResult = this._formatResult(geoInfo);
    response.statusCode = formattedResult.code;
    response.json(formattedResult);
  }

  _formatResult(data){
    let resultObject;
    if(!data){
      resultObject = this._getResponseObject(404 , {}, "No one country find", false)
    }else{
      resultObject = this._getResponseObject(200 , data, "", true)
    }

    return resultObject;
  }

  _getResponseObject(code,data,message,result){
    return {
      result: result,
      message: message,
      code: code,
      data: data
    }
  }
}

const indexServer = new Index();
indexServer.run();
