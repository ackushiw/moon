#!/usr/bin/env bash

if [[ -z "${NPM_TOKEN}" ]]; then
	echo "Missing NPM_TOKEN!"
else
	echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> ~/.npmrc
	echo "npmAuthToken: $NPM_TOKEN" >> ./.yarnrc.yml
fi

if [ -d ".yarn/versions" ]; then
	echo "Yarn versions detected, applying updates"
	yarn version apply --all
fi

if [[ "$NIGHTLY" == "true" ]]; then
	timestamp=$(date +%Y%m%d%H%M)
	preid="-nightly.$timestamp"

	echo "Nightly build detected, appending timestamp to versions"
	echo "Prerelease: $preid"

	for package in packages/*; do
		echo "$package"
		cd "./$package" || exit
		pkg=$(jq ".version += \"$preid\"" package.json)
		echo "$pkg" > package.json
		cd ../..
	done
fi
