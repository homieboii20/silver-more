import { User } from "../../models";
import { Home } from "../../models";

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const findByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const findByID = async (_id) => {
  try {
    const user = await User.findOne({ _id });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const updateUsersHomeID = async (userID, homeID) => {
  try {
    const user = await User.findOneAndUpdate({ _id: userID }, { home: homeID }, { new: true});
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
export default { createUser, findByEmail, findByID, updateUsersHomeID};
