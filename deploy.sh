IS_PRODUCTION=$1
DEPLOYMENT_SITE=$2
DEPLOYMENT_SLOT=$3
DEPLOYMENT_DIR=$4

if [ ! -n "$DEPLOYMENT_SITE" ]; then
    echo "No site name entered."
    exit 1
fi

DEP_SITE="$DEPLOYMENT_SITE"
DEP_USER="\$$DEPLOYMENT_SITE"

if [ -n "$DEPLOYMENT_SLOT" ]; then
    DEP_SITE="$DEP_SITE-$DEPLOYMENT_SLOT"
    DEP_USER="$DEP_USER"__"$DEPLOYMENT_SLOT"
fi

CUR_DIR="$PWD"
DEP_DIR="./.deploy"

if [ -n "$DEPLOYMENT_DIR" ]; then
    DEP_DIR="$DEPLOYMENT_DIR"
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

if [ "$IS_PRODUCTION" == "1" ]; then
    cp "$CUR_DIR/prod-server.js" "./.temp/server.js"
fi 

cd .temp

rm "../deploy.zip" &> /dev/null
zip -r "../deploy.zip" .

cd ..

curl -X POST -u "$DEP_USER" --data-binary @deploy.zip "https://$DEP_SITE.scm.azurewebsites.net/api/zipdeploy"
