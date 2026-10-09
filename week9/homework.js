// 실습 2: 반복·조건 렌더링
// 실행: node lab2_app.js
// /fruits 와 /empty 를 각각 접속해 비교해 볼 것
const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, "images")));

app.set("view engine", "ejs");

const title = ["개인프로필", "프로젝트", "좋아하는음식"];

// 데이터가 있는 경우
app.get("/profile", (req, res) => {
  res.render("profile", { title: title[0], items: title });
});

// 빈 배열인 경우 → 조건 렌더링 확인
app.get("/project", (req, res) => {
  res.render("project", { title: title[1], items: [] });
});

app.get("/food", (req, res) => {
  res.render("food", { title: title[2], items: [] });
});

app.get("/", (req, res) => {
  res.send(`
    <h1>202638006 강예빈 </h1>
    <a href="/profile">${title[0]}</a> | 
      <a href="/project">${title[1]}</a> | 
        <a href="/food">${title[2]}</a> | 
 `);
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});