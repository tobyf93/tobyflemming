Work In Progress...

#MVP
- web
  - ~~Dockerfile copies contents of app, installs dependencies, exposes port~~
  - ~~docker-compose to run image, mount volumes for hot reloading later~~
  - ~~webpack dev server in dev environment~~
  - bundle hosted by express or nginx container
- ~~eslint with airbnb standards~~
- ~~React/redux~~
- api
  - express server running out of container
  - /albums endpoint
    - image URLs
    - album meta data (name)
  - /album/:name returning image URLs
- File watching and processing

##As a user i want to...
- See a photo feed
- Click/tap on photo to see description
- Have a contact form for getting quotes

##As an admin i want to...
- Upload images with meta data

#Bonus
##As a user i want to...
- Filter images based on tags

##As an admin i want to...
- Backup RAW files
