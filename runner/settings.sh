#!/usr/bin/env bash
CONTAINER_NAME="location-by-ip-service";
IMAGE_NAME="location-by-ip-service";
IMAGE_TAG="local-latest";
RUN_CONFIG="-v $(pwd)/../application:/usr/src/application -p 18080:8080"