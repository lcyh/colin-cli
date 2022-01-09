// 通过 axios 获取结果

const axios = require('axios')

axios.interceptors.response.use(res => {
  return res.data;
})


/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get('https://api.github.com/orgs/lc-cli/repos')
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function  getTagList(repo) { // vue3-template和vue3-project
  return axios.get(`https://api.github.com/repos/lc-cli/${repo}/tags`)
}

module.exports = {
  getRepoList,
  getTagList
}