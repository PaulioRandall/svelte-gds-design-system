#!/bin/bash

# This file removes the GDS Design System files that had previously been
# copied from the alphagov repository.
# Do this if you need to reimport the files.

source ./scripts/govuk-frontend-vars.sh

rm -rf ${css_dst}
rm -rf ${js_dst}
rm -rf ${js_map_dst}
rm -rf ${assets_dst}
