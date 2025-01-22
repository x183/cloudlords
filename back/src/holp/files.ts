import fs from "fs";

const readJSON = (fileName: string) => {
	try {
		return JSON.parse(fs.readFileSync(`data/${fileName}.json`, "utf8"));
	}
	catch (e) {
		return [];
	}
}
const readText = (fileName: string) => {
	try {
		return readFile(`${fileName}.txt`).split("\n");
	}
	catch (e) {
		return [];
	}
}

const readFile = (fileName: string) => {
	try {
		return fs.readFileSync(`data/${fileName}`, "utf8");
	}
	catch (e) {
		return "";
	}
}

export {
	readJSON,
	readText,
}