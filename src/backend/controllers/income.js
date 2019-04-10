import { Income } from "../models";

const IncomeController = {
  findAll: async () => {
    return await Income.findAll();
  },
  findById: async (id) => {
      try {
        const res = await Income.findById(id)
      } catch(e){
          return { status: 404, message: e}
      }
  },
  create: async (inc) => {
    try {
      const res = await Income.create(inc);
      return { status: 200, data: res };
    } catch (e) {
      return { status: 500, message: e };
    }
  }
};
