'use client';

import { useState } from 'react';

export default function PODForm() {
  const [formData, setFormData] = useState({
    deliveryNumber: '',
    deliveryDate: '',
    recipientName: '',
    recipientSignature: '',
    deliveryAddress: '',
    itemsDelivered: '',
    condition: 'good',
    notes: '',
    driverName: '',
    vehicleNumber: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You could send this data to an API endpoint
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-[#283694] mb-8">Proof of Delivery Form</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Delivery Information */}
            <div>
              <label htmlFor="deliveryNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Number
              </label>
              <input
                type="text"
                id="deliveryNumber"
                name="deliveryNumber"
                value={formData.deliveryNumber}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                required
              />
            </div>

            <div>
              <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Date
              </label>
              <input
                type="date"
                id="deliveryDate"
                name="deliveryDate"
                value={formData.deliveryDate}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                required
              />
            </div>

            {/* Recipient Information */}
            <div>
              <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1">
                Recipient Name
              </label>
              <input
                type="text"
                id="recipientName"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                required
              />
            </div>

            <div>
              <label htmlFor="recipientSignature" className="block text-sm font-medium text-gray-700 mb-1">
                Recipient Signature
              </label>
              <input
                type="text"
                id="recipientSignature"
                name="recipientSignature"
                value={formData.recipientSignature}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                placeholder="Type your full name as signature"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Address
              </label>
              <input
                type="text"
                id="deliveryAddress"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                required
              />
            </div>

            {/* Delivery Details */}
            <div className="md:col-span-2">
              <label htmlFor="itemsDelivered" className="block text-sm font-medium text-gray-700 mb-1">
                Items Delivered (Description)
              </label>
              <textarea
                id="itemsDelivered"
                name="itemsDelivered"
                value={formData.itemsDelivered}
                onChange={handleChange}
                rows={3}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                required
              />
            </div>

            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                Condition of Items
              </label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                required
              >
                <option value="good">Good</option>
                <option value="damaged">Damaged</option>
                <option value="partial">Partial Delivery</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
              />
            </div>

            {/* Driver Information */}
            <div>
              <label htmlFor="driverName" className="block text-sm font-medium text-gray-700 mb-1">
                Driver Name
              </label>
              <input
                type="text"
                id="driverName"
                name="driverName"
                value={formData.driverName}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                required
              />
            </div>

            <div>
              <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Number
              </label>
              <input
                type="text"
                id="vehicleNumber"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#283694] focus:border-[#283694]"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-[#283694] text-white py-2 px-6 rounded-md hover:bg-[#1e2a70] focus:outline-none focus:ring-2 focus:ring-[#283694] focus:ring-offset-2 transition-colors duration-300"
            >
              Submit POD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
