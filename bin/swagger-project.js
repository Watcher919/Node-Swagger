#!/usr/bin/env node
/****************************************************************************
 The MIT License (MIT)

 Copyright (c) 2015 Apigee Corporation

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
'use strict';

var app = require('commander');
var project = require('../lib/commands/project/project');
var cli = require('../lib/util/cli');
var execute = cli.execute;
var frameworks = Object.keys(project.frameworks).join('|');

app
  .command('create [name]')
  .description('Create a folder containing a Swagger project')
  .option('-f, --framework <framework>', 'one of: ' + frameworks)
  .action(execute(project.create));

app
  .command('start [directory]')
  .description('Start the project in this or the specified directory')
  .option('-d, --debug <port>', 'start in remote debug mode')
  .option('-b, --debug-brk <port>', 'start in remote debug mode, wait for debugger connect')
  .option('-m, --mock', 'start in mock mode')
  .option('-o, --open', 'open browser as client to the project')
  .action(execute(project.start));

app
  .command('verify [directory]')
  .description('Verify that the project is correct (swagger, config, etc)')
  .option('-j, --json', 'output as JSON')
  .action(execute(project.verify));

app
  .command('edit [directory]')
  .description('open Swagger editor for this project or the specified project directory')
  .option('-s --silent', 'do not open the browser')
  .action(execute(project.edit));

app
  .command('open [directory]')
  .description('open browser as client to the project')
  .action(execute(project.open));

app
  .command('test [directory_or_file]')
  .description('Run project tests')
  .option('-d, --debug [port]', 'start in remote debug mode')
  .option('-b, --debug-brk [port]', 'start in remote debug mode, wait for debugger connect')
  .option('-m, --mock', 'run in mock mode')
  .action(execute(project.test));

app.parse(process.argv);
cli.validate(app);
