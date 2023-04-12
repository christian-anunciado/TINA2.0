import Avatar3 from "../../assets/img/student-avatar.png";
type Props = {
  query: string;
};

function Query({ query }: Props) {
  return (
    <div className="flex w-[80%] gap-6 pt-6 pb-8 md:w-[60%] xl:w-[48%]">
      <img src={Avatar3} alt="" className="h-8 w-8" />
      <div className="prose max-w-[calc(100%-50px)] break-words rounded-md rounded-tl-none bg-redLight p-2.5 pl-3 pr-3 pb-3.5 text-[15px] text-white dark:text-divider lg:max-w-[calc(100%-100px)]">
        {query}
      </div>
    </div>
  );
}

export default Query;
