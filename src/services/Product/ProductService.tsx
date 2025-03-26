import BaseURL from '../apiClient';
import APIS_URL from '../APIs';

const Product_Methods = {
    getProduct(categoryId?: any) {
        return BaseURL.get(`${APIS_URL.PRODUCT_INHOUSE_GET_URL}${categoryId ? `/${categoryId}` : ''}`);
    },
    getProductToday() {
        return BaseURL.get(APIS_URL.PRODUCT_TODAYS_DEAL_GET_URL);
    },
    getProductFeatured() {
        return BaseURL.get(APIS_URL.PRODUCT_FEATURED_GET_URL);
    },

    seacrch_product(params:any) {
        return BaseURL.post(APIS_URL.SEARCH_PRODUCT , params);
    },
    getbestseller() {
        return BaseURL.get(APIS_URL.BEST_SELLER);
    },
    getSingleProduct(slug: any) {
        // if(!productId) return
        return BaseURL.get(`${APIS_URL.SINGLE_PRODUCT_GET_URL}/${slug}`);
    },


};

export default Product_Methods;
