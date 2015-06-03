This is just a minimalistic scaffold to node.js / io.js web projects. There is no framework (just tiny modules found on npm), and it's database agnostic, meaning you can use leveldb, mongo, couchdb, etc...

## getting started

### install the modules
    npm install

### build and run

    npm start

### build views and styles only
    npm run build

### build views only
    npm run templatizer

### build styles only
    npm run stylus

### test
    npm test


## views

Views are written in Jade & piped into a static page.

### example
### in

`/resources/jade_views/hello.jade`

```
h1 hello!

article
  p this is a nested example
```

`/lib/index.js`

```
router.addRoute('/hello', function (req, res) {
  layout(res).end(views.hello())
})
```

### out

```
<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="/public/styles/app.css">
<div id="container"><h1>hello!</h1><article><p>this is a nested example</p></article></div>
```

## styles

styles are written in Stylus & compiled into a single autoprefixed `app.css`.

### example

### in

`/resources/stylus/_foo.styl`

```
.foo
  border-radius 3px

```

`/resources/stylus/_bar.styl`

```
.bar
  display flex
  color red
  background #f9f9f9

```

`/resources/stylus/app.styl`

```
@import '_foo'
@import '_bar'

```

### out
`/static/public/styles/app.css`

```
.foo{border-radius:3px}.bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:#f00;background:#f9f9f9}
```
