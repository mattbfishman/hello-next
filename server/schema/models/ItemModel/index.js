import Item from "../../../db/models/ItemModel.js";

const generateItemModel = () => ({

queries: {
    getAll: () =>
    new Promise(
      async (resolve, reject) =>
        await Item.find({}, (err, item) =>
          err ? reject(err) : resolve(item)
      )
    ),
    getOne: (id) =>
    new Promise(
      async (resolve, reject) =>
      await Item.findOne({ id: id }, (err, item) =>{
        err ? reject(err) : resolve(item)
      })
    )
  },
  mutations: {
    addItem: (item) =>
      new Promise((resolve, reject) =>
        new Item(item).save((err, item) => (err ? reject(err) : resolve(item)))
      ),
      modifyItem: (body) =>
      new Promise(
        async (resolve, reject) =>
          await Item.findByIdAndUpdate(body.id, body.query, (err, item) =>
            err ? reject(err) : resolve(item)
            )
      ),
      deleteItem: (id) =>
        new Promise(
          async (resolve, reject) =>
            await Item.findByIdAndDelete(id, (err, item) =>
              err ? reject(err) : resolve(item)
            )
       ),
  },
});

export default generateItemModel;
