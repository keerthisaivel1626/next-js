// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

export default function getData(){
  fetch("https://itunes.apple.com/in/rss/topalbums/limit=25/json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then(function (response) {
      //console.log('response',response)
      return response.json();
    })
    .then(function (myJson) {
      const data = myJson.feed.entry.map(function (item) {
        return {
          name: item["im:name"].label,
          image: item["im:image"],
        };
      });

      
    });
    
}