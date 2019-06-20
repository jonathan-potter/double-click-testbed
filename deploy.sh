yarn build &&
git add ./dist &&
git commit -m "add dist for build" &&
git subtree push --prefix dist origin gh-pages &&
git reset --hard HEAD~1 &&
