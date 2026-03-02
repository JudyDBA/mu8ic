import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const response = NextResponse.next({ request });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    const { data: { user } } = await supabase.auth.getUser();
    const { pathname } = request.nextUrl;

    // 로그인 안 된 사용자가 /workspace 접근 시 /auth로 리다이렉트
    if (!user && pathname.startsWith('/workspace')) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    // 이미 로그인된 사용자가 /auth 접근 시 /workspace로 리다이렉트
    if (user && pathname === '/auth') {
        return NextResponse.redirect(new URL('/workspace', request.url));
    }

    return response;
}

export const config = {
    matcher: ['/workspace/:path*', '/auth'],
};
