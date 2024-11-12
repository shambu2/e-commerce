const LoginSignup = () => {
  return (
    <div className="bg-purple-300 w-full h-[88vh] flex  justify-center ">
      <div className="w-[700px] h-[500px] bg-white mt-20 mb-20 p-20">
        <h1 className="text-center font-black text-5xl mb-5">Sign Up</h1>
        <div className="flex-col flex gap-5">
          <input type="text" name="" id="" placeholder="Your name" className="border-[1px] border-solid border-gray-500 pl-5 "/>
          <input type="text" placeholder="Email address"  className="border-[1px] border-solid border-gray-500 pl-5"/>
          <input type="text" placeholder="Password" className="border-[1px] border-solid border-gray-500 pl-5"/>
        </div>
        <button className=" bg-blue-500 w-28 rounded-md text-center mt-5 mb-5 ml-52">Submit</button>
        <div>
          <p className="mb-2 text-center">Already have an account?  <span className="text-blue-500 font-bold text-xl rounded-md px-2 py-1 hover:cursor-pointer " >Login here</span></p>
        </div>
        <div className="text-center gap-2 flex justify-center">
          <input type="checkbox" name="" id="" />
         <p> By continuing i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
