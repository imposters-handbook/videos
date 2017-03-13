#!/bin/sh
IMAGES=$(ls ./images/**/*.jpg ./images/**/*.png)
DIST=./dist

if [ -d "$DIST" ]; then
	rm -R "$DIST"
fi

mkdir "$DIST"

for IMG in $IMAGES
do
	convert $IMG -resize 600x400 "$DIST/$(basename $IMG)"
done
