#! /bin/python3
from pydrive2.auth import GoogleAuth
from pydrive2.drive import GoogleDrive


def fetch_file_data(file_name):
	pass

def login_to_drive():
	gauth = GoogleAuth()
	gauth.LocalWebserverAuth()
	drive = GoogleDrive(gauth)
	return drive

def main():
	drive = login_to_drive()
	file_list = drive.ListFile({'q': "'root' in parents and trashed=false"}).GetList()
	for file1 in file_list:
  		print('title: %s, id: %s' % (file1['title'], file1['id']))



if __name__ == "__main__":
	main()