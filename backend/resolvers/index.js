import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolvers.js";
import transactionResolver from "./transaction.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, transactionResolver]);

export default mergeResolvers;
