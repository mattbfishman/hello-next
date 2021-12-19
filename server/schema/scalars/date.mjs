import { GraphQLScalarType, Kind } from "graphql";

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value){
        return value.getTime();
    },
    parseValue(value){
        return new Date(value);
    },
    parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); 
    } else if(ast.kind === Kind.STRING){
        console.log("HERE");
        return new Date(ast.value);
    }
    return null; 
    },
});

export default dateScalar;