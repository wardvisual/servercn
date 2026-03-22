import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import env from "../configs/env";
import fs from "node:fs";

const swaggerDocument = JSON.parse(
  fs.readFileSync(new URL("../../docs/swagger.json", import.meta.url), "utf-8")
);

export const setupSwagger = (app: Express) => {
  if (env.NODE_ENV !== "development") return;

  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
