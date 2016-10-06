var express = require('express');

class Index{

  run(){
    const expressApplication = this.createApplication();
    const config = this.getConfig();
    this.setupRouters(expressApplication, config);
    this.runExpressApplication(expressApplication, config);
  }

  getConfig(){
    return {
      port: process.env.PORT || 8080,
      accessToken: process.env.ACCESS_TOKEN || "ufeiuqfwcn23233me_f2",
    }
  }

  createApplication(){
    const expressApplication = express();
    return expressApplication;
  }

  setupRouters(expressApplication, config) {
    expressApplication.get('/location', this.locationRouteHandler);
  }

  locationRouteHandler(req, res) {

    const accessToken = req.query.accessToken || null;
    const ip = req.query.ip || null;

    if(this._isValidAccessToken(accessToken,config)){
      res.send("Not implemented! Ip: " + ip);
    }

  }

  _isValidAccessToken(accessToken, config) {
    return (config.accessToken && accessToken == config.accessToken);
  }

  runExpressApplication(expressApplication, config){
    expressApplication.listen(config.port, () => {
      console.log('Example app listening on port: ', config.port);
    });
  }


}

const indexServer = new Index();
indexServer.run();
