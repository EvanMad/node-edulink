REM // Simple and temporary build sequence
@echo off
call npm pack
echo packed
copy node-edulink-1.0.0.tgz "./test"
echo copied into test
copy node-edulink-1.0.0.tgz "./example"
del node-edulink-1.0.0.tgz

cd example
call npm install ./node-edulink-1.0.0.tgz
echo installed into example
cd ..

cd test
call npm install ./node-edulink-1.0.0.tgz
echo installed into test
cd ..
