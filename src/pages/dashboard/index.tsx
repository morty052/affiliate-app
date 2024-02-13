import React from 'react'

export const Dashboard = () => {
  return (
    <div className="mx-auto grid max-w-5xl border bg-black">
      <div className="">
        {/* header */}
        <div className="mx-auto max-w-3xl border p-2">
          <div className="flex items-center justify-between">
            {/* Employee selector */}
            <div className=" flex w-full max-w-[200px] items-center justify-between rounded-lg border px-4 py-2">
              <div className="flex items-center gap-x-2">
                <div className="h-5 w-5 rounded-full border"></div>
                <p className="text-white">Alicia Koch</p>
              </div>
              <p className="text-white">&#8594;</p>
            </div>
            {/* Links */}
            <div className="flex justify-between">
              <p className="mx-4 font-semibold text-white">OverView</p>
              <p className="mx-4 font-semibold text-white">Products</p>
              <p className="mx-4 font-semibold text-white">Settings</p>
            </div>
            {/* avatar */}
            <div className="h-10 w-10 rounded-full border"></div>
          </div>
        </div>
        <p className="text-white">Dashboard</p>
        {/* tabs */}
        <p className="text-white">Tabs</p>
        {/* cards */}
        <p className="text-white">Cards</p>
        {/* sales chart */}
        <p className="text-white">Sales Chart</p>
        {/* recent Sales */}
        <p className="text-white">Recent Sales</p>
      </div>
    </div>
  )
}
