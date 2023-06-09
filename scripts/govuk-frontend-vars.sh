#!/bin/bash

# These variables are shared between 'govuk-frontend-init.sh' and
# 'govuk-frontend-clean.sh'

# https://github.com/alphagov/govuk-frontend
version="4.6.0"

src_dir="./govuk-frontend/dist"
filename="govuk-frontend-${version}"

css_src="${src_dir}/${filename}.min.css"
css_dst="./src/lib/govuk/${filename}.min.css"

js_src="${src_dir}/${filename}.min.js"
js_dst="./static/${filename}.min.js"

js_map_src="${src_dir}/${filename}.min.js.map"
js_map_dst="./static/${filename}.min.js.map"

assets_src="${src_dir}/assets/*"
assets_dst="./static/assets"
