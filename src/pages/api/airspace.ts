// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

async function getJSON() {
  return fetch('http://localhost:3000/api/testloader')
      .then((response)=>response.json())
      .then((responseJson)=>{return responseJson});
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log()
  async function caller() {
    const json = await getJSON();  // command waits until completion
    console.log(json.hello);  
    res.status(200).json(json)          // hello is now available
}
  caller()
    
}