### Scripts

- install: `npm install`
- start server: `npm run start`
- build: `npm run build`
- lint: `npm run lint`
- prettier: `npm run prettier`
- run tests: `npm run test`

### Usage

The server will listen on port 3001:
http://localhost:3001/

#### Endpoint to resize images

http://localhost:3001/api/images

Expected query arguments are:

- _filename_: Available filenames are:
  - encenadaport
  - palmtunnel
  - santamonica
  - _width_: numerical pixel value > 0
  - _height_: numerical pixel value > 0

#### Example 1

http://localhost:3001/api/images
displays list available image names

#### Example 2

http://localhost:3001/api/images?filename=santamonica
displays the original test image.

#### Example 3

http://localhost:3001/api/images?filename=santamonica&width=200&height=200
display santamonica image in 200X200 and save.

#### Example 4

http://localhost:3001/api/images?filename=santamonica&width=200
Error Height.
