'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function WorkspaceNavbar() {
    const { user, signOut } = useAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.replace('/auth');
    };

    const avatarUrl = user?.user_metadata?.avatar_url as string | undefined;
    const displayName = user?.user_metadata?.full_name as string | undefined;
    const initial = (displayName?.[0] ?? user?.email?.[0] ?? '?').toUpperCase();

    return (
        <nav
            className="sticky top-0 z-50 flex items-center justify-between px-6"
            style={{ height: '56px' }}
        >
            {/* ─── Logo ─────────────────────────────────────────── */}
            <span
                className="select-none text-[1.35rem] font-bold leading-none text-white"
                style={{ fontFamily: 'var(--font-schoolbell)' }}
            >
                mu8ic
            </span>

            {/* ─── Search ───────────────────────────────────────── */}
            <div className="mx-8 w-full max-w-[400px]">
                <div
                    className="relative flex items-center"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 100%)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: '12px',
                        boxShadow:
                            '0 1px 0 rgba(255,255,255,0.07) inset, 0 0 0 1px rgba(255,255,255,0.03), 0 4px 16px rgba(0,0,0,0.18)',
                    }}
                >
                    {/* search icon */}
                    <svg
                        className="absolute left-3.5 shrink-0 text-white/[28%]"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                    </svg>

                    <input
                        type="text"
                        placeholder="Search..."
                        readOnly
                        className="w-full cursor-default bg-transparent py-[9px] pl-9 pr-4 text-[12.5px] text-white/55 placeholder:text-white/[22%] outline-none"
                    />

                    {/* keyboard hint */}
                    <span
                        className="mr-3 shrink-0 rounded-[5px] px-1.5 py-0.5 text-[9px] text-white/20"
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}
                    >
                        ⌘K
                    </span>
                </div>
            </div>

            {/* ─── Profile ──────────────────────────────────────── */}
            <div className="group relative">
                {/* Avatar button */}
                <button
                    type="button"
                    className="relative flex h-[34px] w-[34px] items-center justify-center overflow-hidden rounded-full transition-all duration-200 group-hover:scale-105"
                    style={{
                        background: avatarUrl
                            ? 'transparent'
                            : 'linear-gradient(135deg, rgba(168,85,247,0.35) 0%, rgba(99,102,241,0.3) 100%)',
                        border: '1.5px solid rgba(255,255,255,0.18)',
                        boxShadow:
                            '0 1px 0 rgba(255,255,255,0.12) inset, 0 4px 12px rgba(0,0,0,0.35)',
                    }}
                >
                    {avatarUrl ? (
                        <Image
                            src={avatarUrl}
                            alt={displayName ?? 'Profile'}
                            width={34}
                            height={34}
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <span className="text-[13px] font-semibold text-white/80">
                            {initial}
                        </span>
                    )}

                    {/* glint */}
                    <span
                        className="pointer-events-none absolute inset-0 rounded-full"
                        style={{
                            background:
                                'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%)',
                        }}
                    />
                </button>

                {/* Popover */}
                <div
                    className="invisible absolute right-0 top-[calc(100%+10px)] w-[188px] translate-y-1 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                    style={{
                        background:
                            'linear-gradient(160deg, rgba(38,38,45,0.94) 0%, rgba(22,22,28,0.97) 100%)',
                        backdropFilter: 'blur(28px) saturate(160%)',
                        WebkitBackdropFilter: 'blur(28px) saturate(160%)',
                        border: '1px solid rgba(255,255,255,0.09)',
                        borderRadius: '16px',
                        boxShadow:
                            '0 1px 0 rgba(255,255,255,0.07) inset, 0 0 0 1px rgba(255,255,255,0.03), 0 20px 48px rgba(0,0,0,0.55)',
                        padding: '6px',
                    }}
                >
                    {/* User info */}
                    <div className="px-3 py-2.5">
                        {displayName && (
                            <p className="truncate text-[12px] font-medium text-white/75">
                                {displayName}
                            </p>
                        )}
                        <p className="truncate text-[10.5px] text-white/[32%]">
                            {user?.email}
                        </p>
                    </div>

                    {/* divider */}
                    <div
                        className="mx-2 my-1 h-px"
                        style={{
                            background:
                                'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)',
                        }}
                    />

                    {/* Sign out */}
                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="flex w-full items-center gap-2 rounded-[10px] px-3 py-2 text-[11.5px] text-white/45 transition-colors duration-150 hover:bg-white/[0.06] hover:text-white/80"
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="shrink-0"
                        >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Sign out
                    </button>
                </div>
            </div>
        </nav>
    );
}
