#!/bin/bash

# This file imports the GDS Design System files from a tag of the alphagov
# repository. Once setup this does not need to be done again unless the files
# need reimporting.

# The CSS file is copied to /lib/govuk so it can be imported via Svelte.
# The JS file and assets are copied to /static.

# You may encounter some permissions issues.
# Use 'chmod 744 <filename>' to allow file execution.

source ./scripts/govuk-frontend-vars.sh

# Clone the specific version of govuk-frontend
git clone --depth 1 --branch "v${version}" "https://github.com/alphagov/govuk-frontend"

# Make sure a destination assets folder exists
mkdir -p ${assets_dst}

# Copy the files
cp ${css_src} ${css_dst}
cp ${js_src} ${js_dst}
cp ${js_map_src} ${js_map_dst}
cp -r ${assets_src} ${assets_dst}

# Delete the cloned govuk-frontend repo 
rm -rf "./govuk-frontend"
