const SignUpNewsLetter = () => {
  return (
    <div className="mt-10">
      <div className="">
        <h2 className="font-bold text-3xl text-center">
          Sign Up for our Newsletter
        </h2>
        <h4 className="card-subtitle text-center mt-4">
          Recieve the latest drone news and offers directly to your email.
        </h4>
        <form className="flex mx-auto max-w-2xl bg-gray-200 mt-8">
          <input
            type="text"
            placeholder="E-mail address"
            className="border-2  rounded-md px-2 py-1 outline-none bg-transparent focus:border-gray-100 border-none flex-1"
          />
          <button className="btn px-6 rounded-none bg-red-500 -ml-2 text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpNewsLetter;
