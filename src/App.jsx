import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import EmailField from './components/EmailField';
import FormPreview from './components/FormPreview';

const App = () => {
  const [title, setTitle] = useState('Welcome to BuildForm');
  const [description, setDescription] = useState('This is the default description.');
  const [image, setImage] = useState(null);
  const [imagePosition, setImagePosition] = useState('left');
  const [email, setEmail] = useState('');

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">

      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Build Your Own Form</h1>
        <p className="text-lg text-gray-600 font-semibold">Create and preview your form in real-time</p>
      </header>

 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
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
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <EmailField email={email} setEmail={setEmail} />
          </div>
        </div>

  
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <FormPreview
            title={title}
            description={description}
            image={image}
            imagePosition={imagePosition}
            email={email}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
