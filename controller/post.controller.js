const posts = require("../model/posts");
const createError = require("http-errors");
const users = require("../model/users");
const fs = require("fs");
const date = new Date();
const addPost = async (req, res, next) => {
  try {
    if (req.body.userId != req.user._id) {
      throw createError.Forbidden("error permission");
    }
    function makeid(length) {
      var result = [];
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result.push(
          characters.charAt(Math.floor(Math.random() * charactersLength))
        );
      }
      return result.join("");
    }
    let urlpost = req.body.link;
    urlpost = urlpost.match(
      /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
    );
    urlpost = req.body.link
      .replace("https://youtube.com/watch?v=", "")
      .replace("https://www.youtube.com/watch?v=", "")
      .replace("https://m.youtube.com/watch?v=", "")
      .replace("https://youtu.be/", "")
      .replace("http://youtube.com/watch?v=", "");
    const CheckDataPost = await posts.find({ link: urlpost });
    if (CheckDataPost.length > 0) {
      console.log("feled uploaded data");
      res.json({
        code: 404,
        message: "error  create post  lin already published",
      });
    } else {
      if (urlpost) {
        res.send(urlpost);
        const add = await new posts({
          title: req.body.title,
          link: urlpost,
          desc: req.body.desk,
          views: "0",
          catagory: "film",
          urlpost: urlpost,
          imagepost: urlpost,
          userId: req.body.userId,
        }).save();
        const filter = { _id: req.body.userId };
        const checkrowviews = await users.findOne(filter);
        const update = { allvideos: checkrowviews.allvideos + 1 };
        let doc = await users.findOneAndUpdate(filter, update, {
          returnOriginal: false,
        });
        res.json({
          code: 200,
          message: "Successufully add  posts ",
          add,
        });
      } else {
        res.send("nn");
      }
    }
  } catch (error) {
    next(error.message);
  }
};
const FindAllPost = async (req, res, next) => {
  try {
    let param = req.params;
    let query;
    if (param.user != "trend" && param.user) {
      const filter = { userId: param.user, status: true };
      query = await posts.aggregate([
        { $match: filter },
        {
          $sort: {
            _id: -1,
          },
        },
        {
          $lookup: {
            from: "users",
            let: { userId: "$userId" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
              { $project: { password: 0, email: 0, type: 0 } },
            ],

            as: "user",
          },
        },
      ]);
    } else {
      // query = await posts.find().sort([["_id", "descending"]]);
      const filter = { status: true };
      query = await posts.aggregate([
        { $match: filter },
        {
          $sort: {
            _id: -1,
          },
        },
        {
          $lookup: {
            from: "users",
            let: { userId: "$userId" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
              { $project: { password: 0, email: 0, type: 0 } },
            ],

            as: "user",
          },
        },
      ]);
      // .skip(rand);
    }
    if (param.user == "trend") {
      console.log("is trend");
      const filter = { status: true };
      query = await posts.aggregate([
        { $match: filter },
        { $limit: 20 },
        {
          $sort: {
            views: -1,
          },
        },
        {
          $lookup: {
            from: "users",
            let: { userId: "$userId" },
            pipeline: [
              { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
              { $project: { password: 0, email: 0, type: 0 } },
            ],

            as: "user",
          },
        },
      ]);
      // for (i = 0; i < query.length; i++) {
      //   const filter = { urlpost: query[i].urlpost };
      //   const update = {
      //     userId: query[i].userId,
      //   };
      //   let updatePostViews = await posts.findOneAndUpdate(filter, update, {
      //     returnOriginal: false,
      //   });
      //   console.log(updatePostViews);
      // }
    }
    const findall = query;
    res.send(findall);
  } catch (error) {
    next(error.message);
  }
};

const getByuser = async (req, res, next) => {
  try {
    let param = req.params;
    let query;
    let filter;

    if (param.user) {
      if (req.user._id != param.user) {
        throw createError.Forbidden("error permissson");
      }

      const user = await users.findOne({ _id: param.user });

      filter = { userId: user._id };
    } else {
      if (req.user.isAdmin != 1) {
        throw createError.Forbidden("error permissson");
      }
      filter = {};
    }

    query = await posts.aggregate([
      { $match: filter },
      {
        $sort: {
          _id: -1,
        },
      },
      {
        $lookup: {
          from: "users",
          let: { userId: "$userId" },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
            { $project: { password: 0, email: 0, type: 0 } },
          ],

          as: "user",
        },
      },
    ]);

    const findall = query;
    res.send(findall);
  } catch (error) {
    next(error.message);
  }
};
const FindOnePost = async (req, res, next) => {
  try {
    const filter = { urlpost: req.params.id, status: true };
    const findOnePost = await posts.aggregate([
      { $match: filter },
      { $limit: 1 },
      {
        $lookup: {
          from: "users",
          let: { userId: "$userId" },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$userId"] } } },
            { $project: { password: 0, email: 0, type: 0 } },
          ],

          as: "user",
        },
      },
    ]);

    //add views post
    const update = {
      views: findOnePost[0].views + 1,
      userId: findOnePost[0].userId,
    };
    let updatePostViews = await posts.findOneAndUpdate(filter, update, {
      returnOriginal: false,
    });
    const filterUser = { _id: findOnePost[0].userId };
    const findUser = await users.findOne(filterUser);
    const updateallviews = { allviews: findUser.allviews + 1 };
    let updateViewsUser = await users.findOneAndUpdate(
      filterUser,
      updateallviews,
      {
        returnOriginal: false,
      }
    );
    res.send(findOnePost[0]);
  } catch (error) {
    next(error.message);
  }
};
const updatePost = async (req, res, next) => {
  try {
    if (req.user._id != req.body.userId) {
      throw createError(500, "error permisssion", { code: 500 });
    }
    const getidPost = { urlpost: req.body.urlpost };
    const finPost = await posts.findOne(getidPost);
    let thumbnail = finPost.imagepost;
    if (!req.files) {
      thumbnail = thumbnail;
      // next(createError(404, thumbnail, { code: 400 }));
    } else {
      thumbnail = req.files.thumbnail;
      linksh = req.body.urlpost;
      let thumbnailtype = thumbnail.mimetype.split("/").pop();

      if (
        thumbnailtype == "png" ||
        thumbnailtype == "jpg" ||
        thumbnailtype == "gif" ||
        thumbnailtype == "jpg" ||
        thumbnailtype == "jpeg"
      ) {
        thumbnail = linksh + `.${thumbnailtype}`;
        fs.unlinkSync("./thumbnail/" + finPost.imagepost);
        req.files.thumbnail.mv("./thumbnail/" + thumbnail);
      } else {
        throw createError.Forbidden("error type videos");
      }
    }

    const updatePost = {
      title: req.body.title,
      status: req.body.status,
      imagepost: thumbnail,
      desc: req.body.desc,
    };
    const postUpdating = await posts.findOneAndUpdate(getidPost, updatePost, {
      returnOriginal: false,
    });
    res.send(postUpdating);
  } catch (error) {
    next(error.message);
  }
};
const updatePrivacy = async (req, res, next) => {
  try {
    if (req.user.isAdmin != 1) {
      throw createError.Forbidden("error permisssion admin");
    }
    const filter = { urlpost: req.body.urlpost };
    const findPriv = await posts.findOne(filter);
    let priv;
    if (findPriv.status) {
      priv = false;
      console.log("is priv");
    } else {
      priv = true;
      console.log("is public");
    }
    const updated = await posts.findOneAndUpdate(filter, { status: priv });
    res.json({
      message: "success",
      data: updated,
    });
  } catch (error) {
    next(error.message);
  }
};
module.exports = {
  addPost,
  FindAllPost,
  FindOnePost,
  updatePost,
  updatePrivacy,
  getByuser,
};
