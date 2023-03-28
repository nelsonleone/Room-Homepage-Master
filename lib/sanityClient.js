import { createClient } from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
   projectId: "rlqi79bx",
   dataset: "production",
   apiVersion: "2023-03-27",
   useCdn: true
})

const imageBuilder = imageUrlBuilder(client)

export const UrlFor = (source) => {
  return imageBuilder.image(source).url()
}

export default client;