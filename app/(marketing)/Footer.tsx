import FlagBtn from "./FlagBtn";

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <FlagBtn text="Croatian" imageUrl="/hr.svg" />
        <FlagBtn text="Spanish" imageUrl="/es.svg" />
        <FlagBtn text="French" imageUrl="/fr.svg" />
        <FlagBtn text="Italian" imageUrl="/it.svg" />
        <FlagBtn text="Japanese" imageUrl="/jp.svg" />
      </div>
    </footer>
  );
};

export default Footer;
