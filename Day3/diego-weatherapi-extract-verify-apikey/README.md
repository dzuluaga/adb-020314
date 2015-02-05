verify-api-key
====
A few steps to remember:

#####1. Create a product API
#####2. Create a Developer
#####3. Create a Developer App

#####Deploy the proxy
To deploy this proxy you can leverage [apigeetool](https://www.npmjs.com/package/apigeetool):

```bash
$ apigeetool deployproxy -u $ae_username -o adb-cog -e test -n diego-weatherapi-extract-verify-apikey -d . -p $ae_password
```

##### Test

```bash
$ curl https://adb-cog-test.apigee.net/v1/diego-weatherapi-extract-verify-apikey/test\?q\=select%20\*%20from%20weather.forecast%20where%20woeid%3D2504498\&format\=json\&apikey\=9Ah9116UCjGOM3pQ0Uobue3G5263keRz
```

