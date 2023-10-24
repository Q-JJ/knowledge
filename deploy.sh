# 确保脚本抛出遇到的错误
###
 # @Descripttion: 
 # @version: 
 # @Author: JnannJ
 # @Date: 2023-10-18 15:38:08
 # @LastEditors: JnannJ
 # @LastEditTime: 2023-10-18 16:12:50
### 
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist



git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:Q-JJ/Q-JJ.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Q-JJ/knowledge.git master:gh-pages

cd -