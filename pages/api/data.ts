import { sqlExecuter } from "../../modules/database";

export default async function data(req: any, res: any) {

	const data = await sqlExecuter.any(
		"select 'DB参照したデータ' as any_column"
	);
	res.status(200).json({
		data
	});
};