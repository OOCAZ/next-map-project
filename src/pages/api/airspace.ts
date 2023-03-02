// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

async function dataFetcher(){
    const response = await fetch("http://localhost:3000/api/testloader")
    return response.json()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const response = await fetch("http://localhost:3000/api/testloader")
    const data = response.json()
    console.log(data)
  res.status(200).json(data)
}