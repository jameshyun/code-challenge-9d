# 9Digital Coding Challenge
A small JSON-based web service

# Description
The application was built on top of NodeJS(ExpressJS)

## Prerequisites
NodeJS@6.9.4
npm@3.10.10

For protect Environment variables,
you need to create a file called "config.json" under ./server/config/ with JSON data below:

{

	"test": {
	
		"PORT": 3000
		
	},
	
	"development": {
	
		"PORT": 3000		
		
	}
	
}

## Installing
1. Get the project files from GitHub(https://github.com/sydjung/code-challenge-9d)
2. Create a project folder with any name.
3. Place project files into the project foldedr
4. Install packages - All necessaray packages can be installed with **"npm install"**.

# Running the tests
###### There is only one route(root) with POST method available for this project.
The automated test for POST / route can be run with **"npm test-watch"**.

# Deployment
###### You can only send a POST request at a root path through our service(https://code-challenge-9d.herokuapp.com/)




