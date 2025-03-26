import BaseURL from "../apiClient";
import APIS_URL from "../APIs";

const Auth_Methods = {
  // login(params: any) {
  //     await BaseURL.get("/sanctum/csrf-cookie");
  //     return BaseURL.post(APIS_URL.AUTH_LOGIN, params);
  // },

  async login(params: any) {
    try {
      await BaseURL.get("/sanctum/csrf-cookie");

      // ✅ Step 2: Now make the login request
      const response = await BaseURL.post(APIS_URL.AUTH_LOGIN, params);
      return response; // Return data (user & token)
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  user_regiser(params: any) {
    return BaseURL.post(APIS_URL.USER_Register, params);
  },

  user_regiser_pharma(params: any) {
    return BaseURL.post(APIS_URL.PHARMA_CUSTOMER_ADD, params);
  },

  guest_user_pharma(params: any) {
    return BaseURL.post(APIS_URL.GUEST_CUSTOMER_ADD, params);
  },
  // register (params:any) {
  //   return BaseURL.get(APIS_URL.REGISTER_URL, params)
  // }
};

export default Auth_Methods;
