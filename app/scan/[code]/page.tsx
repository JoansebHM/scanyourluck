import GeneralWrapper from "@/components/layout/GeneralWrapper";
import TypewriterText from "@/components/shared/TypewritterText";

async function Page({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;

  return (
    <GeneralWrapper>
      <TypewriterText text={code} />
    </GeneralWrapper>
  );
}

export default Page;
