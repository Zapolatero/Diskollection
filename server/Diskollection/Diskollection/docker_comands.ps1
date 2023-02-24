# gathered everything from this: https://learn.microsoft.com/en-gb/dotnet/core/docker/build-container?tabs=windows
#  build container
docker build -t diskollection-image -f .\Dockerfile .
# create image
docker create --name core-diskollection diskollection-image
# list all containers
docker ps -a
docker start core-diskollection

docker attach --sig-proxy=false core-counter 