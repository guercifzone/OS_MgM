@echo
rem node serv.js run the project in windows cmd
set url="http://127.0.0.1:8081/"
start chrome %url% 
 cd E:\OS_MgM rem the path of the project
  nodemon server.js
  loop:
  rs
  go to loop: