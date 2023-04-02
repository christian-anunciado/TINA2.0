import { MdErrorOutline } from "react-icons/md";
import TINA from "../../assets/avatars/tinaAvatarTransparent.png";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  response: string;
  error?: boolean;
};

function Response({ response, error }: Props) {
  const bitIndex = response.indexOf("bit");
  const httpIndex = response.indexOf("http");

  if (bitIndex !== -1 && httpIndex === -1) {
    response = response.replace(/bit\.ly/g, "http://bit.ly");
  }

  const loading = response === "";

  return (
    <div className="flex w-full items-center justify-center bg-gold drop-shadow-lg dark:bg-darkSoft">
      <div
        className={`group flex w-[80%] md:w-[60%] xl:w-[48%] ${
          loading ? "items-center" : null
        } ${
          loading ? "gap-3 lg:gap-4" : "gap-6"
        } justify-center whitespace-pre-wrap pt-6 pb-10 text-sm md:text-base`}
      >
        {error && (
          <div className="relative flex h-8 shrink-0 justify-start">
            <img src={TINA} alt="" className="h-8 w-8 -scale-x-100" />
            <MdErrorOutline
              className="absolute -bottom-0.5 -right-1 rounded-full bg-red"
              size={"1em"}
            />
          </div>
        )}

        {!error && <img src={TINA} alt="" className="h-8 w-8 -scale-x-100" />}

        <div
          className={`markdown prose flex w-[calc(100%-50px)] grow-0 flex-col justify-center whitespace-pre-wrap break-words rounded-md rounded-tl-none text-[15px] lg:w-[calc(100%-100px)]
          ${
            error
              ? "text-redLight outline-2 outline-red"
              : "text-darkBgLight outline-1 outline-darkDivider dark:text-text dark:outline-darkBgLighter"
          }
          ${
            !loading &&
            "bg-[#f6e5e6] p-2.5 pl-3 pr-3 pb-3.5 outline dark:bg-darkTextSoft md:text-justify"
          }
          `}
        >
          {loading && (
            <span className="inline-block h-4 w-3 animate-[cursor-blink_1.25s_steps(2)_infinite] bg-darkBgLighter dark:bg-divider"></span>
          )}
          {!loading && (
            <ReactMarkdown
              children={response}
              remarkPlugins={[remarkGfm]}
              linkTarget="_blank"
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default Response;
