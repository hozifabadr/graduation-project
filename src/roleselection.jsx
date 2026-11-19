import { useState } from "react";

const ROLES = [
    {
        id: "patient",
        title: "Patient",
        icon: "fa-regular fa-heart",
        iconBg: "bg-dar-mint",
    },
    {
        id: "nurse",
        title: "Nurse",
        subtitle: "Professional account",
        icon: "fa-regular fa-user",
        iconBg: "bg-dar-mint",
    },
    {
        id: "pharmacy",
        title: "Pharmacy Owner",
        icon: "fa-solid fa-prescription-bottle-medical",
        iconBg: "bg-dar-cream",
    },
];

function RadioDot({ selected }) {
    return (
        <span
            aria-hidden="true"
            className={`absolute right-[15px] top-1/2 -translate-y-1/2 size-6 rounded-full flex items-center justify-center bg-dar-surface border ${selected ? "border-2 border-dar-brand" : "border-dar-border"
                }`}
        >
            {selected && <span className="size-3 rounded-full bg-dar-brand" />}
        </span>
    );
}

function RoleCard({ role, selected, onSelect }) {
    return (
        <button
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onSelect(role.id)}
            className={`relative flex items-center gap-4 min-h-[100px] p-4 rounded-dar-16 w-full sm:w-[340px] text-left cursor-pointer transition ${selected
                ? "bg-dar-mint border-2 border-dar-brand shadow-[0_6px_8px_rgba(15,56,48,0.12)]"
                : "bg-dar-surface border border-dar-border hover:border-dar-brand"
                }`}
        >
            <span
                className={`size-12 shrink-0 rounded-full flex items-center justify-center ${role.iconBg}`}
            >
                <i className={`${role.icon} text-[20px] text-dar-brand`}></i>
            </span>

            <span className="flex flex-col gap-2 flex-1 min-w-0 pr-8 font-bold">
                <span className="text-[17px] leading-6 text-dar-text-primary">
                    {role.title}
                </span>
                {selected && role.subtitle && (
                    <span className="text-xs leading-4 text-dar-text-brand">
                        ✓ Selected · {role.subtitle}
                    </span>
                )}
            </span>

            <RadioDot selected={selected} />
        </button>
    );
}

export default function RoleSelection({ onContinue }) {
    const [selectedRole, setSelectedRole] = useState(null);

    return (
        <div className="min-h-screen bg-dar-page font-dmsans flex flex-col gap-5 items-start px-6 pt-12 pb-20 md:px-20">
            {/* Top bar */}
            <div className="flex h-12 w-full items-center justify-between">
                <p className="font-bold text-[20px] leading-6 text-dar-text-brand">
                    Dar Care
                </p>
                <span className="bg-dar-mint rounded-full px-2.5 py-1.5 text-[11px] font-bold leading-[18px] text-dar-text-brand whitespace-nowrap">
                    SIGN UP · STEP 1 OF 2
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[14px] items-start w-full max-w-[1160px]">
                <h1 className="font-manrope text-[38px] leading-[48px] text-dar-text-primary">
                    How will you use Dar Care?
                </h1>

                <p className="text-base leading-6 text-dar-text-secondary">
                    Choose one role now. It will be saved to your account and control your
                    onboarding, permissions, and dashboard after sign-in.
                </p>

                {/* Role options */}
                <div
                    role="radiogroup"
                    aria-label="Account role"
                    className="flex flex-wrap gap-4 w-full"
                >
                    {ROLES.map((role) => (
                        <RoleCard
                            key={role.id}
                            role={role}
                            selected={selectedRole === role.id}
                            onSelect={setSelectedRole}
                        />
                    ))}
                </div>

                {/* Notice */}
                <div className="bg-dar-cream rounded-xl px-3 py-2.5 w-full">
                    <p className="text-xs font-bold leading-[18px] text-dar-text-primary">
                        Admin accounts are invitation-only. Selecting Admin never creates
                        unrestricted public access.
                    </p>
                </div>

                {/* Continue */}
                <button
                    type="button"
                    disabled={!selectedRole}
                    onClick={() => onContinue?.(selectedRole)}
                    className="h-[50px] w-full rounded-dar-15 bg-dar-brand p-4 flex items-center justify-center text-base font-bold leading-6 text-white transition enabled:cursor-pointer enabled:hover:brightness-95 disabled:opacity-45 disabled:cursor-not-allowed"
                >
                    {selectedRole ? "Continue" : "Select a role to continue"}
                </button>

                {/* Sign in */}
                <a
                    href="#"
                    className="h-[50px] w-full rounded-dar-15 p-4 flex items-center justify-center text-base font-bold leading-6 text-dar-text-brand hover:bg-dar-subtle transition cursor-pointer"
                >
                    Already have an account? Sign in
                </a>
            </div>
        </div>
    );
}
