## TODO

### Front

- [ ] **home page** - /app
  - [ ] url shorten input -> POST /api/shrten/ { url: <input url> }
  - [ ] bootstrap sexy design
  - [ ] nice error display
- [ ] **stats page** /app/<hash>
  - [ ] requests the stats from -> GET /api/stats/<hash>
  - [ ] error display
  - [ ] add dashboard with stats display:
    - [ ] locations of requests
    - [ ] unique requesters
    - [ ] usage graph

### Back

- [ ] POST /api/shorten/ { url: <input url> }
  - [x] validate url
  - [ ] check if already was shortened
  - [x] return the shorterned url
  - [x] check if uid is realy unique
- [ ] GET /<hash>
  - [ ] store user req data
  - [x] redirect to the URL
- [ ] GET /app
  - [ ] serve the static fron app
- [ ] GET /api/stats/<hash>
  - [ ] respond with JSON of the stats
