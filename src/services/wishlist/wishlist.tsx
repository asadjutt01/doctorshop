import BaseURL from '../apiClient';
import APIS_URL from '../APIs';



const Wish_List_Method = {
    addwishlist(data: any) {
        return BaseURL.post(APIS_URL.ADD_WISHLIST, data);
    },

    deletewishlist(data: any) {
        return BaseURL.post(APIS_URL.DELETE_WISHLIST, data);
    },
    getWhishList() {
        return BaseURL.get(APIS_URL.GET_WHISHlIST);
    },
};
export default Wish_List_Method;
