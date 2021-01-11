#!/bin/bash
# a Jekyll post creator, which creates a new file, adds frontmatter,
# and opens the editor and starts Jekyll
new_post() {
  JEKYLL_ROOT=~/Documents/Sites/conery-io-jekyll
  JEKYLL_POSTS=$JEKYLL_ROOT/_posts
  TITLE=$1
  SLUGIFIED="$(echo -n "$TITLE" | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z)"
  NEW_POST_FILE=$JEKYLL_POSTS/$(date +%Y-%m-%d-$SLUGIFIED.md)

  cat <<frontmatter > $NEW_POST_FILE
---
layout: post-minimal
title: "$TITLE"
image: ''
comments: false
categories:
summary: ""
---
frontmatter

  echo "New post created, opening in Atom, starting Jekyll"
  atom $NEW_POST_FILE
  jekyll serve -s $JEKYLL_ROOT
}
