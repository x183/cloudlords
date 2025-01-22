import { Router } from "express";
import { readJSON, readText } from "../holp/files";
const cloudService = Router();

const refetchDataIfNecessary = async () => {
	const currentTime = new Date().getTime();
	const fetchTime = parseInt(readText("fetchTime")[0]) * 1000;
	const timeDiff = (currentTime - fetchTime) / 1000 * 60 * 60 * 24; // Days since last fetch
	if (timeDiff < 1) return;
	console.log("Time to refetch data");

};

cloudService.get("/allClouds", (req, res) => {
	const addType = (objList: any[], type: string) =>
		objList.map(
			(obj: any) => {
				const name = Object.keys(obj)[1];
				obj["name"] = obj[name];
				delete obj[name];
				return { ...obj, "type": type };

			});
	refetchDataIfNecessary().then(() => {
		// This part is a bit ugly, but should work fine
		const games = addType(readJSON("games"), "game");
		const maintenance = addType(readJSON("maintenance"), "maintenance");
		const tea = addType(readJSON("tea"), "tea").concat(maintenance);
		const clouds = games.concat(tea);
		res.json(clouds);
	});
})

export default cloudService;