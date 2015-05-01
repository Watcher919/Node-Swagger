# swagger module reference

This is the installation guide and command reference for `swagger`, the command-line interface for the Swagger module. 

* Prerequisites
* Installation
* Commands

# Prerequisites

* [Node.js](http://nodejs.org/download/) (v0.10.24+)
* [npm](https://docs.npmjs.com/getting-started/installing-node) (v1.3.0+)

# Installation

You can install `swagger` either through npm or by cloning and linking the code from GitHub.  
This document covers the installation details for installing from npm.

## Installation from npm

The `swagger` module and its dependencies are designed for Node.js and is available through npm.

### Linux / Mac from a Terminal Window:

    sudo npm install -g swagger

NOTE: `sudo` may or may not be required with the `-g` option depending on your configuration. If you do not 
use `-g`, you may need to add the `swagger/bin` directory to your PATH manually. On unix-based machines 
the bin directory will often be found here: `/usr/local/lib/node_modules/swagger/bin`.

### Windows, from a Command Prompt:

    npm install -g swagger

# Command reference

To print a list of valid commands, just run `swagger` with no options or -h:

    $ swagger -h

    Usage: swagger [options] [command]
  
  
    Commands:
  
      project <action>  project actions
      docs              open Swagger documentation
      help [cmd]        display help for [cmd]
  
    Options:
  
      -h, --help     output usage information
      -V, --version  output the version number

docs links:

* [project](#project)
* [docs](#docs)

## project

Create and manage Swagger projects on your local machine.
 
    $ swagger project -h

    Usage: swagger-project [options] [command]
  
    Commands:
  
      create <name>                       Create a folder containing a Swagger project
      start [options] [directory]         Start the project in this or the specified directory
      verify [options] [directory]        Verify that the project is correct (swagger, config, etc.)
      edit [options] [directory]          open Swagger editor for this project
      open [directory]                    open browser as client to the project
      test [options] [directory_or_file]  Run project tests

docs links:

* [create](#create)
* [start](#start)
* [verify](#verify)
* [edit](#edit)
* [open](#open)
* [test](#test)

### create 

Create a new Swagger project with the given name in a folder of the same name.

### start

Start the API server in the directory you are in - or, optionally, another directory. The server 
will automatically restart when you make changes to the project.

    $ swagger project start -h
  
    Usage: start [options] [directory]
  
    Start the project in this or the specified directory
  
    Options:
  
      -h, --help              output usage information
      -d, --debug <port>      start in remote debug mode
      -b, --debug-brk <port>  start in remote debug mode, wait for debugger connect
      -m, --mock              start in mock mode
      -o, --open              open browser as client to the project

`-debug` and `-debug-brk` will start the project in debug mode so that you can connect to it via a debugger.

`-mock` will choose controllers from your mock directory instead of your controllers directory. If you have
no controller defined in the mock directory, the system will generate an appropriate response for you based on
the modules you have defined in your Swagger. 

`-open` will start the app and then open a browser as a client to it.

### verify

Verify the project's swagger.

### edit

Open the project in the swagger-editor in your default browser. 

### open

Open your default browser as a client of the project. 

### test

Run the tests for your project using mocha. 

## docs

Opens the Swagger 2.0 documentation web page in your default browser. 
