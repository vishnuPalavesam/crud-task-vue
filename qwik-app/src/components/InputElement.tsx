import { component$, $ } from "@builder.io/qwik";
type componentProps = {
  name: string;
  text: string;
  errorText?: string;
  error?: boolean;
  type?: "text" | "password" | "email";
};

const InputElement = component$<componentProps>(
  ({ name, text, errorText, error, type = "text" }) => {
    const onblur = $((ev: FocusEvent, el: HTMLInputElement) => {
      if (!el.value) el.classList.add("border-red-600");
      else el.classList.remove("border-red-600");
    });
    return (
      <>
        <label class="text-gray-500" for={name}>
          {text}
        </label>
        <input
          class="rounded-sm border-1 indent-1"
          onBlur$={onblur}
          id={name}
          placeholder={text}
          name={name}
          type={type}
        />
        {error && <small class="text-red-600">{errorText}</small>}
      </>
    );
  },
);
export default InputElement;
