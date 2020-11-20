const passport = require("passport");
const mongoose = require("mongoose");
const keys = require("../config/keys");
var i = 10;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("hello world");
  });
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/error" }),
    function (req, res) {
      res.redirect("http://localhost:3000/profile");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log(req.query);
    console.log("Logged out");
    res.redirect("http://localhost:3000/");
  });

  app.get("/api/current_user", (req, res) => {
    console.log(req.user);
    res.send(req.user);
  });

  app.get("/api/problems_data", async (req, res) => {
    console.log(req.query.data);
    try {
      let name = req.name;
      const { data } = await axios.get(
        `https://codeforces.com/api/user.status`,
        {
          params: {
            handle: req.query.handle,
            from: 1,
            count: 10000,
          },
        }
      );
      const n = data.result.length;
      const totalResults = data.result;
      let cntOK = 0,
        cntNotOK = 0,
        totalCount = 0,
        ratingRange = 0,
        tagArray = [];
      let ratingForTags = {};
      totalResults.map((obj) => {
        const { tags, rating } = obj.problem;
        const { verdict } = obj;
        tagArray.push(tags);
        let x = {};
        if (verdict === "OK") {
          cntOK += 1;
          if (rating) {
            ratingRange += rating;
            x = tags.map((tag) => {
              return {
                tag: tag,
                rating: rating,
              };
            });
          }
        } else cntNotOK += 1;
        totalCount += 1;
        console.log(x);
        console.log(obj);
      });
      ratingRange /= cntOK;
      console.log(cntOK);
      console.log(cntNotOK);
      res.send(totalResults);
    } catch (err) {
      res.send(err);
    }
  });
};
