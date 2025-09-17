import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="grid place-items-center items-center text-center gap-2">
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis sit eveniet quisquam
        tenetur fugiat nostrum dolor consectetur ducimus possimus, obcaecati ipsum omnis, quasi
        ullam nesciunt nemo molestiae laboriosam quos neque!
      </h1>
      <img
        src="https://images.unsplash.com/photo-1506765515384-028b60a970df"
        width="600"
        height="500"
        alt="Login"
      />
    </div>
  );
});
