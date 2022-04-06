.PHONY: install
install:
	pnpm install; \
	for file in $$(ls ./src); do \
        echo "./src/$$file" && pnpm install ./src/$$file; \
    done
#

.PHONY: start
start:
	# yarn up \
	cd src/client && yarn start;	cd src/server && yarn start; cd src/app && yarn start;

.PHONY: database
database:
	docker-compose -f docker/docker-compose.yml --profile database up -d 