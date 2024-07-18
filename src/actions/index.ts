import { getStore } from "@netlify/blobs";
import { defineAction, z } from "astro:actions";

const getUniqueId = () => Math.random().toString(36).substring(7);

export const server = {
  postMessage: defineAction({
    accept: "form",
    input: z.object({
      sender: z.string(),
      body: z.string(),
    }),
    handler: async ({ sender, body }) => {
      const timestamp = new Date().toString();

      const store = getStore("messages");
      store.set(getUniqueId(), JSON.stringify({ sender, body, timestamp }));

      return { success: true };
    },
  }),
};
