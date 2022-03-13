import axios from "axios";
const router = require("express").Router();
module.exports = router;

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   })
router.get("/", function (req, res, next) {
  axios
    .get(
      ` "https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=6XSP4NDBIQGSVUDHGB&redirect_uri=http://localhost:3000"`
    )
    .then((response) => {
      res.send(response.data.result);
    })
    .catch((error) => {
      res.send(error.message);
    });
});
