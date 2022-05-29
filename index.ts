import * as fetch from 'node-fetch' 
const cheerio = require('cheerio')


const crawl =  async ({ url}) => {
    const res  = await fetch(url)
    const data = await res.text()
    console.log(data)
}