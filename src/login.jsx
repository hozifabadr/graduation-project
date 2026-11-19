
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-screen bg-dar-page font-dmsans">

            <header className="bg-dar-surface h-20 flex items-center gap-2 p-8 w-full">
                <Link
                    to="/"
                    aria-label="Back"
                    className="size-11 shrink-0 rounded-full flex items-center justify-center"
                >
                    <i className="text-[18px] text-[#247CFF] fa-solid fa-chevron-left"></i>
                </Link>

                <p className="font-manrope text-[17px] text-dar-text-primary">
                    Dar Care
                </p>
            </header>

            <main className="flex flex-col items-center p-6">
                <section className="w-full max-w-[760px] flex flex-col gap-6">

                    <h1 className="font-manrope text-[34px] leading-[44px] text-dar-text-primary">
                        Login
                    </h1>

                    <p className="text-base text-dar-text-secondary">
                        Welcome back to Dar Care.
                    </p>

                    <div className="bg-dar-subtle rounded-dar-16 p-6">
                        <p className="text-dar-text-brand">
                            Login page design coming soon.
                        </p>
                    </div>

                    <Link
                        to="/"
                        className="h-[50px] w-full rounded-dar-15 bg-dar-brand flex items-center justify-center text-white font-bold"
                    >
                        Back to Welcome
                    </Link>

                </section>
            </main>

        </div>
    );
}

export default Login;
