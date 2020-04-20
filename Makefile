dev:
	sass --watch style.sass:style.css

build:
	sass style.sass:style.css  --style compressed
