import { Router } from "express";
import { readJSON } from "../holp/files";
const cloudService = Router();

cloudService.get("/allClouds", (req, res) => {
	const addType = (objList: any[], type: string) =>
		objList.map(
			(obj: any) => (
				{ ...obj, "type": type }
			));
	const games = addType(readJSON("games"), "game");
	const maintenance = addType(readJSON("maintenance"), "maintenance");
	const clouds = games.concat(maintenance);
	res.json(clouds);
})

export default cloudService;