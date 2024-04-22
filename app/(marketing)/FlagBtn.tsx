import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
  text: string;
  imageUrl: string;
};

const FlagBtn = ({ text, imageUrl }: Props) => {
  return (
    <Button size="lg" variant="ghost" className="w-full">
      <Image
        src={imageUrl}
        alt="Croatian"
        height={32}
        width={40}
        className="mr-4 rounded-md"
      />
      {text}
    </Button>
  );
};

export default FlagBtn;
