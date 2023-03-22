import Avatar3 from "../../assets/img/studentAvatar-transparent.png";
type Props = {
  query: string;
};

function Query({ query }: Props) {
  return (
    <div className="group flex w-[80%] gap-6 pt-6 pb-8 md:w-[60%] xl:w-[48%]">
      <img src={Avatar3} alt="" className="h-8 w-8" />
      <div className="prose break-words py-1 text-base text-white dark:text-divider">
        {query}
      </div>
    </div>
  );
}
export default Query;
