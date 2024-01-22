export const APP_URL = "/";

export const getTestIdSelector = (selector: string) =>
  `[data-testid="${selector}"]`;
export const getNameSelector = (selector: string) => `[name="${selector}"]`;
export const getCustomerProfileSelector = (selector: string) =>
  getTestIdSelector(`customer-profile-${selector}`);

export const getFieldErrorMessage = (fieldName: string) =>
  `'${fieldName}' is required`;

export const SELECTOR_BUTTON_SUBMIT = 'button[type="submit"]';

export enum CustomerFieldNames {
  id = "id",
  name = "name",
  username = "username",
  email = "email",
  website = "website",
  phone = "phone",
  address = "address",
  company = "company",
}
