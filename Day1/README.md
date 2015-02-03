Day 1
========
REST API
========
Here are some APIs that we leverage through the Developer Bootcamp.

APIs
====

Github
https://api.github.com/users

Music
http://lyrics.wikia.com/api.php?artist=depeche%20mode&fmt=json

Wikipedia
http://en.wikipedia.org/w/api.php?format=json&action=query&titles=cognizant&prop=revisions&rvprop=content

Git Repo
=====
https://github.com/dzuluaga/adb-cog

Generate Token from Apigee BaaS
=====
```bash
$ curl -X POST "https://api.usergrid.com/adb-cog/sandbox/token" -d '{"grant_type":"client_credentials", "client_id":"b3U6CgtfCqvCEeSEkeO38C-3ug", "client_secret":"{client_id}"}'
```
