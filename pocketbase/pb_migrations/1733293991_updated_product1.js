/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1797661439")

  // update collection data
  unmarshal({
    "name": "product"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1797661439")

  // update collection data
  unmarshal({
    "name": "product1"
  }, collection)

  return app.save(collection)
})
