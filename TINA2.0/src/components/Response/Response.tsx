import {
  MdError,
  MdErrorOutline,
  MdOutlineErrorOutline,
  MdReportGmailerrorred,
} from "react-icons/md";
import { useSelector } from "react-redux";
import TINA from "../../assets/avatars/tinaAvatarTransparent.png";
import Linkify from "react-linkify";
import ReactLinkify from "react-linkify";

type Props = {
  response: string;
  error?: boolean;
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
  const parsedResponse = parseStringToLink(response);
  const loading = response === "";

  const properties = {
    target: "_blank",
    style: {
      color: "blue",
      fontWeight: "bold",
    },
  };

  return (
    <div className="flex w-full snap-start items-center justify-center bg-gold drop-shadow-lg dark:bg-darkSoft">
      <div
        className={`group flex w-[45%] ${loading ? "items-center" : null} ${
          loading ? "gap-4" : "gap-6"
        } whitespace-pre-wrap pt-6 pb-10 text-base md:text-sm`}
      >
        {error && (
          <div className="relative flex h-8 w-8 justify-start">
            <img src={TINA} alt="" className="h-8 w-8 -scale-x-100" />
            <MdErrorOutline
              className="absolute -bottom-0.5 -right-1 rounded-full bg-red"
              size={"1.1em"}
            />
          </div>
        )}

        {!error && <img src={TINA} alt="" className="h-8 w-8 -scale-x-100" />}

        {loading ? (
          <span className="inline-block h-4 w-3 animate-[cursor-blink_1.25s_steps(2)_infinite] bg-darkBgLighter dark:bg-divider"></span>
        ) : (
          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
              <a
                target={"_blank"}
                href={decoratedHref}
                key={key}
                className="font-medium text-blueBorder hover:font-semibold dark:text-darkBlueSoft"
              >
                {decoratedText}
              </a>
            )}
          >
            <div
              className={`
          prose break-words rounded-md rounded-tl-none bg-[#f6e5e6] p-2 px-3 text-[15px] outline dark:bg-darkTextSoft  
          ${
            error
              ? "text-redLight outline-2 outline-red"
              : "text-darkBgLight outline-1 outline-darkDivider dark:text-text dark:outline-darkBgLighter"
          }
          `}
            >
              {response}
            </div>
          </Linkify>
        )}
      </div>
    </div>
  );
}

export default Response;
