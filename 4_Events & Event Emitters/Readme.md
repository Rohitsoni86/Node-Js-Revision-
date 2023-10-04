In Node.js, events play a crucial role in handling asynchronous operations. They allow different parts of your code to communicate with each other without blocking the execution of the program. This is achieved using the EventEmitter class from the 'events' module.

1.EventEmitter Class:

Node.js provides an EventEmitter class that is the core of the event-driven architecture

const EventEmitter = require('events');

2.Creating an EventEmitter:

You need to create an instance of the EventEmitter class to start emitting and listening for events.

const myEmitter = new EventEmitter();

3.Listening for Events:

myEmitter.on('someEvent', (arg1, arg2) => {
console.log('Event handler called', arg1, arg2);
});

4.Emitting Events:

myEmitter.emit('someEvent', 'arg1value', 'arg2value');
