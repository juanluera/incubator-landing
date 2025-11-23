export interface FormField {
  key: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'file';
  required?: boolean;
  accept?: string;
  maxSize?: number;
  rows?: number;
}

export interface FormConfig {
  formType: string;
  apiEndpoint: string;
  fields: FormField[];
}

export interface CustomFormData {
  [key: string]: string;
}
