'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { WorkspaceNavbar } from '@/components/workspace/navbar';
import { PromptInputBox } from '@/components/workspace/prompt-input';

export default function WorkspacePage() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.replace('/auth');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return (
            <main
                className="flex min-h-screen items-center justify-center"
                style={{ backgroundColor: '#171717' }}
            />
        );
    }

    return (
        <main className="min-h-screen" style={{ backgroundColor: '#171717' }}>
            <WorkspaceNavbar />

            {/* Fixed prompt bar */}
            <div className="fixed bottom-0 left-0 right-0 px-4 pb-5">
                <div className="mx-auto max-w-3xl">
                    <PromptInputBox
                        placeholder="어떤 음악을 만들까요?"
                        onSend={(message, files) => {
                            console.log('send:', message, files);
                        }}
                    />
                </div>
            </div>
        </main>
    );
}
