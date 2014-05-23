# FormatPhoneBR

See it [live!](http://plnkr.co/KaXW4oPFSkDWg9xlEihD)

## What it does?

As a filter, filters it (ooooh, don't say), and as a directive, 'masks' the input.

|      from     |        to       |
| ------------- | --------------- |
|  551132078877 | (11) 3207-8877  |
|    1132078877 | (11) 3207-8877  |
|   55112078877 | (11) 207-8877   |
|       1198181 | (11) 98181      |
| 5511932078877 | (11) 93207-8877 |
|   11932078877 | (11) 93207-8877 |
|         10315 | 10315           |
|           199 | 199             |
|          0800 | 0800            |
|       0800215 | 0800 215        |
|   08007260505 | 0800 726 0505   |

## Quickuse

For using this lib you're just required to perform:

```sh
$ bower install ng-format-phone-br
```

and then add it to your angular project as you do with any other libs (will describe this later).

For usage, see the demo (the same that is on [plunker](http://plnkr.co/KaXW4oPFSkDWg9xlEihD))

## Building && Testing

```sh
$ npm install  # will also trigger bower install when it finishes
$ npm test     # will run the unit tests
$ npm run protractor  # will run e2e tests
```
