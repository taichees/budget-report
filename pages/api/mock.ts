
import type { NextApiRequest, NextApiResponse } from 'next'
import mock from '../../mock_json/mock.json'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>) {
	res.status(200).json(mock);
};