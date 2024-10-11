require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  
    "login": "sahildando",
    "id": 118820911,
    "node_id": "U_kgDOBxUQLw",
    "avatar_url": "https://avatars.githubusercontent.com/u/118820911?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sahildando",
    "html_url": "https://github.com/sahildando",
    "followers_url": "https://api.github.com/users/sahildando/followers",
    "following_url": "https://api.github.com/users/sahildando/following{/other_user}",
    "gists_url": "https://api.github.com/users/sahildando/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sahildando/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sahildando/subscriptions",
    "organizations_url": "https://api.github.com/users/sahildando/orgs",
    "repos_url": "https://api.github.com/users/sahildando/repos",
    "events_url": "https://api.github.com/users/sahildando/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sahildando/received_events",
    "type": "User",
    "site_admin": false,
    "name": "SAHIL SHARMA",
    "company": null,
    "blog": "",
    "location": "india",
    "email": null,
    "hireable": null,
    "bio": "I ' m Sahil sharma student at a government-aided engineering institute. My specialization is in the field of machine learning, dev and data science",
    "twitter_username": "sahilsharma516",
    "public_repos": 32,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-11-22T12:38:04Z",
    "updated_at": "2024-10-10T21:28:42Z"
  }


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('<h1>sahilsharma516</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('Arkhamknight')
})


app.get('/github', (req, res) => {
  res.json(githubData)
})




app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})