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
    <div className="flex w-full items-center justify-center drop-shadow-lg">
      <div
        className={`group flex w-[80%] md:w-[60%] xl:w-[48%] ${
          loading ? "items-center" : null
        } ${
          loading ? "gap-3 lg:gap-4" : "gap-6"
        } flex-row-reverse justify-start whitespace-pre-wrap pt-6 pb-10 text-sm md:text-base`}
      >
        {error && (
          <div className="relative flex h-8 shrink-0 justify-start md:mr-4 lg:mr-5">
            <img src={TINA} alt="" className="h-8 w-8" />
            <MdErrorOutline
              className="absolute -left-0.5 -bottom-0.5 rounded-full bg-red shadow-none drop-shadow-none"
              size={"1em"}
            />
          </div>
        )}

        {!error && (
          <img src={TINA} alt="" className="h-8 w-8 md:mr-4 lg:mr-5" />
        )}

        <div
          className={`markdown prose flex max-w-[calc(100%-50px)] grow-0 flex-col justify-center whitespace-pre-wrap break-words rounded-md rounded-tr-none text-[15px] lg:max-w-[calc(100%-100px)]
          ${
            error
              ? "text-red outline-2 outline-red transition-none"
              : "text-darkBgLight outline-1 outline-darkDivider dark:text-text dark:outline-darkBgLighter"
          }
          ${
            loading
              ? "items-end"
              : "bg-[#f6e5e6] p-2.5 pl-3 pr-3 pb-3.5 outline dark:bg-darkTextSoft"
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
