## Getting Started

###Server setup
1. install docker
2. from the root of the directory, run `docker-compose up`
docker should automatically install dependencies. but if you run into errors around pip package dependencies, you will need to manually install the pip packages in docker by:
1. `docker ps` to find the container id of the django instance
2. `docker exec -it [CONTAINER_ID] /bin/bash/` this will execute the python shell in the image
3. `pip install -r requirements.txt`

### UI setup
1. install npm or yarn
2. `cd feedbackui_web`
3. `npm install` or `yarn install`


This repo is a UI that has 3 screens:
1. ID input screen - input an ID of 10 digits that belongs in the database
2. Form Feedback screen - record the survey feedback for the user of ID inputted in previous screen
3. Thank you screen - if you are admin, you will also see all users in the database

Database is postgres that is manually populated by command. There's no api to add records. 
