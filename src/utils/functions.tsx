import { Option } from "@/types/types";

export const handleInputChange =
  (
    setter: React.Dispatch<React.SetStateAction<string>>,
    validators: Array<(value: string) => string>,
    errorSetter: React.Dispatch<React.SetStateAction<string>>
  ) =>
  (value: string) => {
    const trimmedValue = value?.trim();
    setter(value);
    if (trimmedValue === '' && value !== '') {
      errorSetter('Input cannot contain only spaces.');
      return;
    }
    let errorMessages = '';
    for (const validate of validators) {
      const error = validate(trimmedValue);
      if (error) {
        errorMessages = errorMessages ? `${errorMessages} ${error}` : error;
      }
    }
    errorSetter(errorMessages);
  };
  export const handleSelectChange =
  (setter: React.Dispatch<React.SetStateAction<Option | null>>) =>
  (option: Option | null) => {
    setter(option);
    // setVatRateError('');
  };
  export const generateSlug = (input?:string) => {
    if (!input) return ""; // Return an empty string if input is undefined or null
    const lowercased = input.toLowerCase();
    const replaced = lowercased.replace(/[^a-z0-9\s-]/g, "");
    const hyphenated = replaced.replace(/\s+/g, "-").replace(/-+/g, "-");
    return hyphenated.replace(/^-+|-+$/g, "");
  };