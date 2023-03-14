import Avatar3 from "../../assets/img/studentAvatar-transparent.png";
type Props = {
  query: string;
};

function Query({ query }: Props) {
  return (
    <div className="group flex w-[45%] gap-6 pt-6 pb-8">
      <img src={Avatar3} alt="" className="h-8 w-8" />
      <div className="py-1 dark:text-divider">{query}</div>
    </div>
  );
}
export default Query;
