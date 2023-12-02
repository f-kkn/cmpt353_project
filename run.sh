#!/bin/bash

# Define your Docker Compose file name
DOCKER_COMPOSE_FILE="docker-compose.yml"

# Define an array of Docker container names
CONTAINER_NAMES=("db" "react" "server")

# Function to check if a container is running and stop it
stop_container() {
    local container_name=$1
    if docker inspect -f '{{.State.Running}}' $container_name &>/dev/null; then
        echo "Container '$container_name' is running. Stopping services..."
        docker-compose -f $DOCKER_COMPOSE_FILE down
    else
        echo "Container '$container_name' is not running."
    fi
}

# Function to build and start the services
build_and_start_services() {
    echo "Building and starting services..."
    docker-compose -f $DOCKER_COMPOSE_FILE build
    docker-compose -f $DOCKER_COMPOSE_FILE up -d
    echo "Done."
}

# Iterate over the array of container names
for container_name in "${CONTAINER_NAMES[@]}"; do
    stop_container "$container_name"
done

# Build and start the services once for all containers
build_and_start_services