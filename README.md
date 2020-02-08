# assignment-blog-api
## Blog API without a database


### cURLs used to test:

1. **app.get('/posts)**

curl "http://localhost:3000/posts"


2. **app.post('/posts', addPost)**

curl -H "Content-Type: application/json" -X POST -d '{"name": "Never enough testing to be done", "url":"http://webapplog.com/es6", "text": "When this works we are all happy"}'  "http://localhost:3000/posts"


3. **app.put('/posts/:postId', updatePost)**

curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"


4. **app.delete('/posts/:postId', removePost)**

curl -X DELETE "http://localhost:3000/posts/0"


5. **app.get('/posts/:postId/comments', getComments)**

curl "http://localhost:3000/posts/0/comments"


6. **app.post('/posts/:postId/comments', addComment)**

curl -H "Content-Type: application/json" -X POST -d '{"text": "Funny comment here"}'  "http://localhost:3000/posts/0/comments"


7. **app.put('/posts/:postId/comments/:commentId', updateComment)**

curl -H 'Content-Type: application/json' -X PUT -d '{"text": "YOU HAVE BEEN REPLACED"}' "http://localhost:3000/posts/0/comments/1"


8. **app.delete('/posts/:postId/comments/:commentId', removeComment)**

curl -X DELETE "http://localhost:3000/posts/0/comments/2"