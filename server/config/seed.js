/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

const Todo = require('../api/todo/todo.model');

Todo.find({}).remove(function() {
  Todo.create({
    title : 'Learn some stuff about MongoDB',
    completed: false,
    important: true
  }, {
    title : 'Play with NodeJS',
    completed: true,
    important: false
  });
});
