'use client';

import { useAuth } from '@/contexts/AuthContext';

export default function AuthPage() {
    const { signInWithGoogle, loading } = useAuth();

    return (
        <main
            className="flex min-h-screen items-center justify-center"
            style={{ backgroundColor: '#171717' }}
        >
            {/* Glass card */}
            <div
                className="w-full max-w-[320px] rounded-3xl px-9 py-11"
                style={{
                    background: 'linear-gradient(145deg, rgba(168,85,247,0.13) 0%, rgba(99,102,241,0.07) 50%, rgba(234,179,8,0.06) 100%)',
                    border: '1px solid rgba(168,85,247,0.25)',
                    boxShadow: '0 1px 0 rgba(255,255,255,0.07) inset, 0 24px 48px rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}
            >
                {/* Logo */}
                <div className="mb-10 text-center">
                    <span
                        className="text-[2.6rem] font-bold leading-none text-white"
                        style={{ fontFamily: 'var(--font-schoolbell)' }}
                    >
                        mu8ic
                    </span>
                    <p className="mt-2.5 text-[11px] tracking-[0.12em] text-white/35 uppercase">
                        Sign in to continue
                    </p>
                </div>

                {/* Divider */}
                <div className="mb-8 flex items-center gap-3">
                    <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.3))' }} />
                    <span className="text-[9px] tracking-[0.25em] text-white/20">WELCOME</span>
                    <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(168,85,247,0.3))' }} />
                </div>

                {/* Google Sign In Button */}
                <button
                    type="button"
                    disabled={loading}
                    onClick={signInWithGoogle}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl px-4 py-3 text-[13px] font-medium text-white/70 transition-all duration-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={(e) => {
                        if (!loading) {
                            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(168,85,247,0.14)';
                            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(168,85,247,0.35)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)';
                        (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                >
                    <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                        <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
                        <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                    </svg>
                    {loading ? 'Loading...' : 'Continue with Google'}
                </button>

                {/* Terms */}
                <p className="mt-8 text-center text-[10px] leading-relaxed text-white/18">
                    By continuing, you agree to our{' '}
                    <a href="#" className="text-white/30 underline underline-offset-2 transition-colors hover:text-white/50">
                        Terms
                    </a>
                    {' '}and{' '}
                    <a href="#" className="text-white/30 underline underline-offset-2 transition-colors hover:text-white/50">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </main>
    );
}
