import { auth } from "@clerk/nextjs";

const adminsIds = [
  "user_2bwzNdXtTRhNb3dPw6Jkwv7wqi5",
  "user_2bxUM1h5zK5GL7Uc5OTk6yZvO1O",
];

export const isAdmin = () => {
  const { userId } = auth();
  if (!userId) return false;
  return adminsIds.indexOf(userId) !== -1;
};
