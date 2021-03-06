// /index.js

const server = require('server');
const { get, socket } = server.router;
const { render } = server.reply;

server([
  get('/', ctx => render('chat.html'))
]);


const server = require('server');
const { get, socket } = server.router;
const { render } = server.reply;

const updateCounter = ctx => {
  ctx.io.emit('count', ctx.io.sockets.sockets.length);
};

server([
  
  get('/', ctx => render('chat.html')),

  
  socket('connect', updateCounter),
  socket('disconnect', updateCounter)
]);


const server = require('server');
const { get, socket } = server.router;
const { render } = server.reply;


const updateCounter = ctx => {
  ctx.io.emit('count', Object.keys(ctx.io.sockets.sockets).length);
};


const sendMessage = ctx => {
  ctx.io.emit('message', ctx.data);
};

server([
  get('/', ctx => render('chat.html')),
  socket('connect', updateCounter),
  socket('disconnect', updateCounter),
  socket('message', sendMessage)
]);
