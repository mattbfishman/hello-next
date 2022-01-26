import Item from "../../../db/models/ItemModel.mjs";

const generateItemModel = () => ({

queries: {
    getAll: () =>
    new Promise(
      async (resolve, reject) =>
        await Item.find({}, (err, item) =>
          err ? reject(err) : resolve(item)
      ).clone()
    ),
    getOne: (_id) =>
    new Promise(
      async (resolve, reject) =>
      await Item.findOne({ _id: _id }, (err, item) =>{
        err ? reject(err) : resolve(item)
      }).clone()
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
          await Item.findByIdAndUpdate(body._id, body.query, (err, item) =>
            err ? reject(err) : resolve(item)
            ).clone()
      ),
      deleteItem: (_id) =>
        new Promise(
          async (resolve, reject) =>
            await Item.findByIdAndDelete(_id, (err, item) =>
              err ? reject(err) : resolve(item)
            ).clone()
       ),
  },
});

export default generateItemModel;
