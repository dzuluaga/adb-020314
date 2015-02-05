weather-client-credentials-oauth
======

To deploy this proxy you can leverage [apigeetool](https://www.npmjs.com/package/apigeetool):

```bash
$ apigeetool deployproxy -u $ae_username -o adb-cog -e test -n diego-weather-client-credentials-oauth -d . -p $ae_password
```

##### Test


######Generate token
```bash
$ curl -u 9Ah9116UCjGOM3pQ0Uobue3G5263keRz:tBcKqB3OzEPBwa9w https://adb-cog-test.apigee.net/v1/diego-weatherapi-client-credentials-oauth/token\?grant_type\=client_credentials
```

######Access the resource
```bash
$ curl -H 'Authorization: Bearer 9JsNciPaQobAkxaG7JkDeCMOknlw' https://adb-cog-test.apigee.net/v1/diego-weatherapi-client-credentials-oauth/weather\?q\=select%20\*%20from%20weather.forecast%20where%20woeid%3D2504498\&format\=json -v
```