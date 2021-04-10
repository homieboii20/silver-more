import { passwordEncryptor, validatePassword } from "../../utils/pw";
import { homeRepo, userRepo, accountRepo } from "../../repositories";
import Boom from "@hapi/boom";

const create = async (homeData) => {

  const user = await userRepo.findByID(homeData.user_id);
  if (!user) throw Boom.badRequest("No user could be found by this ID");
  const checkUser = await homeRepo.checkIfUserIsAnAdmin(homeData.user_id);
  if (checkUser) throw Boom.badRequest("You are already an admin of a Home account");
  const homeCreate = await homeRepo.createHome(homeData);
  const account = await accountRepo.findById(homeCreate.account);
  await userRepo.updateUsersHomeID(homeData.user_id, homeCreate._id);
  const result = {
    home_name: homeCreate.name,
    balance: account.balance.toPrecision(3)
  };
  return result;
};

const join = async (user_id, home_id) => {
  const home = await homeRepo.findByID(home_id);
  if (!home) throw Boom.notFound("No Home account could be found by this ID");
  const userExists = await userRepo.findByID(user_id);
  if (!userExists) throw Boom.notFound("No user could be found by this ID");
  const userIsAnAdmin = await homeRepo.checkIfUserIsAnAdmin(user_id);
  if (userIsAnAdmin) throw Boom.badRequest("You cannot join a Home account if you are and Admin");
  const userIsAMember = await home.members.includes(user_id);
  if (userIsAMember) throw Boom.badRequest("This user is already a member of this Home account");
  const addMember = await homeRepo.addAMembertoHomeAccount(user_id, home_id);
  return user_id;
};

const search = async (homeName) => {
  const homes = await homeRepo.findByName(homeName);
  if (homes.length === 0) throw Boom.notFound("No Home account could be found by this name");
  const result = [];
  for ( let i = 0; i < homes.length; i++ ) {
    const currentHome = {
      home_name: homes[i].name,
      home_id: homes[i]._id
    };
    result.push(currentHome);
  };
  return result;
};

export { create, search, join };
