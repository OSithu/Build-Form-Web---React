import React from 'react';

const FormPreview = ({ title, description, image, imagePosition, emailFields }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
      <p className="text-lg mb-4 text-gray-600 font-semibold">{description}</p>

      {image && (
        <div className={`flex ${imagePosition === 'left' ? 'justify-start' : 'justify-end'} mb-4`}>
          <img src={image} alt="Uploaded" className="w-64 h-64 object-cover rounded-lg shadow-md" />
        </div>
      )}

 
      {emailFields && emailFields.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Email Fields</h3>
          <ul className="space-y-2">
            {emailFields.map((email, index) => (
              <li key={index} className="text-lg text-gray-700">
                {email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormPreview;
