#! /bin/python3
from pydrive2.auth import GoogleAuth
from pydrive2.drive import GoogleDrive
import csv
import json


files_to_use = ["e form (Responses)"]


def main():
	drive = authenticate()
	file_list = drive.ListFile().GetList()
	for file in file_list:
		if file["title"] in files_to_use:
			print('title: %s, id: %s' % (file['title'], file['id']))
			fetch_file_data(file)
	make_json(files_to_use)




def fetch_file_data(file):
	file.GetContentFile(f'{file["title"]}.csv',mimetype='text/csv')

def authenticate():
	settings = {
		"client_config_backend": "service",
			"service_config": {
				"client_json_file_path": "credentials.json",
			}
		}
	# Create instance of GoogleAuth
	gauth = GoogleAuth(settings=settings)
	# Authenticate a service user
	gauth.ServiceAuth()

	drive = GoogleDrive(gauth)
	return drive



def read_csv(file_name):
	data = []
	with open(f"{file_name}.csv", encoding='utf-8') as csv_file:
		csvReader = csv.DictReader(csv_file)
		for rows in csvReader:
			rows["type"] = file_name
			data.append(rows)
	return data

def make_json(file_names):
	data = []
	for file_name in file_names:
		file_data = read_csv(file_name)
		data.append(file_data)
	write_json("form_data",data)

def write_json(file_name,data):
	with open(f"{file_name}.json", 'w', encoding='utf-8') as jsonf:
		jsonf.write(json.dumps(data, indent=4))


if __name__ == "__main__":
	main()