JS_FILES=src/app.js
DIST=dist
BUILD=$(DIST)/app.js
TODAY=$(shell date +%Y-%B-%d)
TIMESTAMP="//Created at $(TODAY) \n\n"

all: $(BUILD)

$(BUILD): $(DIST) timestamp
	@ cat $(JS_FILES) >> $@

timestamp:
	@ echo $(TIMESTAMP) > $(BUILD)

$(DIST):
	@ mkdir -p $@

clean:
	@ rm -R $(DIST)


.PHONY: clean
