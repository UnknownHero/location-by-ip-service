#!/usr/bin/env bash
. ./settings.sh

cd .. && docker build  -t $IMAGE_NAME:$IMAGE_TAG . && cd runner