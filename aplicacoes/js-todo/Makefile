.PHONY: install
install:
	pnpm install; \
	for file in $$(ls ./src); do \
        echo "./src/$$file" && pnpm install ./src/$$file; \
    done
#

.PHONY: start
start:
	yarn up \
	cd src/app && yarn start && cd - \
	cd src/client && yarn start && cd - \
	cd src/server && yarn start && cd -

.PHONY: database
database:
	docker-compose -f docker/docker-compose.yml --profile database up -d 