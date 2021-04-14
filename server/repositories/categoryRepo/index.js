import { Category } from "../../models";

const createCategory = async (categoryData) => {
  try {
    const category = await Category.create(categoryData);
    return category;
  } catch (error) {
    throw new Error(error);
  }
};

const findByName = async (categoryName) => {
  try {
    const category = await Category.findOne({name: categoryName});
    return category;
  } catch (error) {
    throw new Error(error);
  }
};
export default { createCategory, findByName };
