export const itemQueries = {
    getItems: async (parent, args, context) =>
        await context.models.Item.queries.getAll(),
    getItem: async (parent, args, context) =>
        await context.models.Item.queries.getOne(
            JSON.parse(JSON.stringify(args._id))
        ),
};

export const itemMutations = {
    addItem: async (parent, args, context) =>
    await context.models.Item.mutations.addItem(
        JSON.parse(JSON.stringify(args.item))
    ),
    modifyItem: async (parent, args, context) =>
    await context.models.Item.mutations.modifyItem(
        JSON.parse(JSON.stringify(args))
    ),
    deleteItem: async (parent, args, context) =>
    await context.models.Item.mutations.deleteItem(
        JSON.parse(JSON.stringify(args._id))
    ),
};

