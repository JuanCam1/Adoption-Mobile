import { instance } from "@/libs/axios";

export const registerUserService = (data: RegisterModelI) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      if (key === "picture") {
        formData.append("picture", value);
      } else {
        formData.append(key, value);
      }
    }
  });

  return instance.post<SendResponseModelI<UserModelI>>(
    "/auth/register",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );
};
