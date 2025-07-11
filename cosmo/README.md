# MyGrpcPlugin - Cosmo Router Plugin Project

Design your API with GraphQL Federation and implement with gRPC using Cosmo Router Plugins

## ✨ Features

- **GraphQL Schema + gRPC Implementation**: Design your API with GraphQL SDL and implement it using gRPC methods
- **Embedded Subgraphs**: Run subgraphs directly inside the Cosmo Router for improved performance
- **End-to-End Type Safety**: Auto-generated Go code from your GraphQL schema
- **Simplified Testing**: Unit test your gRPC implementation with no external dependencies

## 📝 Project Structure

This project sets up a complete environment for developing and testing Cosmo Router plugins:

```
project-root/
├── plugins/          # Contains all the plugins
├── graph.yaml        # Supergraph configuration
├── config.json       # Composed supergraph (generated)
├── config.yaml       # Router configuration
├── release/          # Router binary location
│   └── router        # Router binary
└── Makefile          # Automation scripts
```

## 🚀 Getting Started

### Setup

1. Clone this repository
2. Run the included Makefile commands

### Available Make Commands

The Makefile automates the entire workflow with these commands:

- `make`: Runs all commands in sequence (download, build, compose, start)
- `make download`: Downloads the Cosmo Router binary to the `release` directory
- `make build`: Builds the plugin from your source code with debug symbols enabled
- `make generate`: Generates Go code from your GraphQL schema without compilation
- `make test`: Validates your implementation with integration tests
- `make compose`: Composes your supergraph from the configuration in `graph.yaml`
- `make start`: Starts the Cosmo Router with your plugin

### Quick Start

To get everything running with a single command:

```bash
make
```

This will:
1. Download the Cosmo Router binary
2. Build your plugin from source
3. Compose your supergraph
4. Start the router on port 3010

## 🧪 Testing Your Plugin

Once running, open the GraphQL Playground at [http://localhost:3010](http://localhost:3010) and try this query:

```graphql
query {
  hello(name: "World") {
    id
    name
  }
}
```

## 🔧 Customizing Your Plugin

1. Modify `src/schema.graphql` to define your GraphQL types and operations
2. Edit `src/main.go` to implement the corresponding gRPC service methods
3. Run `make generate` to regenerate code from your updated schema
4. Run `make build` to compile your plugin
5. Run `make test` to validate your implementation with integration tests
6. Run `make compose` to update your supergraph
7. Run `make start` to restart the router with your changes

## 📚 Learn More

For more information about Cosmo and building router plugins:
- [Cosmo Documentation](https://cosmo-docs.wundergraph.com/)
- [Cosmo Router Plugins Guide](https://cosmo-docs.wundergraph.com/router/plugins)

---

<p align="center">Made with ❤️ by <a href="https://wundergraph.com">WunderGraph</a></p>
