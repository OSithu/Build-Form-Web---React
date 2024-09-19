import React from 'react';

const WelcomeScreen = ({ title, setTitle, description, setDescription, image, setImage, imagePosition, setImagePosition }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome Screen Settings</h2>

      <input
        type="text"
        placeholder="Change Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        placeholder="Change Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="file"
        onChange={handleImageUpload}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
      />

      <select
        value={imagePosition}
        onChange={(e) => setImagePosition(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="left">Left</option>
        <option value="right">Right</option>
      </select>
    </div>
  );
};

export default WelcomeScreen;
