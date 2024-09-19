import React from 'react';

const EmailField = ({ email, error, onEmailChange }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 mb-4">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Email Field</h2>
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default EmailField;
