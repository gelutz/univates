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

.PHONY: restart
restart: 
	docker-compose --profile all restart

.PHONY: build
build: 
	docker-compose --profile all up --build

.PHONY: database
database:
	docker-compose -f docker/docker-compose.yml --profile database up -d 

.PHONY: down
down:
	docker-compose stop
	docker-compose down --rmi all
#

.PHONY: local
local:
	# yarn up \
	cd app/client && yarn start; cd ../.. &&	cd app/server && yarn start; cd ../.. && cd app/desktop && yarn start;

#

