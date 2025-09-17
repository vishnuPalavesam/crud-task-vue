import { component$ } from "@builder.io/qwik";
interface ButtonProps {
  text: string;
}

export default component$(({ text }: ButtonProps) => {
  return (
    <button class="mt-5 max-w-min rounded-md border-1 bg-green-400 p-1 text-center">{text}</button>
  );
});
