import { request } from "../config/config";

export const fetchMyCourse = async (user_id) => {
  const res = await request.get(`/user/${user_id}/courses/active`);
  return res;
};
