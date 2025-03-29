import BaseURL from '../apiClient';
import APIS_URL from '../APIs';

const Categories_Method = {
    getCategoryAll() {
        return BaseURL.get(APIS_URL.PRODUCT_CATEGORY_ALL_GET_URL);
    },
    getCategorySub(id: number) {
        return BaseURL.get(`${APIS_URL.PRODUCT_CATEGORY_SUB_GET_URL}/${id}`);
    },
    getCategorySubSpecific() {
        return BaseURL.get(`${APIS_URL.PRODUCT_CATEGORY_SUB_GET_SPECIFIC_URL}`);
    },
    getCategorySubSub(id: number) {
        return BaseURL.get(`${APIS_URL.PRODUCT_CATEGORY_SUB_SUB_GET_URL}/${id}`);
    },
    // addcategory(params: any) {
    //     return BaseURL.post(APIS_URL.CATEGORY_ADD_URL, params);
    // },
    // updateCategory(params: any, id: number) {
    //     return BaseURL.put(`${APIS_URL.CATEGORY_GET_AND_UPDATE_URL}/${id}`, params);
    // },
    // deletcategory(id: number) {
    //     return BaseURL.delete(`${APIS_URL.CATEGORY_DELETE_URL}/${id}`);
    // },
};
export default Categories_Method;
