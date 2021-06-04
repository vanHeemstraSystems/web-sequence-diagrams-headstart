echo "Start - install SQLite3"

npm config set user 0
npm config set unsafe-perm true
npm uninstall node-pre-gyp --save
npm install @mapbox/node-pre-gyp --save
npm install sqlite3@5.0.0 --save-exact

echo "End - install SQLite3"
