import type { NextApiRequest, NextApiResponse } from 'next'
import { DefaultResponce } from '../../../types/types'

async function postContactHandler(
    req: NextApiRequest,
    res: NextApiResponse<DefaultResponce>
 ) {
    console.log(req.body)
    // Оправить на бота инфу
    return res.status(200).json({ success: true, data: null })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DefaultResponce>
) {
    switch (req.method) {
        case 'POST': {
            return await postContactHandler(req, res)
        }
        default: {
            res.status(404).end()
        }
    }
}