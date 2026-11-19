
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="min-h-screen flex flex-col bg-dar-page font-dmsans">

            {/* Top bar */}
            <header className="bg-dar-surface h-20 flex items-center gap-2 p-8 w-full">

                {/* Back Icon */}
                <a
                    href="#"
                    aria-label="Back"
                    className="size-11 shrink-0 rounded-full bg-dar-surface flex items-center justify-center cursor-pointer"
                >
                    <i className="text-[18px] text-[#247CFF] fa-solid fa-chevron-left"></i>
                </a>

                {/* Title */}
                <p className="font-manrope text-[17px] leading-6 text-dar-text-primary flex-1">
                    Dar Care
                </p>

                {/* Notifications Icon */}
                <a
                    href="#"
                    aria-label="Notifications"
                    className="size-11 shrink-0 rounded-full bg-dar-surface flex items-center justify-center cursor-pointer"
                >
                    <i className="text-[18px] text-[#247CFF] fa-regular fa-bell"></i>
                </a>

            </header>

            {/* Welcome content */}
            <main className="flex-1 flex flex-col items-center p-6">
                <section className="w-full max-w-[760px] flex flex-col gap-6 items-start">

                    {/* Main Heading */}
                    <h1 className="font-manrope text-[34px] leading-[44px] text-dar-text-primary w-full">
                        Trusted support, chosen by you.
                    </h1>

                    {/* Caregiver Image */}
                    <div className="w-full max-w-[420px] h-[400px] rounded-dar-16 overflow-hidden">
                        <img
                            src={`${import.meta.env.BASE_URL}images/welcome.jpg`}
                            alt="Smiling caregiver in teal scrubs"
                            className="size-full object-cover object-top"
                        />
                    </div>

                    {/* Section Label */}
                    <p className="text-[11px] leading-4 text-dar-text-brand w-full">
                        CARE FOR YOUR FAMILY
                    </p>

                    {/* Description */}
                    <p className="text-base leading-6 text-dar-text-secondary w-full">
                        Find qualified caregivers, understand every option, and arrange care that fits your family.
                    </p>

                    {/* Information Card */}
                    <div className="bg-dar-subtle rounded-dar-16 p-4 min-h-[96px] w-full flex flex-col justify-center gap-2 text-xs leading-[18px]">
                        <p className="font-bold text-dar-text-brand">
                            Confidence in every choice
                        </p>
                        <p className="text-dar-text-secondary">
                            Compare experience, availability and reviews.
                        </p>
                    </div>

                    {/* Create Account Button */}
                    <Link
                        to="/roleselection"
                        className="h-[50px] w-full rounded-dar-15 bg-dar-brand p-4 flex items-center justify-center text-base font-bold leading-6 text-white"
                    >
                        Create an account
                    </Link>

                    {/* Login Button */}
                    <Link
                        to="/login"
                        className="h-[50px] w-full rounded-dar-15 p-4 flex items-center justify-center text-base font-bold leading-6 text-dar-text-brand"
                    >
                        I already have an account
                    </Link>

                </section>
            </main>

        </div>
    );
}

export default Welcome;
