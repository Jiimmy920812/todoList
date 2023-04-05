//回傳格式
exports.response = (statement, showText = "", data = null) => {
  // console.log("|Server Formula|",{statement,showText,data});
  return { statement, showText, data };
};

