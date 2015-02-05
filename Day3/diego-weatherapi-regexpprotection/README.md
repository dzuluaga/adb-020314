regular expression protection
=======


```bash
apigeetool deployproxy -u $ae_username -o adb-cog -e test -n diego-weatherapi-regexpprotection -d . -p $ae_password
```

```bash
curl https://adb-cog-test.apigee.net/v1/diego-weatherapi-regexpprotection?qparam=sssscreate table1aaaa
```