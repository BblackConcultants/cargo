'use client';

import { useState } from 'react';
import { countries } from '@/data/countries';
import { currencies } from '@/data/currencies';

export default function ShippingForm() {
  const [activeTab, setActiveTab] = useState('packed');
  const [isPacked, setIsPacked] = useState(true);

  return (
    <div>
      {/* Tabs */}
      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 ${
              activeTab === 'packed'
                ? 'text-[#283694] border-b-2 border-[#283694] font-medium'
                : 'text-gray-500 hover:text-[#283694]'
            }`}
            onClick={() => {
              setActiveTab('packed');
              setIsPacked(true);
            }}
          >
            Packed & Less Than 30kg
          </button>
          <button
            className={`px-6 py-3 ${
              activeTab === 'unpacked'
                ? 'text-[#283694] border-b-2 border-[#283694] font-medium'
                : 'text-gray-500 hover:text-[#283694]'
            }`}
            onClick={() => {
              setActiveTab('unpacked');
              setIsPacked(false);
            }}
          >
            Larger Or Unpacked Goods
          </button>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-[#283694] mb-6">GET A QUOTE</h2>
        </div>

        {/* Packed/Unpacked Radio */}
        <div className="flex items-center">
          <div className="w-1/2">
            <label className="text-gray-600">IS THE ITEM PACKED?</label>
          </div>
          <div className="w-1/2 flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="packed"
                checked={isPacked}
                disabled={activeTab === 'unpacked'}
                onChange={() => setIsPacked(true)}
                className="mr-2"
              />
              <span>YES</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="packed"
                checked={!isPacked}
                disabled={activeTab === 'packed'}
                onChange={() => setIsPacked(false)}
                className="mr-2"
              />
              <span>NO</span>
            </label>
          </div>
        </div>

        {/* From/To Fields */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-2">
              FROM (UK POSTAL CODE) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">
              TO <span className="text-red-500">*</span>
            </label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]">
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Weight Fields */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-2">Weight</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Unit</label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]">
              <option value="Grammes">Grammes</option>
              <option value="Kilogrammes">Kilogrammes</option>
            </select>
          </div>
        </div>

        {/* Dimensions Fields */}
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">Length</label>
            <input
              type="number"
              placeholder="Length"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Width</label>
            <input
              type="number"
              placeholder="Width"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Height</label>
            <input
              type="number"
              placeholder="Height"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Unit</label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]">
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>

        {/* Value Fields */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-2">Value</label>
            <input
              type="text"
              placeholder="$0 (USD)"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Currency</label>
            <select className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#283694]">
              <option value="">select currency</option>
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-[#f89d13] text-white px-6 py-3 rounded flex items-center space-x-2 hover:bg-[#f89d13]/90 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Request A Quote</span>
          </button>
        </div>
      </form>
    </div>
  );
}
