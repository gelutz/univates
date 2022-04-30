.PHONY: install
install:
	pnpm install; \
	for file in $$(ls ./app); do \
        echo "./app/$$file" && cd ./app/$$file && pnpm i && cd ../..; \
    done

.PHONY: start
start: 
	docker-compose --profile all up --build

.PHONY: down
down:
	docker-compose down --rmi all
#

.PHONY: dev
dev: 
	docker-compose -f docker-compose.dev.yml up --build

.PHONY: database
database:
	docker-compose --profile database up -d 


