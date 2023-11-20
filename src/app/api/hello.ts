import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log('passou aqui');
  res.status(200).json({ name: 'John doe' });
}
