import React, { useState } from 'react';

const EmailField = ({ email, setEmail }) => {
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (validateEmail(emailValue)) {
      setError('');
    } else {
      setError('Invalid email address.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Email Field</h2>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default EmailField;
