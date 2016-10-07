start: npm_install
	NODE_REPL_ASSIGN_UNDERSCORE=false nodemon -L

npm_install:
	([ -d "node_modules" ] || npm install) && (cd node_modules/geoip-lite/data &&  [ "$(ls -A ./)" ] && echo "db exists" || npm run-script updatedb)

test:
	echo 'not supported'