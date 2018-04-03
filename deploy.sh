: "${KUDU_DEPLOYMENT_SITE:="ccr-liberty-nuxt"}"
: "${KUDU_DEPLOYMENT_USER="\$ccr-liberty__nuxt"}"

CUR_DIR="$PWD"
DEP_DIR="./.deploy"

if [ -n "$1" ]; then
    DEP_DIR="$1"
fi

if [ ! -d "$DEP_DIR" ]; then
    mkdir "$DEP_DIR" &> /dev/null || { echo "Deployment directory creation failed."; exit 1; }
fi

cd "$DEP_DIR"
rm -rf .temp
mkdir .temp
mkdir .temp/.nuxt

cp -R "$CUR_DIR/.nuxt/dist" "./.temp/.nuxt/dist/"
cp -R "$CUR_DIR/static" "./.temp/static/"
cp -R "$CUR_DIR/modules" "./.temp/modules/"
cp "$CUR_DIR/deploy.package.json" "./.temp/package.json"
cp "$CUR_DIR/nuxt.config.js" "./.temp/"
cp "$CUR_DIR/web.config" "./.temp/"
cp "$CUR_DIR/server.js" "./.temp/"

cd .temp

rm "../deploy.zip" &> /dev/null
zip -r "../deploy.zip" .

cd ..

curl -X POST -u "$KUDU_DEPLOYMENT_USER" --data-binary @deploy.zip "https://$KUDU_DEPLOYMENT_SITE.scm.azurewebsites.net/api/zipdeploy"
