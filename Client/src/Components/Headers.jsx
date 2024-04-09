import icon from "../Asset/jobportal.png"

export default function Headers() {
  return (
    <nav className="bg-gray-800 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-8 w-auto" src={icon} alt="Logo" />
            <img className="hidden lg:block h-8 w-auto" src={icon} alt="Logo" />
          </div>
        </div>
        <div className="hidden sm:flex sm:items-center sm:ml-6">
          <a href="/create-job" className="ml-4 px-3 py-2 bg-indigo-600 border border-transparent rounded-md text-white text-sm font-medium hover:bg-indigo-700">Create job +</a>
        </div>
      </div>
    </div>
  </nav>
  )
}
