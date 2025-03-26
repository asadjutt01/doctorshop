import BaseURL from '../apiClient';
import APIS_URL from '../APIs';

const Cart_Method = {
    addToCart(params: any) {
        return BaseURL.post(APIS_URL.ADD_TO_CART, params);
    },
    getCartList(params: any) {
        return BaseURL.post(APIS_URL.CART_LIST, params);
    },
    getCartSummary(params: any) {
        return BaseURL.post(APIS_URL.CART_SUMMARY, params);
    },
    getCartCount(params: any) {
        return BaseURL.post(APIS_URL.CART_COUNT, params);
    },
    cartCheckout(params: any) {
        return BaseURL.post(APIS_URL.CART_CHECKOUT, params);
    },
    stripeCheckoutSession(params: any) {
        return BaseURL.post(APIS_URL.STRIPECHECKOUTSESSION, params);
    },
    stripePayment(params:any) {
        return BaseURL.post(APIS_URL.STRIPEPAYMENT, params);
    },
    stripeSuccess(params:any) {
        return BaseURL.post(APIS_URL.STRIPESUCCESS,params);
    },
    stripeCancel() {
        return BaseURL.post(APIS_URL.STRIPECANCEL);
    },
    tempUserIdUpdate(params:any) {
        return BaseURL.post(APIS_URL.TEMP_USER_ID_UPDATE,params);
    },
    cartQuantityUpdate(params:any) {
        return BaseURL.post(APIS_URL.CART_QUANTITY_UPDATE,params);
    },
    cartDelete(params:any) {
        return BaseURL.post(APIS_URL.CART_DELETE,params);
    },
};
export default Cart_Method;