import privateClient from "../client/private-client";
import publicClient from "../client/public-client";
const userEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  forgotPassword: "user/forgot-password",
  passwordUpdate: "user/update-password",
  setAvatar: "user/setAvatar",
};

const userApi = {
  signin: async ({ email, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.signin, {
        email,
        password,
      });
      return { response };
    } catch (err) {
      console.log(err);
      return { err };
    }
  },
  signup: async ({ email, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(userEndpoints.signup, {
        email,
        password,
        confirmPassword,
        displayName,
      });
      return { response };
    } catch (err) {
      console.log(err);
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.passwordUpdate, {
        password,
        newPassword,
        confirmNewPassword,
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  setAvatar: async ({ link }) => {
    try {
      const response = await privateClient.put(userEndpoints.setAvatar, {
        link,
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  
  forgotPassword : async ({email}) => {
    try {
        const response = await publicClient.post(userEndpoints.forgotPassword, { email });
        return { response };
    } catch (err) {
        return { err };
    }
  }
};

export default userApi;
