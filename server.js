const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {getComments, addComment, updateComment, removeComment} = require('./routes/comments');
const {getPosts, addPost, updatePost, removePost} = require('./routes/posts');

let store = {
	posts: [
		{
			name: 'Top 10 ES6 Features every Web Developer must know',
			url: 'https://webapplog.com/es6',
			text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
			comments: [
				{text: 'Cruel…..var { house, mouse} = No type optimization at all'},
				{text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
				{text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
			]
		}
	]
}

app.use(bodyParser.json());

app.use((req, res, next) => {
	req.store = store;
	next()
});

app.get('/posts', getPosts);
app.post('/posts', addPost);
app.put('/posts/:postId', updatePost);
app.delete('/posts/:postId', removePost);

app.get('/posts/:postId/comments', getComments);
app.post('/posts/:postId/comments', addComment);
app.put('/posts/:postId/comments/:commentId', updateComment);
app.delete('/posts/:postId/comments/:commentId', removeComment);

app.listen(3000);