export const validateEmail = (email: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? '' : 'Invalid email address.';
};

export const validatePhoneNumber = (phone: string): string => {
    const phoneRegex = /^[0-9+\-()]{7,}$/;
    return phoneRegex.test(phone) ? '' : 'Invalid phone number.';
};

export const validateRequired = (value: string | number): string => {
    const valueStr = typeof value === 'number' ? value.toString() : value.trim();
    return valueStr.length > 0 ? '' : 'This field is required.';
};

export const validateMinLength = (value: string, minLength: number): string => {
    return value.length >= minLength ? '' : `Must be at least ${minLength} characters long.`;
};

export const validateMaxLength = (value: string, maxLength: number): string => {
    return value.length <= maxLength ? '' : `Must be less than ${maxLength} characters long.`;
};

export const validateNumber = (value: string): string => {
    return !isNaN(Number(value)) && isFinite(Number(value)) ? '' : 'Invalid number.';
};

export const validateURL = (url: string): string => {
    const urlRegex = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d]{2,}(\/[\w\d-]*)*$/i;
    return urlRegex.test(url) ? '' : 'Invalid URL.';
};

export const validateCustom = (value: string, customCondition: (value: string) => boolean): string => {
    return customCondition(value) ? '' : 'Custom validation failed.';
};

export const validateEmpty = (value: string): string => {
    return value.trim().length === 0 ? 'This field cannot be empty.' : '';
};

export const validatePostCode = (postCode: string): string => {
    const postCodeRegex = /^[0-9]{5}$/;  // A simple example for 5-digit postal codes (like US)
    return postCodeRegex.test(postCode) ? '' : 'Invalid post code. It must be 5 digits.';
};

export const validateAddressLine = (address: string): string => {
    const AddressRegex = /^[a-zA-Z0-9\s,.-]+$/;  // Alphanumeric with common address symbols
    return AddressRegex.test(address) ? '' : 'Address contains invalid characters.';
};
