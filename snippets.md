

## Show updated/created files
git status | grep src | sed 's/modified://g' | awk '{print $1}'

## tar updated/created files
rm -rf ../backup.tgz && git status | grep src | sed 's/modified://g' | awk '{print $1}' | xargs tar zcvf ../backup.tgz
