import BaseURL from '../apiClient';
import APIS_URL from '../APIs';

const Customer_Address_Method = {
    addadress_customer(data: any) {
        return BaseURL.post(APIS_URL.CUSTOMER_DELIVERY_ADDRESS_ADD_URL, data);
    },
    address_update(data: any) {
        return BaseURL.post(APIS_URL.CUSTOMER_DELIVERY_ADDRESS_UPDATE_URL, data);
    },

};
export default Customer_Address_Method;
