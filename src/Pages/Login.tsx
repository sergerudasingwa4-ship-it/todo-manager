
import { Link } from "react-router-dom";
import Virunga_Quest from "../assets/Virunga_Quest.png"


const Login = () => {
    return (
        <div className="min-h-screen bg-[#B1C290] flex flex-col items-center justify-center p-4">

            {/* Logo et titre */}
            <div className="flex flex-col items-center mb-8">

                <img
                    src={Virunga_Quest}
                    alt="Virunga Quest Logo"
                    className="w-28 h-28 object-contain rounded-full mb-5"
                />

                <p className="text-xs font-semibold tracking-[0.2em] text-[#1D3622] mb-2">
                    VIRUNGA - QUEST
                </p>

                <h1 className="text-3xl font-bold text-[#1D3622]">
                    LogIn
                </h1>

            </div>

            {/* Conteneur du formulaire */}
            <div className="w-full max-w-md bg-[#F4F5EF] border border-[#26354F] p-6 rounded-2xl shadow-lg">

                <form className="w-[95%] mx-auto flex flex-col gap-4">

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="email"
                            className="text-[#26354F] font-semibold"
                        >
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="name@virungaquest.com"
                            className="w-full bg-[#1D3622] text-white placeholder:text-white border border-[#B1C295] rounded-lg px-3 py-3 outline-none focus:border-[#B1C290]"
                        />
                    </div>

                    {/* Mot de passe */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-[#26354F] font-semibold"
                        >
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            className="w-full bg-[#1D3622] text-white border border-[#1E3722]  rounded-lg px-3 py-3 outline-none focus:ring-1 focus:ring-[#1E3722]"
                        />
                    </div>

                    {/* Bouton de connexion */}
                    <button
                        type="submit"
                        className="w-full bg-[#1E3722] text-black font-semibold py-3 rounded-xl hover:bg-[#B1C290] transition-colors"
                    >
                        Log In
                    </button>

{/* Lien vers l'inscription */}
<div className="text-sm text-[#26354F] mt-1">
    Don't have an account?

    <Link
        to="/register"
        className="text-[#1E3722] font-semibold ml-1 hover:text-[#B1C290] transition-colors"
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
