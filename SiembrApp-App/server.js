// Angular to Heroku Ref: https://medium.com/better-programming/how-to-deploy-your-angular-9-app-to-heroku-in-minutes-51d171c2f0d

const express = require('express');
const app = express();

app.use(express.static("./dist/SiembrApp-App"));

app.get("/*", function(req, res) {
    res.sendFile("index.html", {root: "./dist/SiembrApp-App/"}
  );
});

app.listen(process.env.PORT || 8080, () => console.log(`Api listening on port ${process.env.PORT || 8080}!`))