.PHONY: install
install:
	pnpm install; \
	for file in $$(ls ./app); do \
        echo "./app/$$file" && cd ./app/$$file && pnpm i && cd ../..; \
    done
#

.PHONY: start
start: 
	docker-compose --profile all up -d

.PHONY: build
build: 
	docker-compose --profile all up --build

.PHONY: local
local:
	# yarn up \
	cd app/client && yarn start; cd ../.. &&	cd app/server && yarn start; cd ../.. && cd app/desktop && yarn start;

.PHONY: database
database:
	docker-compose -f docker/docker-compose.yml --profile database up -d 