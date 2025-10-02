# curd-operations-assignment--
commands to run the CURD operations

set base=http://localhost:3000/users

1) Get all users -
  curl %base%

2) Get user by ID -
   curl %base%/8
   
3) Post user -
  curl -X POST %base% -H "Content-Type:application/json" -d "{\"name\":\"John\",\"email\":\"john123@gmail.com\"}"

4) Update user by ID -
   curl -X PUT %base%/8 -H "Content-Type:application/json" -d "{\"name\":\"Ram\",\"email\":\"ram@gmail.com\"}"

5) Delete user by ID -
   curl -X DELETE %base%/8
