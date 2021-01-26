network:
	@docker network create microservice-network || (echo "Using existing microservice-network"; exit 0)

start: network
	@docker-compose up --build -d && echo "" && echo "Your services are mapped to the following ports" && docker ps --format "table {{.Names}}\t{{.Ports}}"

stop:
	@docker-compose down --remove-orphans
	
logs:
	@docker-compose logs -f
	
generate:
	@docker-compose -f generator.yml run generator