import Auth_Methods from './auth/AuthService';
import Categories_Method from './Categories/Categories';
import Country_Methods from './country/CountryService';
import Currency_Methods from './currency/currencyService';
import Orders_Methods from './Orders/OrdersService';
import Product_Methods from './Product/ProductService';
import Users_Methods from './users/usersService';
import Customer_Address_Method from "./addresses/Address"
import Wish_List_Method from "./wishlist/wishlist"
import Cart_Method from './cart/cartService';

const Service = {
    Auth_Methods, 
    Categories_Method,
    Country_Methods,
    Currency_Methods,
    Orders_Methods,
    Product_Methods,
    Users_Methods,
    Customer_Address_Method,
    Wish_List_Method,
    Cart_Method,
};

export default Service;
 