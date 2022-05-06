
install:
	pnpm install; \
	for file in $$(ls ./app); do \
        echo "./app/$$file" && cd ./app/$$file && pnpm i && cd ../..; \
    done

.PHONY: start
start:
	make install; \
	docker-compose up --build -d; \
	cd app/desktop && yarn start & \
	docker-compose logs -f;

down:
	docker-compose down -v --rmi local
#


dev: 
	docker-compose -f docker-compose.dev.yml up --build
#

migrate: 
	cd app/server/docker && 
#

