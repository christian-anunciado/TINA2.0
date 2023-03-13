import React from "react";
import TINA from "../../assets/avatars/tinaAvatarTransparent.png";
type Props = {};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-full flex-col items-center justify-center gap-6">
    {children}
  </div>
);

const Header = () => (
  <div className="flex flex-col items-center gap-2 text-3xl font-bold uppercase">
    <img src={TINA} alt="" className="h-[250px] w-[250px]" />
    Teknoy INquiry Assistant (TINA)
  </div>
);

const Info = ({ text }: { text: string }) => (
  <div className="flex w-[240px] flex-col items-center justify-start gap-4">
    <div className="w-[240px] whitespace-normal rounded-xl bg-darkDivider py-3 px-4 text-center text-sm font-medium dark:bg-darkSoft">
      {text}
    </div>
  </div>
);

const Infos = ({ infos }: { infos: string[] }) => (
  <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(0,240px))] justify-center gap-4">
    {infos.map((info) => (
      <Info text={info} />
    ))}
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
    <Wrapper>
      <Header />
      <Infos infos={infos} />
    </Wrapper>
  );
}

export default Introduction;
