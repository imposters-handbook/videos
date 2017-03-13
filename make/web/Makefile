#goal: replace grunt/gulp/whatever
SASS=node_modules/.bin/node-sass
SASS_FILES=assets/sass/main.scss
JS_FILES=assets/js/*.js
UGLIFY=node_modules/.bin/uglifyjs
DIST_CSS=public/css
DIST_JS=public/js
BUILD_CSS=$(DIST_CSS)/app.css
BUILD_JS=$(DIST_JS)/app.js

all: $(BUILD_CSS) $(BUILD_JS)

$(BUILD_CSS): $(DIST_CSS)
	@ $(SASS) --output-style compressed $(SASS_FILES) > $@

$(BUILD_JS): $(DIST_JS)
	@ cat $(JS_FILES) | $(UGLIFY) > $@

$(DIST_CSS):
	@ mkdir $@

$(DIST_JS):
	@ mkdir $@

clean:
	@ rm -rf $(DIST_CSS) $(DIST_JS)

.PHONY: clean
