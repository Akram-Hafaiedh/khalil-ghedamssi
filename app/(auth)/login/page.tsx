import LoginForm from './LoginForm';

export default function LoginPage({ searchParams }: { searchParams: { callbackUrl?: string } }) {
    const callbackUrl = searchParams.callbackUrl || '/dashboard';
    return <LoginForm callbackUrl={callbackUrl} />;
}