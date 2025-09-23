'use client';

import { useState } from 'react';

export default function WaitlistForm() {
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        school: '',
        description: '',
        status: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        if (file.type !== 'application/pdf' && !file.type.includes('word') && !file.type.includes('document')){
          alert('Please upload a PDF or Word document');
          return;
        }

        if (file.size > 2*1024*1024) {
          alert('File size must be less than 2MB');
          return;
        }
        setCvFile(file);
      }
      
    }

      

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try{
              // Create FormData for file upload
            const submitData = new FormData();
            submitData.append('name', formData.name);
            submitData.append('email', formData.email);
            submitData.append('school', formData.school);
            submitData.append('description', formData.description);
            submitData.append('status', formData.status);
            
            if (cvFile) {
                submitData.append('cv', cvFile);
            }

            const response = await fetch('/api/submit-application', {
                method: 'POST',
                body: submitData,
            })

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    school: '',
                    description: '',
                    status: ''
                });
                setCvFile(null);
            }else{
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
                <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Interest Form Submitted!</h2>
                <p className="text-gray-600 dark:text-gray-300">Thank you for your interest. We will be in touch soon.</p>
            </div>
        );
    } 
    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Interest Form</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
    
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            />
          </div>
    
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              School/University *
            </label>
            <input
              type="text"
              value={formData.school}
              onChange={(e) => setFormData({...formData, school: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="e.g., MIT, Stanford, Universidad de Chile"
              required
            />
          </div>
    
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Biggest Accomplishment
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Describe your most significant achievement (academic, professional, personal project, etc.)"
            />
          </div>
    
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Status *
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              required
            >
              <option value="">Select your status</option>
              <option value="student">Student</option>
              <option value="recent-grad">Recent Graduate</option>
              <option value="professional">Professional</option>
            </select>
          </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    CV/Resume *
                </label>
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-blue-900 file:text-blue-700 dark:file:text-blue-300 hover:file:bg-blue-100 dark:hover:file:bg-blue-800"
                    required
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Upload PDF or Word document (max 2MB)
                </p>
                {cvFile && (
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                        Selected: {cvFile.name} ({(cvFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                )}
            </div>
    
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 dark:bg-blue-700 text-white py-3 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 font-medium disabled:opacity-50 transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      );
    }