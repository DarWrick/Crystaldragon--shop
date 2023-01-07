import SanityClient from "@sanity/client";
import imageurlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "jwr57u7j",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageurlBuilder(client);

export const urlFor = (source) => builder.image(source);
