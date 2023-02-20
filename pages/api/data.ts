import demo from "../../modules/dbmodules/demo/demoModel";
import data_ from '../../mock_json/data.json'

export default async function data(req: any, res: any) {

	// const data = await demo.find({});
	const data = data_;
	res.status(200).json({
		data
	});
};