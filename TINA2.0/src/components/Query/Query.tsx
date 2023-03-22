import Avatar3 from "../../assets/img/studentAvatar-transparent.png";
type Props = {
  query: string;
};

function Query({ query }: Props) {
  return (
    <div className="group flex w-[80%] justify-center gap-6 pt-6 pb-8 md:w-[60%] xl:w-[48%]">
      <img src={Avatar3} alt="" className="h-8 w-8" />
      <div className="prose w-[calc(100%-50px)] break-words p-2 text-base text-white dark:text-divider md:w-[calc(100%-60px)] lg:w-[calc(100%-100px)] 2xl:w-[calc(100%-108px)] min-[1638px]:w-[calc(100%-121px)] min-[1760px]:w-[calc(100%-150px)] min-[1800px]:w-[calc(100%-221px)]">
        {query}
      </div>
    </div>
  );
}

export default Query;
