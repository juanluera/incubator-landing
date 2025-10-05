'use client';

import { useState } from 'react';
import { FormConfig, CustomFormData } from '@/types/form';

interface ApplicationFormProps {
  config: FormConfig;
}

export default function ApplicationForm({ config }: ApplicationFormProps) {
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
      <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center transition-colors">
        <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
          {config.successTitle}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {config.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        {config.title}
      </h2>
      
      {config.fields.map((field) => (
        <div key={field.key} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {field.label} {field.required && '*'}
          </label>
          
          {field.type === 'text' || field.type === 'email' ? (
            <input
              type={field.type}
              value={formData[field.key] || ''}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder={field.placeholder}
              required={field.required}
            />
          ) : field.type === 'textarea' ? (
            <textarea
              value={formData[field.key] || ''}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
              rows={field.rows || 4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder={field.placeholder}
              required={field.required}
            />
          ) : field.type === 'select' ? (
            <select
              value={formData[field.key] || ''}
              onChange={(e) => handleInputChange(field.key, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required={field.required}
            >
              <option value="">{field.placeholder || `Select ${field.label}`}</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'file' ? (
            <div>
              <input
                type="file"
                accept={field.accept}
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-blue-900 file:text-blue-700 dark:file:text-blue-300 hover:file:bg-blue-100 dark:hover:file:bg-blue-800"
                required={field.required}
              />
              {field.accept && field.maxSize && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Upload {field.accept} (max {field.maxSize}MB)
                </p>
              )}
              {cvFile && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                  Selected: {cvFile.name} ({(cvFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              )}
            </div>
          ) : null}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 font-medium disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? 'Submitting...' : config.submitButtonText}
      </button>
    </form>
  );
}
