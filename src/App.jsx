import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import EmailField from './components/EmailField';
import FormPreview from './components/FormPreview';

const App = () => {
  const [title, setTitle] = useState('Welcome to Build Form');
  const [description, setDescription] = useState('This is the default description.');
  const [image, setImage] = useState(null);
  const [imagePosition, setImagePosition] = useState('left');
  const [emailFields, setEmailFields] = useState([]);

  const addEmailField = () => {
    setEmailFields([...emailFields, { value: '', error: '' }]);
  };


  const handleEmailChange = (index, value) => {
    const updatedFields = [...emailFields];
    updatedFields[index].value = value;
    updatedFields[index].error = validateEmail(value) ? '' : 'Invalid email address.';
    setEmailFields(updatedFields);
  };

 
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Build Your Own Form</h1>
        <p className="text-lg text-gray-600 font-semibold">Create and preview your form in real-time</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
       
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-4">
            <WelcomeScreen
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              image={image}
              setImage={setImage}
              imagePosition={imagePosition}
              setImagePosition={setImagePosition}
            />
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <button
              onClick={addEmailField}
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 mb-4"
            >
              Add Email Input Section
            </button>

        
            {emailFields.map((emailField, index) => (
              <EmailField
                key={index}
                email={emailField.value}
                error={emailField.error}
                onEmailChange={(value) => handleEmailChange(index, value)}
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <FormPreview
            title={title}
            description={description}
            image={image}
            imagePosition={imagePosition}
            emailFields={emailFields.map(field => field.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
