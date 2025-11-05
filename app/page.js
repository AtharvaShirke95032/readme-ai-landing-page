import { SignInPage } from "@/components/blocks/sign-in-flow-1";
import FooterSection from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black font-sans dark:bg-black overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <SignInPage />
      </main>
      <FooterSection />
    </div>
  );
}