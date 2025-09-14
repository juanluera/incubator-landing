'use client';

import { useState } from 'react';

export default function ApplicationForm() {
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        description: '',
        stage: ''
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
            submitData.append('company', formData.company);
            submitData.append('description', formData.description);
            submitData.append('stage', formData.stage);
            
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
                    company: '',
                    description: '',
                    stage: ''
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
            <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-600">Application Submitted!</h2>
                <p className="text-gray-600">Thank you for your interest. We will be in touch soon.</p>
            </div>
        );
    } 
    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Apply to Tensor</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
    
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
    
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
    
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us about your business idea..."
            />
          </div>
    
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Development Stage
            </label>
            <select
              value={formData.stage}
              onChange={(e) => setFormData({...formData, stage: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select stage</option>
              <option value="idea">Just an idea</option>
              <option value="mvp">Building MVP</option>
              <option value="traction">Early traction</option>
              <option value="growth">Ready to scale</option>
            </select>
          </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    CV/Resume *
                </label>
                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    required
                />
                <p className="text-xs text-gray-500 mt-1">
                    Upload PDF or Word document (max 2MB)
                </p>
                {cvFile && (
                    <p className="text-sm text-green-600 mt-1">
                        Selected: {cvFile.name} ({(cvFile.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                )}
            </div>
    
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      );
    }