# Journal_App
A web app to allow Journal Entries and to calculate statistics about daily activities. It will use Vue.js on the front end with Flask on the backend.

## Development Notes

### Making requests to the server

#### Front End
- Use axios requests, must be async operations
- First argument is the url
- Second argument is the request body (for post, put, patch)
- Use url arguments for get, delete, etc...

#### Serve Side
- Access the request body with request.get_json(), this returns the dictionary of values sent
- request.args gives the arguments of the url after '?'