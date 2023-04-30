import React from 'react'

const Profile = () => {
  return (
    <><div  className= "bg-gray-200 text-primary">Change password</div>
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-slate-50">
    
      <div className="w-full md:w-1/2  flex flex-col items-center md:items-start justify-start rounded-xl  ">
        
        <div className=" flex flex-col py-16 md:flex-row md:items-start justify-center md:justify-center mx-auto w-1/2 bg-primary">
          <div className="flex flex-col items-center mb-2 ">
            <label htmlFor="old-password" className="text-gray-700 font-bold mb-2">Old Password:</label>
            <input type="password" id="old-password" name="old-password" className="border border-gray-400 py-1 px-2 rounded-lg w-full mb-2"/>
            <label htmlFor="new-password" className="text-gray-700 font-bold mb-2">New Password:</label>
            <input type="password" id="new-password" name="new-password" className="border border-gray-400 py-2 px-3 rounded-lg w-full mb-2"/>
            <label htmlFor="confirm-password" className="text-gray-700 font-bold mb-2">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" className="border border-gray-400 py-2 px-3 rounded-lg w-full mb-2"/>
                
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full">
              Edit Password
            </button>
          </div>

        </div>

      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <img src="src\assets\calendify.png" alt="Profile" className="rounded-full w-64 h-64 md:w-80 md:h-80 mb-4" />
        <h1 className="text-4xl font-bold  text-primary">John Doe</h1>
        <p className="text-lg text-gray-600">johndoe@email.com</p>
      </div>
    </div>
  
    </>

  )
}

export default Profile