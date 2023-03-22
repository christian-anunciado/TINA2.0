import React from "react";
import TINA from "../../assets/avatars/tinaAvatarTransparent.png";
type Props = {};

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="scroll-stable min-h-0 w-full flex-[5] overflow-hidden overflow-x-hidden scroll-smooth hover:overflow-y-auto">
    {children}
  </div>
);

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 overflow-y-auto">
    {children}
  </div>
);

const Header = () => (
  <div className="flex flex-col items-center gap-2 text-center text-2xl font-bold uppercase lg:text-3xl">
    <img
      src={TINA}
      alt=""
      className="pointer-events-none h-[150px] w-[150px] md:h-[200px] md:w-[200px] xl:h-[250px] xl:w-[250px]"
    />
    Teknoy INquiry Assistant (TINA)
  </div>
);

const Info = ({ text }: { text: string }) => (
  <div className="flex w-[240px] flex-col items-center justify-start gap-4">
    <div className="prose w-[240px] whitespace-normal rounded-lg bg-soft py-3 px-4 text-center text-sm font-medium text-darkSoft dark:bg-darkSoft dark:text-darkText md:text-[13px]">
      {text}
    </div>
  </div>
);

const Infos = ({ infos }: { infos: string[] }) => (
  <div className="grid justify-center gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
    {infos.map((info) => (
      <Info text={info} key={info} />
    ))}
  </div>
);

const Example = () => (
  <div className="italic text-darkTextSoft dark:text-darkTextSoft md:text-sm">
    Try asking: <span className="font-medium">"When is the enrollment?"</span>
  </div>
);

function Introduction({}: Props) {
  const infos = [
    `A chatbot designed to answer your school-related questions.`,
    `Want to know more about a particular subject? Or do you have questions about your school's policies or procedures? Just ask me!`,
    `I'm available 24/7 to provide you with accurate and reliable information.`,
    `I'm always learning and improving, so if I don't know the answer to your question, I'll do my best to find it for you.`,
  ];
  return (
    <Container>
      <Wrapper>
        <Header />
        <Infos infos={infos} />
        <Example />
      </Wrapper>
    </Container>
  );
}

export default Introduction;
