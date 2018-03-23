# decrypt-sueddeutsche
A Chrome plugin to decrypt SZPlus articles

## Build

1. Go to the Chrome extensions page
2. Enter 'Developer mode'
3. Click 'Pack extension'
4. Choose 'decrypt-szplus' folder
5. (optionally) choose a .pem file

## Installation

1. Download the latest crx file from the [releases](https://github.com/m0rth1um/decrypt-szplus/releases/latest).

2. Drag'n'drop the crx file into the Chrome extensions page (chrome://extensions/ or Menu > More Tools > Extensions)

3. Read SZPlus arcticles (some may not work, please don't hate me)

4. ???

5. Profit


## How does it work?

I figured out that arcticle that are behind the SZPlus paywall can still be retrieved via the AMP protocol.
This extension checks if the article is a SZPlus arcticle and then fetches the article content via AMP.
