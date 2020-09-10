# [One Stop News](http://news.jjgeastwood.com)
This app provides a friendly UI and links to news articles from a few different news sources.
## Motivation
This app was created to provide one location to see articles from many different news sources in an attempt to gain exposure to multiple sides of issue.
## Technologies Used
#### Built with
- [Vue.js](https://vuejs.org/)
- [Express.js](https://expressjs.com/)
#### Deployed with [AWS](https://aws.amazon.com/)
- [S3](https://aws.amazon.com/s3/) - holds static files generated by Vue.js
- [Lambda](https://aws.amazon.com/lambda/) - handles REST requests
- [API Gateway](https://aws.amazon.com/api-gateway/) - proxies REST requests to Lambda
- [Route 53](https://aws.amazon.com/route53/) - handles the DNS record ([news.jjgeastwood.com](news.jjgeastwood.com))
## Installation
1. Install [yarn](https://yarnpkg.com/) (with [homebrew](https://brew.sh/): `brew install yarn`)
2. Run the command `yarn init` in the project root
## Running locally
#### Development
1. Request API keys from the [New York Times](https://developer.nytimes.com/) and [The Guardian](https://open-platform.theguardian.com/)
2. Run the command `echo "export GUARDIAN_API_KEY=<guardian-api-key>" > .env && echo "export NYT_API_KEY=<nyt-api-key>" >> .env` in the ui server directory
3. Run `yarn dev` 
#### Production (server)
Run `pm2 start` to test the production build.
