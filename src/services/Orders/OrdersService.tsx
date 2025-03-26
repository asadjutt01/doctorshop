import BaseURL from '../apiClient';
import APIS_URL from '../APIs';

const Orders_Methods = {
    // getOrderList() {
    //     return BaseURL.get(APIS_URL.ORDER_GET_ALL_URL);
    // },
    // getOrderStatus(page: number, pageSize: number, status: string) {
    //     return BaseURL.get(`${APIS_URL.ORDER_GET_MANY}?page=${page}&pageSize=${pageSize}&order_status=${status}`);
    // },

    getNewOrders(data:any) {
        return BaseURL.post(APIS_URL.MY_ORDERS_URL , data);
    },
    getDeliveredOrders(data:any) {
        return BaseURL.post(APIS_URL.MY_Delivered_URL , data);
    },
    getCancelOrders(data:any) {
        return BaseURL.post(APIS_URL.My_CANCEL_ORDER,data);
    },
    getOrderDetail(id: number) {
        return BaseURL.get(`${APIS_URL.GET_USER_ORDER_DETAIL}/${id}`);
    },
};
export default Orders_Methods;
