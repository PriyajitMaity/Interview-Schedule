import { Magnetic } from "@/components/ui/magnetic";

const MagneticBasic = () => {
  return (
    <Magnetic>
      <button
        type="button"
        className=" bg-zinc-900 inline-flex items-center rounded-md border bg-transparent 
                px-6 py-2 text-sm text-zinc-100 transition-all duration-300
              dark:border-zinc-900 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-600"
      >
        <span className="text-xl">join Todo sheet</span>
      </button>
    </Magnetic>
  );
};
export default MagneticBasic;
