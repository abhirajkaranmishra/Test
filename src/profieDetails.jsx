import React, { useState } from 'react';

const Input = ({ label, placeholder, type = "text", disabled = false, value, onChange }) => (
  <div className="flex flex-col space-y-1.5">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      className={`
        w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 
        focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-150
        ${disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}
      `}
    />
  </div>
);

const Select = ({ label, options, placeholder = `Select ${label}`, icon, defaultValue = '' }) => {
  
  const selectOptions = options.map(opt => typeof opt === 'object' ? opt.label : opt);

  return (
    <div className="flex flex-col space-y-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl pointer-events-none">
            {icon}
          </span>
        )}
        <select
          defaultValue={defaultValue}
          className={`
            w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-150
            /* Remove default arrow, but we'll let the browser handle it without overwriting 'appearance-none' */
            ${icon ? "pl-10 text-gray-900" : "pl-3"}
          `}
        >
          <option value="" disabled className="text-gray-500">{placeholder}</option>
          {selectOptions.map((opt, idx) => (
            <option key={idx} value={opt} className="text-gray-900">
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};


export default function ProfileDetails() {
  const [isEditing, setIsEditing] = useState(true); 
  const [formData, setFormData] = useState({}); 

  const genders = ['Male', 'Female', 'Other'];
  const states = ['Telangana', 'Andhra Pradesh', 'Karnataka'];
  const cities = ['Hyderabad', 'Delhi', 'Mumbai', 'Chennai', 'Bangalore'];

  const handleUpdate = () => {
    console.log('Update details clicked', formData);
    
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl">

        <header className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <button
              aria-label="Go back"
              className="p-2 rounded-full text-gray-700 transition duration-150 text-xl font-bold"
            >
              &larr; 
            </button>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Profile Details
            </h3>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-150"
            >
              Edit
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-150 shadow-md"
            >
              Update details
            </button>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 space-y-8">

          <section className="space-y-6 pb-2"> 
            <h2 className="text-lg font-bold text-gray-800">Profile Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Input label="Patient Name" placeholder="Enter Patient Name" />
              <Input type = "number" label="Age" placeholder="Enter Age"  min={1} max={100}/>
              <Select label="Gender" placeholder="Select Gender" options={genders} />

              <Input label="Company" placeholder="Enter details" />
              <Input label="Occupation" placeholder="Enter Occupation" />
              <Input label="Specialisation" placeholder="Enter Name" />

              <Input label="Email Address" placeholder="Enter name" type="email" />
              <Input label="Company" placeholder="Enter name" />
              <Input label="Nationality" placeholder="Indian" value="Indian" disabled />
            </div>
          </section>

          <div className="border-t border-gray-100" />

          <section className="space-y-6 pb-2">
            <h2 className="text-lg font-bold text-gray-800">Address Information</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Input label="Address Line 1" placeholder="Enter Title" />
              <Input label="Address Line 2" placeholder="Enter Patient Name" />
              <Select label="City" placeholder="Select City" options={cities} />
              <Select label="State" placeholder="Telangana" options={states} defaultValue="Telangana" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             
              <Select
                label="Country"
                placeholder="India"
                options={['India', 'USA', 'UK']}
                defaultValue="India"
                icon="🇮🇳"
              />
              <Input label="Pincode" placeholder="Enter pincode" type="number" />
              
              <div className="hidden lg:block"></div>
            </div>
          </section>

        
          <div className="border-t border-gray-100" />

          
          <section className="space-y-6">
            <h2 className="text-lg font-bold text-gray-800">About</h2>
            <div className="flex flex-col space-y-1.5">
              <textarea
                placeholder="Tell us about yourself"
                rows="4"
                className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition duration-150"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
