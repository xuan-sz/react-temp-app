DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

mkdir -p $DIR/pre-build
rm -Rf $DIR/pre-build/*
export PUBLIC_URL=/public
yarn && yarn build
cp -R $DIR/../build/* $DIR/pre-build/