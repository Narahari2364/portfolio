import Link from "next/link";
import Button from "@/components/ui/Button";
import PageContainer from "@/components/layout/PageContainer";
import Section from "@/components/layout/Section";

export default function NotFound() {
  return (
    <Section className="pt-32 min-h-screen flex items-center">
      <PageContainer>
        <div className="text-center">
          <h1 className="text-6xl sm:text-8xl font-light mb-6">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Page not found
          </p>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </PageContainer>
    </Section>
  );
}

