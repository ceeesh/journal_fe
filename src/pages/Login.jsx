import phone from '../assets/phone.png'

const Login = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className=" w-1/2 h-3/4 mx-auto mt-24">
        <div className="flex w-full">
          <div className="w-1/2  max-h-3/4">
            <img src={phone}/>
          </div>

          <div className="w-1/2 max-h-3/4">
            <form>
              <div className="border border-gray-200 px-10">
                <h1 className="font-thin logo text-6xl text-center mt-14">Iguess</h1>
                <div className="flex flex-col gap-2 mt-10">
                  <input type="text" placeholder="Phone number, username, or email" className="p-2 rounded bg-gray-100 border" />
                  <input type="password" placeholder="Password" className="p-2 rounded bg-gray-100 border" />
                  <button type="submit" className="bg-sky-400 mt-2 w-full px-2 py-1 text-white rounded">Log in</button>
                </div>
                <div className="text-center flex flex-col gap-3 my-5">
                  <h1 className="text-gray-400 font-bold">OR</h1>
                  <p className="text-blue-900 font-medium">Log in with Facebook</p>
                  <p className="text-blue-900">Forgot Password?</p>
                </div>
              </div>

              <div className="border border-gray-200 p-4 mt-3">
                <h1 className="text-center">Don&apos;t have an account? <span><a href="#" className="text-sky-500 font-medium">Sign up</a></span></h1>
              </div>

              <h1 className="text-center py-8">Get the app.</h1>
              <div className="flex gap-2">
                <p className="bg-red-200">DOWNLOAD ON THE APP STORE</p>
                <p className="bg-blue-200">GET IT ON GOOGLE PLAY</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login