## TODO

### Front

- [ ] **home page** - /app
  - [ ] url shorten input -> POST /api/shrten/ { url: <input url> }
  - [ ] bootstrap sexy design
  - [ ] nice error display
- [ ] **stats page** /app/<UID>
  - [ ] requests the stats from -> GET /api/stats/<UID>
  - [ ] error display
  - [ ] add dashboard with stats display:
    - [ ] locations of requests
    - [ ] unique requesters
    - [ ] usage graph

### Back

- [x] POST /api/shorten/ { url: <input url> }
  - [x] validate url
  - [x] check if already was shortened
  - [x] return the shorterned url
  - [x] check if uid is realy unique
- [x] GET /<UID>
  - [x] store user req data
  - [x] redirect to the URL
- [ ] GET /app
  - [ ] serve the static fron app
- [x] GET /api/stats/<UID>
  - [x] respond with JSON of the stats
- [ ] **refactoring**
