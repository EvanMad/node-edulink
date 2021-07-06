REM // Simple and temporary build sequence
@echo off
call npm pack
echo packed
copy node-edulink-1.0.0.tgz "./test"
echo copied into test
copy node-edulink-1.0.0.tgz "./example"
del node-edulink-1.0.0.tgz

cd example
npm install ./node-edulink-1.0.0.tgz
cd ..

cd test
npm install ./node-edulink-1.0.0.tgz
cd ..
