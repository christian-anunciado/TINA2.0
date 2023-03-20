import {
  MdError,
  MdErrorOutline,
  MdOutlineErrorOutline,
  MdReportGmailerrorred,
} from "react-icons/md";
import { useSelector } from "react-redux";
import TINA from "../../assets/avatars/tinaAvatarTransparent.png";

type Props = {
  response: string;
  error?: boolean | false;
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

function Response({ response, error }: Props) {
  console.log("🚀 ~ file: Response.tsx:26 ~ Response ~ error:", error);
  const parsedResponse = parseStringToLink(response);
  const loading = response === "";
  return (
    <div className="flex w-full snap-start items-center justify-center bg-gold drop-shadow-lg dark:bg-darkSoft">
      <div
        className={`group flex w-[45%] ${loading ? "items-center" : null} ${
          loading ? "gap-4" : "gap-6"
        } whitespace-pre-wrap pt-6 pb-10 text-base md:text-sm`}
      >
        <div className="relative flex h-8 w-8 justify-start">
          <img src={TINA} alt="" className="h-8 w-8 -scale-x-100" />
          {error && (
            <MdErrorOutline
              className="absolute -bottom-0.5 -right-1 rounded-full bg-red"
              size={"1.1em"}
            />
          )}
        </div>

        {loading ? (
          <span className="inline-block h-4 w-3 animate-[cursor-blink_1.25s_steps(2)_infinite] bg-darkBgLighter dark:bg-divider"></span>
        ) : (
          <div
            className={`
          prose break-words rounded-md bg-[#f6e5e6] p-2 pl-3 text-[15px]  outline outline-1  dark:bg-darkTextSoft  
          ${
            error
              ? "text-redLight outline-red"
              : "text-darkBgLight outline-darkDivider dark:text-text dark:outline-darkBgLighter"
          }
          `}
          >
            {response}
          </div>
        )}
      </div>
    </div>
  );
}

export default Response;
