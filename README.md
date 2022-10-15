# Schedule-Management-System
 backend assignment

## Start the server using command --> npm run dev

## To schedule the meeting you need the register and login first.

### After the starting server you need to first register by using paramenter (name,email,password)
### ex--> {"name":"vaibhav","email":"vaibhav@gmail.com":"password":"jkjTjl34ljljlkj"}

### register api--> http://localhost:8080/api/v1/register (Post request)

### In Login section you need only two parameter email and password.
### ex--> {"email":"vaibhav@gmail.com":"password":"jkjTjl34ljljlkj"}

### login api--> http://localhost:8080/api/v1/login (Post request)

### you can logout your account using api --> http://localhost:8080/api/v1/logout (Get request)

### If you want to schedule new meeting then use below post request of parameter(date,startTime,endTime) is creating your meeting in particular room.
### ex--> {"date":"2021-06-22T21:30:34.736+00:00",
###         "startTime":"2021-06-22T21:30:34.736+12:00",
###         "endTime":"2021-06-22T21:30:34.736+13:00",}

### schedule meeting api-->    http://localhost:8080/api/v1/schedule  (Post Request)

### Find all meeting schedule using below api

### getting all schedules of meeting api-->    http://localhost:8080/api/v1/schedule  (Get Request)

### If you want to change the meeting time then use below api
 
### update meeting api-->    http://localhost:8080/api/v1/schedule/:id  (Put Request) (pass the parameter inside the body you want to change startTime,endTime,date)

### If you want to delete the schedule meeting use below api

### delete meeting api-->    http://localhost:8080/api/v1/schedule/:id  (delete Request)

