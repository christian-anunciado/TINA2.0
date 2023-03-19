import { useSelector } from "react-redux";
import TINA from "../../assets/avatars/tinaAvatarTransparent.png";

type Props = {
  response: string;
};

const parseStringToLink = (input: string) => {
  const regex =
    /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g;
  const output = input.replace(
    regex,
    (x) => '<a href="' + x + '">' + x + "</a>"
  );
  return output;
};

function Response({ response }: Props) {
  const parsedResponse = parseStringToLink(response);
  const loading = response === "";

  return (
    <div className="flex w-full items-center justify-center bg-gold drop-shadow-lg dark:bg-darkSoft">
      <div
        className={`group flex w-[45%] ${loading ? "items-center" : null} ${
          loading ? "gap-4" : "gap-6"
        } whitespace-pre-wrap pt-6 pb-10 text-base md:text-sm`}
      >
        <img src={TINA} alt="" className="h-9 w-9 -scale-x-100" />
        {loading ? (
          <span className="inline-block h-4 w-3 animate-[cursor-blink_1.25s_steps(2)_infinite] bg-darkBgLighter dark:bg-divider"></span>
        ) : (
          <div className="text prose break-words py-1 text-darkBgLight dark:text-[#D1D5DB]">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}

export default Response;
