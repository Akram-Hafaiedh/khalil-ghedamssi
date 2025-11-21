// app/(public)/layout.tsx

import PublicHeader from "@/components/layout/public/Header";
import PublicFooter from "@/components/layout/public/Footer";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <PublicHeader />
            {children}
            <PublicFooter />
        </>
    );
}