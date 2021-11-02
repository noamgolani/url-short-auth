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
  - [*] validate url
  - [ ] check if already was shortened
  - [*] return the shorterned url
- [ ] GET /<hash>
  - [ ] store user req data
  - [ ] redirect to the URL
- [ ] GET /app
  - [ ] serve the static fron app
- [ ] GET /api/stats/<hash>
  - [ ] respond with JSON of the stats
