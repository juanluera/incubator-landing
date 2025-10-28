import { FormConfig } from '@/types/form';

// Field structure only - no labels/placeholders
export const WAITLIST_FIELDS = [
  { key: 'name', type: 'text', required: true },
  { key: 'email', type: 'email', required: true },
  { key: 'school', type: 'text', required: true },
  { key: 'description', type: 'textarea', rows: 4 },
  { key: 'status', type: 'select', required: true },
  { key: 'cv', type: 'file', required: true, accept: '.pdf,.doc,.docx', maxSize: 2 },
];

export const NETWORK_FIELDS = [
  { key: 'name', type: 'text', required: true },
  { key: 'email', type: 'email', required: true },
  { key: 'company', type: 'text', required: true },
  { key: 'position', type: 'text', required: true },
  { key: 'experience', type: 'select', required: true },
  { key: 'industry', type: 'text', required: true },
  { key: 'mentorship_areas', type: 'textarea', rows: 4 },
  { key: 'motivation', type: 'textarea', rows: 4 },
  { key: 'cv', type: 'file', required: true, accept: '.pdf,.doc,.docx', maxSize: 2 },
];

// Simple configs
export const WAITLIST_CONFIG = {
  formType: 'waitlist',
  apiEndpoint: '/api/submit-application',
  fields: WAITLIST_FIELDS,
} as const;

export const NETWORK_CONFIG = {
  formType: 'network',
  apiEndpoint: '/api/submit-network',
  fields: NETWORK_FIELDS,
} as const;
