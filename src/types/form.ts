// Form field types
export interface FormField {
  key: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'file';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rows?: number;
  accept?: string;
  maxSize?: number; // in MB
}

export interface FormConfig {
  formType: 'waitlist' | 'network';
  apiEndpoint: string;
  fields: FormField[];
}

export interface CustomFormData {
  [key: string]: string;
}
