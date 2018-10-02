let [basicUrl, uploadUrl] = [];
if (process.env.NODE_ENV == "development") {
  basicUrl = ""                 
  uploadUrl = '';
} else {
  basicUrl = "" //生产环境
  uploadUrl = '';
}
export {
  basicUrl,
  uploadUrl
}
