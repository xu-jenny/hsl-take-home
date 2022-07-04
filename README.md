## Getting Started

### Server setup
- install docker
- from the root of the directory, run `docker-compose up`


docker should automatically install dependencies. but if you run into errors around pip package dependencies, you will need to manually install the pip packages in docker by:
1. `docker ps` to find the container id of the django instance
2. `docker exec -it [CONTAINER_ID] /bin/bash/` this will execute the python shell in the image
3. `pip install -r requirements.txt`

### UI setup
1. install npm or yarn
2. `cd feedbackui_web`
3. `npm install` or `yarn install`
4. run `npm start` or `yarn start`

### Other info
This repo is a UI that has 3 screens:
- ID input screen - input an ID of 10 digits that belongs in the database
- Form Feedback screen - record the survey feedback for the user of ID inputted in previous screen
- Thank you screen - if you are admin, you will also see all users in the database

Database is postgres that is manually populated by command. There's no api to add records. 

To connect to database:
1. connect to postgres container by `docker ps` to find the postgres container id
2. `docker exec -it [CONTAINER_ID] /bin/sh/` to execute postgres
3. `#=psql --username postgres` to log on to the super user. if it asks for password you can find it in `settings.py`
4. run `\d` to see a list of tables, the table used is `feedbackui_experimentuser`
You can use postgres commands (SQL) to modify the database as you wish


