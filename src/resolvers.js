const { getUsers } = require('./apiClient');

const resolvers = {
  Query: {
    users: async () => {
      console.log("🟡 Entrando al resolver...");
      const result = await getUsers();
      console.log("🟢 Resultado getUsers:", result);
      return result;
    }
  }
};

module.exports = resolvers;

