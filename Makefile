dev:
	sass --watch style.sass:style.css

clean:
	rm -rf ./index.html
	rm -rf ./css
	rm -rf ./fonts
	rm -rf ./img
	rm -rf ./js
	rm -rf ./CNAME

build:
	sass ./themes/eptis/css/style.sass:./themes/eptis/css/style.css  --style compressed
	lein run
	cp -r public/index.html ./index.html
	cp -r public/css ./css
	cp -r public/fonts ./fonts
	cp -r public/img ./img
	cp -r public/js ./js
	cp -r public/CNAME ./CNAME
