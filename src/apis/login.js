import { request } from "../config/config";

export const doLogin = async (email, password) => {
  const res = await request.post(
    "/login",
    {},
    {
      params: {
        email: email,
        password: password,
      },
    }
  );
  return res;
};
