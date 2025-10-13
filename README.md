# MusicLabelManager
Website for managing labels, producers, artists and music.

## Project Requirements
- [X] The project will use a MySQL database and will be programmed in PHP. 
- [ ] Through the application, deletion, adding, reading operations will be performed on the database.
- [ ] There will be a user login/registration page.
- [ ] There will be several categories of users. Each category will have certain specific actions.
- [ ] The app will contain several dynamic pages with links to each other. 
- [ ] There will be the possibility of generating and viewing reports (not just HTML/PHP/CSV).
- [ ] Website analytics: visitors, hits, etc. 
- [ ] Contact form with the possibility to send emails.
- [ ] Integration of information (not just pages, elements of them – parsing content) from external sources.
- [ ] End of the session.

## Stack
- Docker
- Laravel PHP (backend)
- MySQL (database)
- Vite + React (frontend)

## Development
- Build with:
```sudo docker compose up -d --build```

## Production
- Stop and remove all containers: 
``` sudo docker stop $(sudo docker ps -a -q)```
``` sudo docker rm -f $(sudo docker ps -a -q) ```

- Build with:
```sudo docker compose up -d --build```