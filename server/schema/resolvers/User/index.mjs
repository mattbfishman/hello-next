export const userMutations = {
    login: async (parent, args, context) =>
    await context.models.User.mutations.login(
        JSON.parse(JSON.stringify(args.user))
    ),
    register: async (parent, args, context) =>
    await context.models.User.mutations.register(
        JSON.parse(JSON.stringify(args.user))
    )
};

