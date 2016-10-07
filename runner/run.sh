#!/usr/bin/env bash
. ./settings.sh
docker run --name $CONTAINER_NAME -d $RUN_CONFIG $IMAGE_NAME:$IMAGE_TAG