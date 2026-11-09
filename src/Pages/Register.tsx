import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen bg-[#090E1B] flex flex-col items-center justify-center gap-6 p-4">

            {/* Titre en dehors du conteneur */}
            <h1 className="text-3xl font-bold text-[#A4C639]">
                Virunga - Quest
            </h1>

            {/* Conteneur du formulaire */}
            <div className="w-full max-w-md bg-[#111C30] border border-[#26354F] p-6 rounded-2xl shadow-lg flex flex-col gap-4 text-white">

                <div className="w-[90%] mx-auto">
                    <h2 className="text-lg font-semibold text-slate-400">
                        Create your account
                    </h2>
                </div>

                <div className="w-[90%] mx-auto flex flex-col gap-2">
                    <label htmlFor="names" className="text-slate-400">
                        Name
                    </label>
                    <input
                        type="text"
                        id="names"
                        placeholder="Enter your names"
                        className="w-full bg-[#26354F] text-white placeholder:text-white border border-[#26354F] rounded-lg px-4 py-3 outline-none focus:border-[#A4C639]"
                    />
                </div>

                <div className="w-[90%] mx-auto flex flex-col gap-2">
                    <label htmlFor="email" className="text-slate-400">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full bg-[#26354F] text-white placeholder:text-white border border-[#26354F] rounded-lg px-4 py-3 outline-none focus:border-[#A4C639]"
                    />
                </div>

                <div className="w-[90%] mx-auto flex flex-col gap-2">
                    <label htmlFor="password" className="text-slate-400">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full bg-[#26354F] text-white placeholder:text-white border border-[#26354F] rounded-lg px-4 py-3 outline-none focus:border-[#A4C639]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-[90%] mx-auto mt-4 bg-[#A4C639] text-black font-semibold py-3 rounded-xl hover:bg-[#C0D878] transition-colors"
                >
                    Register Now
                </button>

                <div className="w-[90%] mx-auto text-slate-400">
                    Already have an account?
                    <Link
                        to="/login"
                        className="text-[#A4C639] hover:text-[#C0D878] transition-colors"
                    >
                        {" "}Login here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
