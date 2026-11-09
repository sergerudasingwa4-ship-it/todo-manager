
import { Link } from "react-router-dom";
import VQ_Logo from "../assets/VQ_Logo.png";

const Login = () => {
    return (
        <div className="min-h-screen bg-[#090E1B] flex flex-col items-center justify-center p-4">

            {/* Logo et titre */}
            <div className="flex flex-col items-center mb-8">

                <img
                    src={VQ_Logo}
                    alt="Virunga Quest Logo"
                    className="w-24 h-24 object-contain rounded-full mb-5"
                />

                <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 mb-2">
                    VIRUNGA - QUEST
                </p>

                <h1 className="text-3xl font-bold text-white">
                    LogIn
                </h1>

            </div>

            {/* Conteneur du formulaire */}
            <div className="w-full max-w-md bg-[#111C30] border border-[#26354F] p-6 rounded-2xl shadow-lg">

                <form className="w-[95%] mx-auto flex flex-col gap-4">

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-sm text-slate-400"
                        >
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="name@virungaquest.com"
                            className="w-full bg-[#26354F] text-white placeholder:text-slate-500 border border-[#26354F] rounded-lg px-3 py-3 outline-none focus:border-[#A4C639]"
                        />
                    </div>

                    {/* Mot de passe */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-sm text-slate-400"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            className="w-full bg-[#17243A] text-white border border-[#A4C639]  rounded-lg px-3 py-3 outline-none focus:ring-1 focus:ring-[#A4C639]"
                        />
                    </div>

                    {/* Bouton de connexion */}
                    <button
                        type="submit"
                        className="w-full bg-[#A4C639] text-black font-semibold py-3 rounded-xl hover:bg-[#C0D878] transition-colors"
                    >
                        Log In
                    </button>

{/* Lien vers l'inscription */}
<div className="text-sm text-slate-400 mt-1">
    Don't have an account?

    <Link
        to="/register"
        className="text-[#A4C639] font-semibold ml-1 hover:text-[#C0D878] transition-colors"
    >
        Register here
    </Link>
</div>


                </form>

            </div>
        </div>
    );
};

export default Login;
