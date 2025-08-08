import React from 'react'

const AccountOpeningCharges = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 border-t border-gray-200 bg-white rounded-xl shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-gray-700">Charges for account <span className="text-blue-600">opening</span></h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Type of account</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 text-gray-700">Online account</td>
              <td className="px-6 py-4"><span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Free</span></td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 text-gray-700">Offline account</td>
              <td className="px-6 py-4"><span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Free</span></td>
            </tr>
            <tr className="border-b">
              <td className="px-6 py-4 text-gray-700">NRI account (offline only)</td>
              <td className="px-6 py-4 text-gray-700">₹ 500</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-gray-700">Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td className="px-6 py-4 text-gray-700">₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountOpeningCharges