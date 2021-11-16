import { Router } from "express"
import { ProductCollection } from "../../../.."
import { PaginatedResponse } from "../../../../types/common"
import middlewares from "../../../middlewares"
import "reflect-metadata"

const route = Router()

export default (app) => {
  app.use("/collections", route)

  route.post("/", middlewares.wrap(require("./create-collection").default))
  route.post("/:id", middlewares.wrap(require("./update-collection").default))

  route.delete("/:id", middlewares.wrap(require("./delete-collection").default))

  route.get("/:id", middlewares.wrap(require("./get-collection").default))
  route.get("/", middlewares.wrap(require("./list-collections").default))

  return app
}

export const defaultAdminCollectionsFields = ["id", "title", "handle"]
export const defaultAdminCollectionsRelations = ["products"]

export type AdminCollectionsListRes = PaginatedResponse & {
  collections: ProductCollection[]
}

export type AdminCollectionsRes = {
  collection: ProductCollection
}

export * from "./create-collection"
export * from "./delete-collection"
export * from "./get-collection"
export * from "./list-collections"
export * from "./update-collection"