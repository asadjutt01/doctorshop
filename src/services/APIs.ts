const APIS_URL = {
  /* ------------------------------  AUTH  -------------------------------- */
  // LOGIN_URL: '/auth/login',
  // OTP_VERIFY_URL: '/otpVerification',
  // /* ------------------------------  USER  -------------------------------- */
  // PROFILE_UPDATE_URL: '/profile/update',
  // USER_GET_ALL_URL: '/user/all',
  // /* ------------------------------  COUNTRY  -------------------------------- */
  // COUNTRY_LIST_URL: '/countries/all',
  // /* ------------------------------  CUSTOMER  -------------------------------- */
  // // CUSTOMER_LIST_URL: '/customer/list',
  // // CUSTOMER_ADD_URL: '/customer/add',
  // // CUSTOMER_GROUP_LIST_URL: '/customer/list',
  // // CUSTOMER_GROUP_ADD_URL: '/customer/add',

  // /* ------------------------------  Customer Group  -------------------------------- */
  // // Add Addresses
  // CUSTOMER_ADD_URL: '/customerGroupAddress/add',
  // CUSTOMER_GET_AND_UPDATE_URL: '/customer_group_address/update',
  // CUSTOMER_GET_ALL_URL: '/customerGroupAddress/all',
  // // Add Customer Groups
  // CUSTOMER_GROUP_ADD_URL: '/customer_group/create',
  // // Add Customer Group Addresses
  // CUSTOMER_GROUP_ADDREEES_ADD_URL: '/customer_group_address/create',
  // // update Customer Group Addresses
  // CUSTOMER_GROUP_ADDRESS_GET_AND_UPDATE_URL: '/customer_group_address/update',
  // CUSTOMER_GROUP_GET_AND_UPDATE_URL: '/customer_group/update',
  // // Get All
  // CUSTOMER_GROUP_GET_ALL_URL: '/customer_group/all',
  // // delete coustmers
  // CUSTOMER_DELETE_URL: '/customer_group/delete',
  // CUSTOMER_GET_MANY_URL: '/customer_group/many',

  // /* ------------------------------  Customer Profile  -------------------------------- */
  // CUSTOMER_PROFILE_GET_ALL_URL: '/customer_profile/all',
  // /* ------------------------------  Customer Type  -------------------------------- */
  // CUSTOMER_TYPE_GET_ALL_URL: '/customer_type/all',
  // /* ------------------------------  Customer Type  -------------------------------- */
  // BUSINESS_STRUCTURE_GET_ALL_URL: '/business_structure/all',
  // /* ------------------------------  International Shipping Terms -------------------------------- */
  // INTERNATIONAL_SHIPPING_TERMS_GET_ALL_URL: '/international_shipping_terms/all',
  // /* ------------------------------  VAt rate -------------------------------- */
  // VAT_RAT_GET_ALL_URL: '/vat_rate/all',
  // /* ------------------------------  Account Type -------------------------------- */
  // ACCOUNT_TYPE_GET_ALL_URL: '/account_type/all',
  // /* ------------------------------  Account Type -------------------------------- */
  // CURRENCY_LIST_URL: '/currencies/all',
  // /* ------------------------------  Health Organization Type -------------------------------- */
  // HEALTH_ORGANIZATION_LIST_GET_ALL_URL: '/health_organization_type/all',
  // /* ------------------------------  Title Type -------------------------------- */
  // TITLE_LIST_GET_ALL_URL: '/title/all',
  // /* ------------------------------  License  Type -------------------------------- */
  // LICENSE_TYPE_LIST_GET_ALL_URL: '/license_type/all',
  // /* ------------------------------  Website  List -------------------------------- */
  // WEBSITE_LIST_GET_ALL_URL: '/website/all',
  // /* ------------------------------  Companies  -------------------------------- */
  // // Add companies
  // COMPANIES_ADD_URL: '/companies/create',
  // COMPANIES_BUSINESS_ADDRESSES_ADD_URL: '/business_addresses/create', // step 2,5,6
  // COMPANIES_CONTACT_ADD_URL: '/companies_contact/create',
  // COMPANIES_BANK_DETAILS_ADD_URL: '/bank_details/create',
  // COMPANIES__REGULATORY_ADD_URL: '/companies_regulatories/create',
  // // Update Companies
  // COMPANIES_GET_AND_UPDATE_URL: '/companies/update',
  // COMPANIES_BUSINESS_ADDRESSES_GET_AND_UPDATE_URL: '/business_addresses/update',
  // COMPANIES_CONTACT_GET_AND_UPDATE_URL: '/companies_contact/update',
  // COMPANIES_BANK_DETAILS_GET_AND_UPDATE_URL: '/bank_details/update',
  // COMPANIES_REGULATORY_GET_AND_UPDATE_URL: '/companies_regulatories/update',
  // // Get All Companies
  // COMPANIES_GET_ALL_URL: '/companies/all',
  // // delete compnty
  // COMPANIES_DELETE_URL: '/companies/delete',

  // // Add compny contact url

  // // Add Contact
  // CONTACT_ADD_URL: '/companies_contact/create',
  // CONTACT_GET_AND_UPDATE_URL: '/contact',
  // CONTACT_GET_ALL_URL: '/contact/all',
  // COMPANY_REGULATORY_GET_ALL_URL: 'companiesregulatories/all',
  // BANK_DETAILS_GET_ALL_URL: '/bankdetail/all',
  // BUSINESS_ADDRESSES_GET_ALL_URL: '/businessaddress/all',
  // /* ------------------------------  Subsidiary  -------------------------------- */
  // SUBSIDIARY_ADD_URL: '/subsidiary/create',
  // SUBSIDIARY_GET_AND_UPDATE_URL: '/subsidiary/update',
  // SUBSIDIARY_GET_ALL_URL: '/subsidiary/all',

  // /* ------------------------------  Category  -------------------------------- */
  // CATEGORY_GET_ALL: '/category/all',
  // CATEGORY_ADD_URL: '/category/create',
  // CATEGORY_GET_AND_UPDATE_URL: '/category/update',
  // CATEGORY_DELETE_URL: '/category/delete',
  // /* ------------------------------  Manufacturer-------------------------------- */
  // Manufacturer_ADD_URL: '/manufacture/create',
  // Manufacturer_GET_ALL_URL: '/manufacture/all',
  // Manufacturer_GET_AND_UPDATE_URL: '/manufacture/update',
  // Manufacturer_Delete_URL: '/manufacture/delete',
  // MANUFACTURER_UPLOAD_URL: '/manufacture/upload',
  // /* ------------------------------  Supplier -------------------------------- */
  // // Get
  // SUPPLIER_GET_ALL_URL: '/supplier/all',
  // // Delete suppliers
  // SUPPLIER_DELETE_URL: '/supplier/delete',
  // // Upload
  // SUPPLIER_UPLOAD_URL: '/supplier/upload',
  // // Add
  // SUPPLIER_ADD_URL: '/supplier/create',
  // SUPPLIER_CONTACT_ADD_URL: '/supplier_contact/create',
  // SUPPLIER_ADDRESSES_ADD_URL: '/supplier_addresses/create',
  // SUPPLIER_REGULATORY_ADD_URL: '/supplier_regulatory/create',
  // SUPPLIER_RESPONSIBLE_PERSON_ADD_URL: 'supplier_responsible_person/create',
  // SUPPLIER_BANK_DETAIL_ADD_URL: '/supplier_bank_detail/create',
  // // Update
  // SUPPLIER_GET_AND_UPDATE_URL: '/supplier/update',
  // SUPPLIER_CONTACT_GET_AND_UPDATE_URL: '/supplier_contact/update',
  // SUPPLIER_ADDRESSES_GET_AND_UPDATE_URL: 'supplier_addresses/update',
  // SUPPLIER_REGULATORY_GET_AND_UPDATE_URL: '/supplier_regulatory/update',
  // SUPPLIER_RESPONSIBLE_PERSON_GET_AND_UPDATE_URL: '/supplier_responsible_person/update',
  // SUPPLIER_BANK_DETAIL_GET_AND_UPDATE_URL: '/supplier_bank_detail/update',

  // /* ------------------------------  product-------------------------------- */
  // PRODUCT_ADD_URL: '/product/create',
  // PRICING_ADD_URL: '/product_stock/create',
  // VARIATIONS_ADD_URL: '/product_variation/create',
  // BARCODE_ADD_URL: '/product_barcodes/create',
  // DIMENSIONS_ADD_URL: '/product_dimensions/create',
  // variaition_GET_AND_UPDATE_URL: '/product_variation/all',
  // product_GET_AND_UPDATE_URL: '/product/all',
  // // updtae
  // PRODUCT_UPDATE_URL: '/product/update',
  // PRODUCT_PRICING_UPDATE_URL: '/product_stock/update',
  // PRODUCT_VARIATION_UPDATE_URL: '/product_variation/update',
  // PRODUCT_BARCODES_UPDATE_URL: '/product_barcodes/update',
  // PRODUCT_DIMENSIONS_UPDATE_URL: '/product_dimensions/update',
  // // Delete
  // PRODUCT_DELETE_URL: '/product/delete',
  // // Upload
  // PRODUCT_UPLOAD_URL: '/product/upload',
  // /* ------------------------------ Brand-------------------------------- */
  // BRAND_ADD_URL: '/brand/create',
  // BRAND_GET_ALL: '/brand/all',
  // BRAND_UPDATE_URL: '/brand/update',
  // BRAND_Delete_URL: '/brand/delete',
  // BRAND_UPLOAD_URL: '/brand/upload',
  // /* ------------------------------ Warehouse -------------------------------- */
  // WAREHOUSE_GET_ADD_URL: '/ware_house/create',
  // WAREHOUSE_GET_AND_UPDATE_URL: '/ware_house/update',
  // WAREHOUSE_GET_ALL_URL: '/ware_house/all',
  // WAREHOUSE_DELETE_URL: '/ware_house/delete',
  // /* ------------------------------ pos -------------------------------- */
  // ORDERS_ADD_URL: '/orders/create',
  // CART_ADD_URL: '/cart/create',
  // CART_GET_MANY: '/cart/many',
  // ORDERS_UPDATE_URL: '/orders/update',
  // ORDERS_DELETE_URL:'/orders/delete',
  // ORDER_GET_MANY: '/orders/many',
  // /* ------------------------------ Customer Pricing -------------------------------- */
  // CUSTOMER_PRICING_UPLOAD_URL: '/customer_pricing/upload',
  // CUSTOMER_PRICING_GET_MANY_URL: '/customer_pricing/many',
  // CUSTOMER_PRICING_SEARCH_URL: '/customer_pricing/search',
  // CUSTOMER_PRICING_UPDATE_URL: '/customer_pricing/update',
  // /* ------------------------------ Order -------------------------------- */
  // ORDER_GET_ALL_URL: '/orders/all',
  /* ------------------------------ products -------------------------------- */
  PRODUCT_INHOUSE_GET_URL: "/products/inhouse",
  PRODUCT_TODAYS_DEAL_GET_URL: "/products/todays-deal",
  PRODUCT_FEATURED_GET_URL: "/products/featured",
  SINGLE_PRODUCT_GET_URL: "/single_products",
  BEST_SELLER: "/products/best-seller",

  /* ------------------------------ Product_Search -------------------------------- */

  SEARCH_PRODUCT: "/products/search",

  /* ------------------------------ category -------------------------------- */
  PRODUCT_CATEGORY_ALL_GET_URL: "/products/all-category",
  PRODUCT_CATEGORY_SUB_GET_URL: "/products/sub-category",
  PRODUCT_CATEGORY_SUB_SUB_GET_URL: "/products/sub-sub-category",
  PRODUCT_CATEGORY_SUB_GET_SPECIFIC_URL: "/products/sub-categorySpecific",

  /* ------------------------------ user info -------------------------------- */
  GET_USER_INFO: "/credit-customer/info",
  GET_USER_PHARMA: "/pharma-customer/info",

  /* ------------------------------ user Register -------------------------------- */

  GET_USER_ORDER_DETAIL: "order/view",

  /* ------------------------------ user Register -------------------------------- */

  USER_Register: "/credit-customer/store",
  USER_REGISTER_UPDATE: "/credit-customer/update",

  /* ------------------------------ cusrtomer delivrey address -------------------------------- */

  CUSTOMER_DELIVERY_ADDRESS_ADD_URL: "/delivery-form-store",
  CUSTOMER_DELIVERY_ADDRESS_UPDATE_URL: "updateDelivery",

  /* ------------------------------ add pharma_customer -------------------------------- */
  PHARMA_CUSTOMER_ADD: "/pharma-customer/store",
  PHARMA_CUSTOMER_UPDATE: "/pharma-customer/update",

  /* ------------------------------ wishlist -------------------------------- */
  ADD_WISHLIST: "/wishlists-add-product",
  DELETE_WISHLIST: "/wishlists-remove-product",
  GET_WHISHlIST: "/wishlists",

  /* ------------------------------ guest regiester -------------------------------- */
  GUEST_CUSTOMER_ADD: "/guest-customer/store",

  /* ------------------------------ customers Orders -------------------------------- */
  MY_ORDERS_URL: "/order/new",
  MY_Delivered_URL: "/order/delivered",
  My_CANCEL_ORDER: "/order/cancel",

  /* ------------------------------ Auth -------------------------------- */
  AUTH_LOGIN: "/auth/login",
  VERIFY:"/verify",
  CHECK_APPROVED_PHARMA:"/check_approved_pharma",
  FORGET_PASSWORD:"/password/forget_request",
  FORGET_PASSWORD_VERIFY_CODE:"/password/verifyCode",
  FORGET_PASSWORD_CONFIRM_RESET:"password/confirm_reset",
  /* ------------------------------ cart -------------------------------- */
  ADD_TO_CART: "/carts/add",
  CART_LIST: "/carts",
  CART_SUMMARY: "/cart-summary",
  CART_CHECKOUT: "/order/store",
  CART_PROCESS: "/carts/process",
  CART_CHANGE_QUANTITY: "/carts/change-quantity",
  CART_COUNT: "/cart-count",
  MULTI_DELIVERY_ADDRESS: "/multi-delivery",
  STRIPECHECKOUTSESSION: "/payment/stripe/create-checkout-session",
  STRIPEPAYMENT: "/payment",
  STRIPESUCCESS: "payment/stripe/success",
  STRIPECANCEL: "payment/stripe/cancel",
  TEMP_USER_ID_UPDATE: "user_id_update",
  CART_QUANTITY_UPDATE: "carts/change-quantity",
  CART_DELETE: "carts/delete",
  PAYMENT_ORDER:"payment_order",

  /* ------------------------------  Currencies  -------------------------------- */
  CURRENCIES_LIST: "/currencies",
  // AUTH_REGISTER: '/auth/register',
  // CATEGORY_LIST: '/categories',
  // ORDER_LIST: '/orders',
  // USER_PROFILE: '/users/profile',
};

export default APIS_URL;
