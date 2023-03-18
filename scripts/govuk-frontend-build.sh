#!/bin/bash

source ./scripts/govuk-frontend-vars.sh

# Clone the specific version of govuk-frontend
git clone --depth 1 --branch "v${version}" "https://github.com/alphagov/govuk-frontend"

# Copy the govuk CSS and JS to libs
cp "${src}.min.css" "${dest}.min.css"
cp "${src}.min.js" "${dest}.min.js"

# Copy the govuk assets to static
mkdir -p "./static/assets"
cp -r "${dist_dir}/assets" "./static"

# Delete the govuk-frontend clone
rm -rf "./govuk-frontend"
