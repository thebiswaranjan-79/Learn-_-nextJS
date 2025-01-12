import Image from "next/image";

const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/home.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="w-full h-full bg-black bg-opacity-60 ">

            <nav className="py-6 px-32">
                   <Image src={'/images/logo.png'} alt="logo" width={150} height={140}/>
            </nav>

            <div className="flex justify-center">
                <div className="bg-black bg-opacity-75 p-16 self-center mt-2 rounded w-2/5 ">
                    <h3 className="mb-8 font-semibold text-5xl text-white">
                        Sign In
                    </h3>
                    <div className="flex flex-col gap-4">

                    </div>

                </div>
            </div>

        </div>
    </div>
  );
};

export default Auth;
