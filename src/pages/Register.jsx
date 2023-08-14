import { useForm } from "react-hook-form";


const Register = () => {
  const { register, handleSubmit} = useForm();

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="mt-4 border w-1/5 h-[80%] mx-auto py-5 px-8">

        <div className="text-center">
          <h1 className="font-thin logo text-6xl text-center mt-14">Iguess</h1>
          <p className="mt-5">Sign up to see photos and videos from your friends.</p>
          <button className="p-2 bg-sky-500 mt-5 rounded w-full text-white font-medium">Log in with Facebook</button>
          <h1 className="mt-5 font-medium text-gray-500">OR</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit((data) => {
            console.log(data)
          })}>
            <div className="flex flex-col gap-2">
              <input {...register('email')} placeholder="Email" className="w-full p-2 rounded bg-gray-100 border" />
              <input {...register('fullname')} placeholder="Full Name" className="w-full p-2 rounded bg-gray-100 border" />
              <input {...register('username')} placeholder="Username" className="w-full p-2 rounded bg-gray-100 border" />
              <input {...register('password')} placeholder="Password" className="w-full p-2 rounded bg-gray-100 border" />
            </div>

            <div className="text-center mt-5">
              <p>People who use our service may have uploaded your contact information to Instagram. <span className="text-blue-900"><a href="#">Learn More</a></span></p>
              <p>By signing up, you agree to our <span><a>Terms, Privacy Policy and Cookies Policy.</a></span></p>
            </div>

            <button className="p-2 bg-sky-500 text-white font-medium w-full rounded mt-5">Sign up</button>
          </form>

          
        </div>
      </div>

      <div className="mt-4 border w-1/5 mx-auto py-5 px-8">
        <h1 className="text-center">Have an account? <span className="text-sky-500"><a>Log in</a></span></h1>
      </div>

      <h1 className="mt-5 text-center">Get the app.</h1>
    </div>
  )
}

export default Register