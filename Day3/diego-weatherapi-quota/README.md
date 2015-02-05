
apigeetool deployproxy -u $ae_username -o adb-cog -e test -n diego-weatherapi-quota -d . -p $ae_password



```bash
$ curl https://adb-cog-test.apigee.net/v1/diego-weatherapi-quota/test\?q\=select%20\*%20from%20weather.forecast%20where%20woeid%3D2504498\&format\=json\&apikey\=9Ah9116UCjGOM3pQ0Uobue3G5263keRz
```