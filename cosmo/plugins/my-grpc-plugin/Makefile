
.PHONY: build test generate

make: build

test:
	npx wgc@latest router plugin test .

generate:
	npx wgc@latest router plugin build . --generate-only

build:
	npx wgc@latest router plugin build . --debug
