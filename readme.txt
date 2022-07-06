Express & React:
How express and react are connected??
make a react app of name client or anyother name and a file of server.
Now we know we can start react app by writing npm start and server file by node server.js
But to run them concurrently on same command we have to do some changing i.e:
Install concurrently library:
npm install -g concurrently(It helps to run multiple commands concurrently)

    "client":"npm start --prefix client",
    "server":"nodemon server.js",
Add this to the scripts of ur pacakage.json of ur main folder
now we can run react app by running npm run client and server by npm run server
But to run them concurrently we have to make another script:
"dev":"concurrently \"npm run server\" \"npm run client\" "
now we just have to run npm run dev
Make sure u have different localhost for like 3001 if react app is running on 3000

Now u want to send data from server to client.How u will u do as they r runnig on different local host
example if i want to get data data from localhost:3001/api/user(my server)
and if i write axios.get('/api/user') then it will go to localhost:3000/api/user

To resolve this we will go to pkg.json file of client and proxy the server
  "proxy":"http://localhost:3001"