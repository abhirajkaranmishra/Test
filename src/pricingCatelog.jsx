import React from "react";

const PricingCatalog = () => {
  const data = [
    { id: 1, procedure: "Special Therapy", notes: "-", cost: 10000.0 },
    { id: 2, procedure: "C.B.T", notes: "-", cost: 2000.0 },
    { id: 3, procedure: "Family Therapy", notes: "-", cost: 1000.0 },
    { id: 4, procedure: "IQ Assessment", notes: "-", cost: 5000.0 },
    { id: 5, procedure: "Consultation", notes: "-", cost: 4000.0 },
    { id: 6, procedure: "Neuro", notes: "-", cost: 1000.0 },
    { id: 7, procedure: "Psycho sexual Therapy", notes: "-", cost: 3000.0 },
    { id: 8, procedure: "Psycho Therapy", notes: "-", cost: 3000.0 },
    { id: 9, procedure: "Psycho sexual Therapy", notes: "-", cost: 3000.0 },
    { id: 10, procedure: "Psycho sexual Therapy", notes: "-", cost: 3000.0 },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6 text-black relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h3 className="text-lg sm:text-xl font-bold">Pricing Catalog</h3>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <button className="px-4 py-2 text-sm border rounded-md  w-full sm:w-auto">
            More Options
          </button>
          <button className="px-4 py-2 text-sm text-black bg-white rounded-md  ring-blue-500 outline-none w-full sm:w-auto">
            ADD
          </button>
        </div>
      </div>

      <p className="mb-2 text-gray-400">Learn More &gt;</p>

      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="🔍 Search Procedure Name"
          className="w-1/2 pl-3 sm:pl-10 pr-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none text-black text-sm sm:text-base"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="w-full text-xs sm:text-sm md:text-base text-left border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-3 sm:px-4 py-2 font-semibold text-gray-400">Sl.No</th>
              <th className="px-3 sm:px-4 py-2 font-semibold  text-gray-400">Procedure</th>
              <th className="px-3 sm:px-4 py-2 font-semibold  text-gray-400">Notes</th>
              <th className="px-3 sm:px-4 py-2 font-semibold  text-gray-400">
                Cost ($) INCL Taxes
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-3 sm:px-4 py-2">{row.id}</td>
                <td className="px-3 sm:px-4 py-2">{row.procedure}</td>
                <td className="px-3 sm:px-4 py-2">{row.notes}</td>
                <td className="px-3 sm:px-4 py-2">{row.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (bottom-right) */}
      <div className="flex justify-end items-center gap-3 mt-4">
        <button className="flex items-center px-3 py-1 border rounded-md  hover:bg-blue-500">
          Prev
        </button>
        <button className="flex items-center px-3 py-1 border rounded-md hover:bg-blue-500">
          Next
        </button>
        <div className="text-sm">
          Page: <span className="font-medium">1</span> of 100
        </div>
      </div>
    </div>
  );
};

export default PricingCatalog;
