import React, { useState } from "react";

const Printpage = () => {
  const [file, setFile] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10 text-black">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-lg font-bold mb-4">Printouts</h2>
        <p className="text-sm text-gray-500 mb-6">Configurations</p>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md mb-6">
          Page Setup
        </button>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Font Size / Family
              </label>
              <input
                type="text"
                placeholder="100px"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Page Size
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2">
                <option>Select Size Layout</option>
                <option>A4</option>
                <option>A5</option>
                <option>Letter</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Signature</label>
              <input
                type="text"
                placeholder="Add Signature"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Logo</label>
              <input
                type="url"
                placeholder="http://www.example.com"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Header</label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Footer</label>
              <input
                type="file"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload File</label>
            <div
              className="border-2 border-dashed border-gray-400 rounded-md p-6 text-center cursor-pointer"
              onClick={() => document.getElementById("uploadInput").click()}
            >
              <p className="text-gray-500 text-sm">
                Choose a file or drag & drop it here <br />
                <span className="text-xs">
                  txt, docx, pdf, jpeg, xlsx – Up to 50MB
                </span>
              </p>
            </div>
            <input
              id="uploadInput"
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file && <p className="mt-2 text-sm text-green-600">{file.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Notes
            </label>
            <textarea
              rows="3"
              placeholder="Enter a summary of the problem here..."
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="px-4 py-2 bg-white text-gray-700 rounded-md"
            >
              Save as Draft
            </button>
            <button
              type="reset"
              className="px-4 py-2 bg-white text-gray-700 rounded-md"
            >
              Reset Data
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-white text-white rounded-md"
            >
              Save Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Printpage;
