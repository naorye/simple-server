# Simple Server
> Simple express server with database for experiments

## Usage
1. Clone the repository
2. Install dependencies: npm install
3. Run server: npm start

## Endpoints
| Method   | URL                                      | Description                              |
| -------- | ---------- | ---------------------------------------- |
| `POST`   | `/me/login`| Expect `username` and `password` as JSON body and returns `token` for the user. If the credentials are incorrect, returns `INVALID_CREDENTIALS` error.|
| `GET`    | `/me`      | When `token` cookie provided, returns the current user. Otherwise returns `UNAUTHORIZED` error.   |

## Examples
### Login (`POST /me/login`)
Request:
```bash
curl -X POST \
    http://localhost:8080/me/login \
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/json' \
    -d '{
        "username": "user2",
        "password": "password2"
    }'
```
Success response:
```json
{"token":"5d7eeec4-bbed-4da8-9461-14660e55531f"}
```
Fail response:
```json
{"error":"INVALID_CREDENTIALS"}
```

### Get User (`GET /me`)
Request:
```bash
curl -X GET \
    http://localhost:8080/me \
    -H 'Cache-Control: no-cache' \
    -H 'Content-Type: application/json' \
    -H 'Cookie: token=5ed0ee67-0ffc-482b-b620-01ae1653566f; path=/; domain=localhost; Expires=Tue, 19 Jan 2038 03:14:07 GMT;'
```
Success response:
```json
{"id":2,"username":"user2","password":"password2","name":"Addy Osmani","token":"5ed0ee67-0ffc-482b-b620-01ae1653566f"}
```
Fail response:
```json
{"error":"UNAUTHORIZED"}
```

## Meta

Naor Ye – naorye@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/naorye/simple-server](https://github.com/naorye/simple-server/)