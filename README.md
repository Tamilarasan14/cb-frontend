**1.	Introduction**

This document has a step by step approach for setting up the required software also the code which should be running it in the local environment by using Eclipse or VSCode.

**2.	Installing sotware and configuring environment variable**

*2.1.	Installing NodeJS and NPM* (Same steps as ap-backend)

Install nodejs and npm from

	https://nodejs.org/en/download/
	
Download Windows Installer (.msi) 64bit.

NodeJS version 13.11.0 and NPM version 6.13.7 were used for the initial setup of the project.

**3.	Installing the  IDE and pulling code from Git**

The developer can choose and use anyone of the below IDE to set up the local environment.
1. Eclipse
1. VSCode

**3.1.	Code Setup using Eclipse**

We can use any version of Eclipse. Download Eclipse from

	http://www.eclipse.org/downloads/
	
Choose a mirror close to you and download from there and install it.

	eclipse-inst-win64.exe


*3.1.2.	Pulling Projects from GITHUB* (Very similar steps as ap-backend except the last one)

To get the Kite Administrator Portal front end project

1.	Start Eclipse and create a workspace file in your preferred local directory (ex. C:\AP\ap-frontend) ![Front End Eclipse Workspace Screenshot](/README/FrontEndEclipseWorkspace.png)
1.	 Open the Git perspective.
From Eclipse open Window -> Perspective -> Open Perspective -> Other.. -> Git
1.	In the Git - Select Repositories source.
Click on "Clone a Git Repository" 
1.	Select Clone URI for import from Github.
1.	In the Source Git Repository, copy paste URI https://github.com/kiteaai/ap-frontend .
1.	Provide your Github user and password if it is not there by default and click Next 
1.	Once the project branch appears in the Git Repositories window, choose the required branch (ex. development) and click next.  ![Front End Clone Location Screenshot](/README/FrontEndCloneLocation.png)
1.	Provide a local Destination directory for checkout (ex. C:\AP\ap-frontend-source) and click Finish 
1.	Open a command prompt window and navigate to  the source directory (ex. C:\AP\ap-frontend-source)
1.	Execute the following commands to install

npm install --global react-scripts 

npm install 

**3.2.	Code Setup using VSCode**

*3.2.1.    Installing Visual Studio Code*

We can use any version of Visual Studio Code. Download and Install Visual Studio Code from
	
	https://code.visualstudio.com/Download

*3.2.2.    Installing Git*

Download and Install Git from
	
	https://git-scm.com/downloads

*3.2.3.    Installing Git plugin in VSCode*

1.	Open VSCode.
1.	To Install the Git plugin for VSCode. From VSCode open View-> Extensions-> Type Git in search  -> Install GitHub.


*3.2.4.    Pulling Projects from GITHUB* 

To get the Content Builder front end project

1.	Open VSCode.
1.	Open the Git perspective. From VSCode open View-> SCM 
1.	In the Git - Click on Clone Repository.
![Front End VSCode Workspace Screenshot](/README/VSCodeClone.png)
1.	In the Provide Git Repository URI , copy paste URI https://github.com/kiteaai/ap-frontend.
1.	Provide your Github user and password if it is not there by default and click Enter.
1.	If the Authorize GitHub for VSCode appears in the Browser Click Authorize github and confirm password.
1.	Provide a local Destination directory for checkout (ex. C:\AP\ap-frontend) and click Finish.
1.	Open Cloned Repository by clicking Open in button in dialog box.
![Front End VSCode Cloned Repository Screenshot](/README/VSCodeOpenClonedRepository.png)
1.	To Switch the required branch (ex. development) click the bottom-left corner existing branch name and select from the drop down.
![Front End VSCode Switch Branch Screenshot](/README/VSCodeSwitchBranch.png)
1.	To Open a command prompt window. From VSCode open View -> Integrated Terminal.
![Front End VSCode Toggle Terminal Screenshot](/README/VSCodeToggleTerminal.png)
1.	Execute the following commands to install
	
	npm install --global react-scripts
	
	npm install


**4.	Running the projects**

**4.1. Starting the ap-frontend project from Eclipse.**

1.	Open a command prompt and navigate to the ap-frontend directory (ex. C:\AP\ap-frontend-source).
1.	 Run the command:
npm start
1.	When npm start completes, your default browser should open to [AP Front End](http://localhost:3000) displaying the home page of Kite Administrator Portal.
1.	Click the Health Check link.
1.	Server is DOWN is displayed. ![Server Down Screenshot](/README/ServerDown.png)
1.	See ap-backend project for bringing up backend server.
1.	Once the backend project is up, the health check should show it is up.  ![Server Down Screenshot](/README/ServerUp.png)

**4.2. Starting the ap-frontend project from VSCode.**

1.	From VSCode open Terminal -> New Terminal.
1.	 Run the command:
npm start
1.	When npm start completes, your default browser should open to [AP Front End](http://localhost:3000) displaying the home page of Kite Administrator Portal.
1.	Click the Health Check link.
1.	Server is DOWN is displayed. ![Server Down Screenshot](/README/ServerDown.png)
1.	See ap-backend project for bringing up backend server.
1.	Once the backend project is up, the health check should show it is up.  ![Server Down Screenshot](/README/ServerUp.png)

**5.	What to do if you encounter problems** (Same steps as ap-backend)
1.	XMLHttpRequest CORS policy 
If this message occurs when trying to communicate to backend on local computer "XMLHttpRequest CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource"
Then execute npm install cors-save
