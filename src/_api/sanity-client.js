import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const sanityApi = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-02-11',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN
})

const builder = imageUrlBuilder(sanityApi)

export const urlFor = (source) => builder.image(source)