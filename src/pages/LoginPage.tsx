import { AuthLayout, SignInForm } from "../components/auth";
import signInHero from "../assets/signinpet.png";
import { auth } from "../i18n/auth";
import { localize } from "../i18n/locale";

export default function LoginPage() {
    return (
        <AuthLayout
            imageSrc={signInHero}
            title={localize(auth.heroTitle)}
            description={localize(auth.heroDescription)}
        >
            <SignInForm />
        </AuthLayout>
    );
}
