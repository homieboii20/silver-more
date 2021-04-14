import { categoryRepo } from "../../repositories";
import Boom from "@hapi/boom";

const create = async (categoryData) => {

  const category = await categoryRepo.findByName(categoryData.name);
  if (category) throw Boom.badRequest("This category already exists");
  const weight = categoryData.totalWeight/categoryData.pcs;
  const price = categoryData.pricePerGram*weight;
  const createData = {
    name: categoryData.name,
    pcs: categoryData.pcs,
    totalWeight: categoryData.totalWeight,
    averageWeight: weight,
    pricePerGram: categoryData.pricePerGram,
    pricePerPc: price
  };
  const categoryCreate = await categoryRepo.createCategory(createData);
  return categoryCreate;
};

export { create };
