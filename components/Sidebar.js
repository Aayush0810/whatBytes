import React from 'react'

const Sidebar = () => {
  const sidebar = [
    {
        name: "Dashboard",
        icon: "/dashboard.png",
    }, 
    {
        name: "Skill Test",
        icon: "/badge.png",
    },
    {
        name: "Internship",
        icon: "/page.png",
    }
  ]

  return (
    <div className="h-screen border-r-2">
      <div className="flex flex-col gap-4 mt-9">
        {sidebar.map((element) => (
          <div key={element.name} className="flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-500">
            <img 
              src={element.icon} 
              alt="icon" 
              className="w-6 h-6" 
            />
            <div className="font-bold text-gray-700 text-sm">
              {element.name}
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar