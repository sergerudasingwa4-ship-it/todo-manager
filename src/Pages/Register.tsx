import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen bg-[#B1C290] flex flex-col items-center justify-center gap-6 p-4">

            {/* Titre en dehors du conteneur */}
            <h1 className="text-xs font-semibold tracking-[0.2em] text-[#1E3722]  ">
                VIRUNGA - QUEST
            </h1>

            {/* Conteneur du formulaire */}
            <div className="w-full max-w-md bg-[#F4F5EF] border border-[#E5EBCE] p-6 rounded-2xl shadow-lg flex flex-col gap-4 text-white">

                <div className="w-[90%] mx-auto">
                    <h2 className="text-xs font-semibold tracking-[0.2em] text-[#26354F] font-bold">
                        CREATE YOUR ACCOUNT
                    </h2>
                </div>

                <div className="w-[90%] mx-auto flex flex-col gap-2">
                    <label htmlFor="text" className="text-[#26354F] font-semibold">
                        Name
                    </label>
                    <input
                        type="text"
                        id="names"
                        placeholder="Enter your names"
                        className="w-full bg-[#1D3622] text-white placeholder:text-white border border-[#26354F] rounded-lg px-4 py-3 outline-none focus:border-[#1E3722]"
                    />
                </div>

                <div className="w-[90%] mx-auto flex flex-col gap-2">
                    <label htmlFor="email" className="text-[#26354F] font-semibold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full bg-[#1D3622] text-white placeholder:text-white border border-[#26354F] rounded-lg px-4 py-3 outline-none focus:border-[#1E3722]"
                    />
                </div>

                <div className="w-[90%] mx-auto flex flex-col gap-2">
                    <label htmlFor="password" className="text-[#26354F] font-semibold">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full bg-[#1D3622] text-white placeholder:text-white border border-[#26354F] rounded-lg px-4 py-3 outline-none focus:border-[#1E3722]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-[90%] mx-auto mt-4 bg-[#1E3722] text-white text-black font-semibold py-3 rounded-xl hover:bg-[#B1C290] transition-colors"
                >
                    Register Now
                </button>

                <div className="w-[90%] mx-auto text-[#26354F]">
                    Already have an account?
                    <Link
                        to="/login"
                        className="text-[#1E3722] hover:text-[#B1C290] transition-colors"
                    >
                        {" "}Login here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
