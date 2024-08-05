# Generating stub

Before writing code, first generate the stub with this command:

`protoc --plugin=protoc-gen-ts="<project_path>\node_modules\.bin\protoc-gen-ts.cmd" --js_out=import_style=commonjs,binary:./generated --ts_out=service=grpc-web:"./generated" hello.proto`

