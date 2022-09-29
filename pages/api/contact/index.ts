import type { NextApiRequest, NextApiResponse } from "next";
import { DefaultResponce } from "../../../types/types";

import { distributeMessage } from '../../../lib/bot'

async function postContactHandler(
  req: NextApiRequest,
  res: NextApiResponse<DefaultResponce>
) {
  let { name, email, question } = req.body;
  if (process.env.SIMPLE_ID && name && email && question) {
    let mesResult = await distributeMessage(process.env.SIMPLE_ID, `${name} - Email: ${email} задал вопрос:\n${question}`);
  }
  return res.status(200).json({ success: true, data: null });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DefaultResponce>
) {
  switch (req.method) {
    case "POST": {
      return await postContactHandler(req, res);
    }
    default: {
      res.status(404).end();
    }
  }
}
