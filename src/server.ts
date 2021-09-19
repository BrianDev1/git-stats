import * as http from "http";
import express, { Express } from "express";
import bodyParser from "body-parser";
import { search } from "./controller/search";
import { Get } from "./utils/decorators";

export class Server {
  private _app: Express;
  private _server: http.Server;

  get server(): http.Server {
    return this._server;
  }
  constructor() {
    this._app = express();
    this._app = this._app.set("port", process.env.PORT || 3004);

    this.configMiddleware();
  }

  public configMiddleware() {
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: true }));

    // CORS
    this._app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
      );
      next();
    });
  }

  // Server Routes
  @Get("/search")
  public search() {
    this._app.use(search);
  }

  public start() {
    const port = this._app.get("port");
    this._server = this._app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  }
}
