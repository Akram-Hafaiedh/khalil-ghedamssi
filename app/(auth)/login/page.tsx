import LoginForm from './LoginForm';

export default async function LoginPage({ 
    searchParams 
}: { 
    searchParams: Promise<{ callbackUrl?: string }> 
}) {
    const params = await searchParams;
    const callbackUrl = params.callbackUrl || '/dashboard';
    return <LoginForm callbackUrl={callbackUrl} />;
}