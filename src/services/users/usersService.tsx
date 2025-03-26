import BaseURL from '../apiClient';
import APIS_URL from '../APIs';

const Users_Methods = {
    // getallusers() {
    //     return BaseURL.get(APIS_URL.USER_GET_ALL_URL);
    // },
    getUserList(data: any) {
        return BaseURL.post(APIS_URL.GET_USER_INFO, data);
    },
    getUserpharma(data: any) {
        return BaseURL.post(APIS_URL.GET_USER_PHARMA, data);
    },
    getCartMultiAddress(param:any) {
        return BaseURL.post(APIS_URL.MULTI_DELIVERY_ADDRESS,param);
    },
};
export default Users_Methods;