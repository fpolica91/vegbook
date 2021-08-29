import Prismic from "@prismicio/client"

const url = process.env.PRISMIC_ENDPOINT as string

export function getPrismicClient(req?: unknown){
  const prismic = Prismic.client(url , {
    req, 
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  })
  return prismic
}