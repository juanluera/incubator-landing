'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FormConfig, CustomFormData } from '@/types/form';

interface ApplicationFormProps {
  config: FormConfig;
}

export default function ApplicationForm({ config }: ApplicationFormProps) {
  const t = useTranslations(`forms.${config.formType}`);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<CustomFormData>(() => {
    const initialData: CustomFormData = {};
    config.fields.forEach(field => {
      if (field.type !== 'file') {
        initialData[field.key] = '';
      }
    });
    return initialData;
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileField = config.fields.find(f => f.type === 'file');
      if (fileField) {
        // Validate file type
        if (fileField.accept && !fileField.accept.split(',').some(type =>
          file.type === type.trim() || file.name.toLowerCase().endsWith(type.trim().replace('*', ''))
        )) {
          alert('Please upload a valid file type');
          return;
        }

        // Validate file size
        if (fileField.maxSize && file.size > fileField.maxSize * 1024 * 1024) {
          alert(`File size must be less than ${fileField.maxSize}MB`);
          return;
        }
      }
      setCvFile(file);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();

      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      // Append file if exists
      if (cvFile) {
        const fileField = config.fields.find(f => f.type === 'file');
        if (fileField) {
          submitData.append(fileField.key, cvFile);
        }
      }

      const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form
        const resetData: CustomFormData = {};
        config.fields.forEach(field => {
          if (field.type !== 'file') {
            resetData[field.key] = '';
          }
        });
        setFormData(resetData);
        setCvFile(null);
      } else {
        alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e8f5e9' }}>
            <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-3 text-black">
            {t('successTitle')}
          </h2>
          <p className="text-lg text-black">
            {t('successMessage')}
          </p>
        </div>
        <div className="mt-8 p-4 rounded-lg border" style={{ backgroundColor: '#e3f2fd', borderColor: '#90caf9' }}>
          <p className="text-sm text-black">
            💡 We&apos;ll review your application and get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Friendly Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3 text-black">
          {t('title')}
        </h2>
        <p className="text-black text-lg">
          {t('description')}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {config.fields.map((field) => (
          <div key={field.key} className="space-y-2">
            <label className="block text-sm font-semibold text-black">
              {t(`fields.${field.key}.label`)} {field.required && <span className="text-accent-blue">*</span>}
            </label>

            {field.type === 'text' || field.type === 'email' ? (
              <input
                type={field.type}
                value={formData[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent-blue bg-background text-black transition-colors placeholder:text-black/40"
                placeholder={t(`fields.${field.key}.placeholder`)}
                required={field.required}
              />
            ) : field.type === 'textarea' ? (
              <textarea
                value={formData[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                rows={field.rows || 4}
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent-blue bg-background text-black transition-colors placeholder:text-black/40 resize-none"
                placeholder={t(`fields.${field.key}.placeholder`)}
                required={field.required}
              />
            ) : field.type === 'select' ? (
              <select
                value={formData[field.key] || ''}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-accent-blue bg-background text-black transition-colors"
                required={field.required}
              >
                <option value="">{t(`fields.${field.key}.placeholder`)}</option>
                {field.key === 'status' && (['student', 'recent-grad', 'professional'].map((val) => (
                  <option key={val} value={val}>
                    {t(`statusOptions.${val}`)}
                  </option>
                )))}
                {field.key === 'experience' && (['1-3', '4-7', '8-12', '13+'].map((val) => (
                  <option key={val} value={val}>
                    {t(`experienceOptions.${val}`)}
                  </option>
                )))}
              </select>
            ) : field.type === 'file' ? (
              <div>
                <div className="relative">
                  <input
                    type="file"
                    accept={field.accept}
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border-2 border-dashed border-border rounded-lg focus:outline-none focus:border-accent-blue bg-background text-black transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent-blue file:text-white hover:file:bg-accent-blue-hover file:cursor-pointer cursor-pointer"
                    required={field.required}
                  />
                </div>
                {field.accept && field.maxSize && (
                  <p className="text-xs text-black mt-2 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Accepted formats: {field.accept} (max {field.maxSize}MB)
                  </p>
                )}
                {cvFile && (
                  <div className="mt-3 p-3 border rounded-lg flex items-center gap-2" style={{ backgroundColor: '#e8f5e9', borderColor: '#81c784' }}>
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-900 dark:text-green-100">{cvFile.name}</p>
                      <p className="text-xs text-green-700 dark:text-green-300">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ))}

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-blue text-white py-4 px-6 rounded-lg hover:bg-accent-blue-hover focus:outline-none focus:ring-4 focus:ring-accent-blue/30 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              t('submitButton')
            )}
          </button>
          <p className="text-center text-xs text-black mt-3">
            🔒 Your information is secure and will never be shared
          </p>
        </div>
      </form>
    </div>
  );
}
