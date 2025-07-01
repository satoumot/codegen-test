
.PHONY: build download start compose

make: download build compose start

start:
	./release/router

compose:
	npx wgc@latest router compose -i graph.yaml -o config.json

download:
	@if [ ! -f release/router ]; then \
		rm -rf release && npx wgc@latest router download-binary -o release && chmod +x release/router; \
	else \
		echo "Router binary already exists, skipping download"; \
	fi

build:
	cd plugins/my-grpc-plugin && make build
