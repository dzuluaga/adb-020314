weather-client-credentials-oauth
======

To deploy this proxy you can leverage apigeetoool:

```bash
$ apigeetool deployproxy -u $ae_username -o adb-cog -e test -n diego-weather-client-credentials-oauth -d . -p $ae_password
```