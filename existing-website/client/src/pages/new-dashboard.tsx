import React from 'react';

const NewDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your financial overview.</p>
        </div>

        {/* Main Dashboard Grid Layout */}
        <div className="space-y-6">
          {/* Top Row - Summary Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-sm text-gray-600">Balance Card</h3>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-sm text-gray-600">Credit Cards Card</h3>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-sm text-gray-600">Net Worth Card</h3>
            </div>
          </section>

          {/* Second Row - Monthly Comparison Charts */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">This Month</h3>
              <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                <span className="text-gray-400">Monthly Comparison Chart</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Last Month</h3>
              <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                <span className="text-gray-400">Monthly Comparison Chart</span>
              </div>
            </div>
          </section>

          {/* Main Content Grid - Left and Right Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Accounts Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Accounts</h3>
                <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                  <span className="text-gray-400">Accounts List</span>
                </div>
              </div>

              {/* Credit Cards Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Credit Cards</h3>
                <div className="h-32 bg-gray-50 rounded flex items-center justify-center">
                  <span className="text-gray-400">Credit Cards Details</span>
                </div>
              </div>

              {/* Last 7 Days Chart */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Last 7 Days</h3>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <span className="text-gray-400">Bar Chart</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Balance Trend Chart */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Balance Trend</h3>
                <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
                  <span className="text-gray-400">Line Chart</span>
                </div>
              </div>

              {/* Budgets Section */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Budgets</h3>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <span className="text-gray-400">Budget Progress Bars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDashboard;
