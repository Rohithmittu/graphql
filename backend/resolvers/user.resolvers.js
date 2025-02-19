import { users } from "../dummyData/data.js";

const userResolver = {
  Query: {
    users: () => {  
      return users;
    },
    user: (_, { userId }) => { // here we can use four tpes-- parent,args,context,info
      return users.find((user) => user._id === userId);
    },
  },

  Mutation: {},
};

export default userResolver;
