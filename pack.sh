#!/bin/bash

echo Distributing the extension...
zip -r ~/github-toggle-sidebar.zip . -i 'Assets/*' -i 'manifest.json' -i 'content.js' -i 'toggle-sidebar.js' -i 'README.md' -i 'LICENSE'

