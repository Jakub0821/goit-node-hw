import { subscribe } from "../app";

const Contact = require("./schemas/contacts");

const listContacts = async () => {
  return Contact.find();
};

const getContactById = async (contactId) => {
  return Contact.findOne({ _id: contactId });
};

const addContact = async (contact) => {
  return Contact.create(contact);
};

const removeContact = async (contactId) => {
  return Contact.findOneAndDelete({ _id: contactId });
};

const updateContact = async (contactId, body) => {
  return Contact.findByIdAndUpdate({ _id: contactId }, body, { new: true });
};

const updateStatusContact = async (contactId, body) => {
  return Contact.findByIdAndUpdate({ _id: contactId }, body, { new: true });
};
const addUser = async (user) => {
  return Users.create(user);
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
  addUser,
};

export const addUser = async (req, res, next) => {
  try {
    const { email, password } => req.body;

    const validaterResult = schema.validate(req.body);
    if (validateResult.error || !req.body)
     return res.status(400).json({ massege: validateResult.error.massege });

     const isEmailTaken = await findUserByEmail(email);
     if (isEmailTaken) res.status(409).json("Email in use");

     const hashedPassword = await hashedPassword(password);

     const result = awiat createUser({ password: hashedPassword, email });
     res.status(201).json({ ResponseBody: body});
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try{
   const { email, password } = req.body;

   const validaterResult = schema.validate(req.body);
   if (validaterResult.error || !req.body)
    return res.status(400).json({ massege: validaterResult.error.massege });

    const user = await findUserByEmail(email);

    const isValidPassword = await validatePassword(password, user.password);
    if (!user || !isValidPassword)
     return res.status(401).json("Email or password is wrong");

    const payloud = { id: user._id, email: user.email };
    const token = jwt.sign(payloud, MONGODB_URI);
    const updateToken(user._id, { token });

    res,status(200).json({ token, user });
  } catch (error) {
    next(error);
  }
};

export const logout = anyns (req, res, next) => {
  try{
    const token = null;
    await updateToken(user,_id, { token });
    return res.status(204),json({ massenge: "You have succesfull logout" });
 } catch (error) {
   next(error);
 }
};

export const currentUser = ansyns (req, res, next) => {
  try{
    return res.status(200).json({
      user: {
        email: user.email,
        subscription: user.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};