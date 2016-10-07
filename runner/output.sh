#!/usr/bin/env bash
. ./settings.sh
docker logs -f $CONTAINER_NAME
