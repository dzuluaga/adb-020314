Importing assets to BaaS
=======

####Import dog.jpeg image

```bash
$ curl https://api.usergrid.com/adb-cog/sandbox/diegopets/Rocky -X POST -F name='dog.jpeg' -F file=@dog.jpeg
```

#### Retrieve dog.jpeg images

```bash
$ curl https://api.usergrid.com/adb-cog/sandbox/diegopets/Rocky -H 'Accept:image/jpeg' > image.jpeg
```

#### Retrieve audio file and store to filesystem
```bash
curl https://api.usergrid.com/adb-cog/sandbox/diegopets/Rocky -H 'Accept:audio/mpeg' > song_from_server.mp3
```