import { Home } from "../../models";
import { accountRepo } from ".././";
import Boom from "@hapi/boom";

const createHome = async (homeData) => {
  try {
    const account = await accountRepo.createAccount({ balance: 0 });
    const homeFormatter = {
      name: homeData.home_name,
      admins: homeData.user_id,
      members: homeData.user_id,
      account: account._id
    };
    const home = await Home.create(homeFormatter);
    return home;
  } catch (error) {
    throw new Error(error);
  }
};

const findByName = async (homeName) => {
  try {
    const home = await Home.find({ name: homeName });
    return home;
  } catch (error) {
    throw new Error(error);
  }
};

const checkIfUserIsAnAdmin = async (userID) => {
  try {
  const home = await Home.findOne({ admins: userID });
  return home;
} catch (error) {
  throw new Error(error);
}
};

const findByID = async (homeID) => {
  try {
    const home = await Home.findOne({ _id: homeID });
    return home;
  } catch (error) {
    throw new Error(error);
  }
};

const addAMembertoHomeAccount = async (userID, homeID) => {
  try {
    const updateHome = await Home.findOneAndUpdate( { _id: homeID }, { $push: { members: userID } }, { new: true } );
    return updateHome;
  } catch (error) {
    throw new Error(error);
  }
};
export default { createHome, findByName, checkIfUserIsAnAdmin, findByID, addAMembertoHomeAccount};
