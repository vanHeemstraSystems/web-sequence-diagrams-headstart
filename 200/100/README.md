# 100 - js-sequence-diagrams

See https://alternativeto.net/software/js-sequence-diagrams/about/

## 100 - What is js-sequence-diagrams?

A simple JavaScript library to turn text into vector UML sequence diagrams. Heavily inspired by websequencediagrams.com, who offer a server-side solution. js-sequence-diagrams uses Jison to parse the text, and [Snap.svg](https://alternativeto.net/software/snap-svg/) to draw the image.

## 200 - Website

See https://bramp.github.io/js-sequence-diagrams/

See also [How to generate a sequence diagram within markdown using js sequence diagram and mkdocs](https://medium.com/tenxor/how-to-generate-a-sequence-diagram-within-markdown-using-js-sequence-diagram-and-mkdocs-91dd4fe0b8fb)

See also [youtube video js-sequence-diagrams](https://www.youtube.com/watch?v=6lB6Okm8H1Q) at https://www.youtube.com/watch?v=6lB6Okm8H1Q

## 300 - Github Repository

See https://github.com/bramp/js-sequence-diagrams

## 400 - Example

See [README.md](./400/README.md)

## 500 - Requirements

See [README.md](./500/README.md)

## 600 - Installation

See [README.md](./600/README.md)

## 700 - Usage

See [README.md](./700/README.md)

## 800 - Options

See [README.md](./800/README.md)

## 900 - Styling

See [README.md](./900/README.md)

## 1000 - Raphaël Deprecation

See [README.md](./1000/README.md)

## 1100 - Build requirements

See [README.md](./1100/README.md)

## 1200 - Testing

See [README.md](./1200/README.md)

## 1300 - How to release

See [README.md](./1300/README.md)

## 1400 - TODO

See [README.md](./1400/README.md)

## 1500 - Contributors

See [README.md](./1500/README.md)

## 1600 - Thanks

See [README.md](./1600/README.md)

## 1700 - Related

- [Web Sequence Diagrams](http://www.websequencediagrams.com/) Server side version with a commercial offering
- [flowchart.js](https://adrai.github.io/flowchart.js/) A similar project that draws flow charts in the browser

See [README.md](./1700/README.md)

## 1800 - Licence (Simplified BSD License)

See [README.md](./1800/README.md)

## 1900 - SQlite Database

### 100 - Install SQLite

See https://github.com/vanHeemstraSystems/sqlite-headstart

NOTE: Install ***better-sqlite3*** with npm, see https://www.npmjs.com/package/better-sqlite3 as it is more performant.
Instructions for Node.js on the website.

### 200 - Create an SQLite Database

```
$ sqlite3 portfolio_sqlite.sqlite
SQLite version 3.35.5 2021-04-19 18:32:05
Enter ".help" for usage hints.
sqlite> create table sequence_diagram(id integer primary key autoincrement, name varchar(50), code text);
sqlite> insert into sequence_diagram values ('A', 'A->B: Message');
Error: table sequence_diagram has 3 columns but 2 values were supplied
sqlite> insert into sequence_diagram values (,'A', 'A->B: Message');
Error: near ",": syntax error
sqlite> insert into sequence_diagram values ('','A', 'A->B: Message');
Error: datatype mismatch
sqlite> insert into sequence_diagram (name, code) values ('A', 'A->B: Message');
sqlite> insert into sequence_diagram (name, code) values ('B', 'B->C: Message');
sqlite> insert into sequence_diagram (name, code) values ('C', 'C->D: Message');
sqlite> insert into sequence_diagram (name, code) values ('D', 'D->E: Message');
sqlite> insert into sequence_diagram (name, code) values ('E', 'E->F: Message');
sqlite> select * from sequence_diagram;
1|A|A->B: Message
2|B|B->C: Message
3|C|C->D: Message
4|D|D->E: Message
5|E|E->F: Message
```
