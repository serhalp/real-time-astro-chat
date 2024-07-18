import { actions, getActionProps } from "astro:actions";

export default function SendChatMessage() {
  return (
    <form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        await actions.postMessage(formData);
      }}
    >
      <input {...getActionProps(actions.postMessage)} />
      <label htmlFor="sender"> Name: </label>
      <input name="sender" id="sender" />

      <br />

      <label htmlFor="body"> Message: </label>
      <textarea name="body" id="body"></textarea>

      <br />

      <button type="submit"> Send </button>
    </form>
  );
}
