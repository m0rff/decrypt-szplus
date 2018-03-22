#!/bin/sh

# This script creates a ZIP archive of this extension

VERSION=$(jq --raw-output .version manifest.json)
echo "Packing v$VERSION ..."

FILEPATH="./decrypt-szplus-v$VERSION.zip"
rm $FILEPATH &>/dev/null
zip $FILEPATH * --no-dir-entries --exclude *.sh *.zip
echo "=> Built package to: $FILEPATH"