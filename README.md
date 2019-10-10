<p align="center">
  <img src="https://gallery.mailchimp.com/81a14df4fa42a1bebf5e7ff02/images/3edf8995-7586-4aa7-b860-1c49c051c23d.png" width="200" height="auto" />
</p>


# Applied Logger

A simple logging utility that aims to make reading logs quickly locally as well as format our logs nicely for our log aggregation setup.

## What can it do?

Rather than replacing the global `console`, the logger works by wrapping it. This means that you need to import the Applied logger:
`import logger from '@applied/applied-logger'`

Then you can call it:

`logger.log('foo bar blah blah')`

The logger has a number of options:

`logger.error()`
`logger.warn()`
`logger.info()`
`logger.log()`
`logger.debug()`

![Alt text](/readmeImages/levels.png?raw=true "Optional Title")

Each of these will style the output differently + will pretty print data structures it gets passed.

![Alt text](/readmeImages/pretty.png?raw=true "Optional Title")

Theres also a special option:

`logger.sql()`

This will pretty print sql queries given to it.