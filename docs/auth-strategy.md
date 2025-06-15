# 🔐 Authentication Strategy (Summary) (14 June 2025)

## 📌 Tech Stack
- **bcrypt** – for password hashing
- **JWT** – for token-based authentication
- **Redis** – to store and validate active tokens
- **MongoDB** – to store user credentials

---

## 🔁 Signup Flow
1. User submits name & password.
2. Password is hashed with `bcrypt`.
3. User is saved in MongoDB.

---

## 🔁 Login Flow
1. User submits credentials.
2. Password is checked using `bcrypt.compare`.
3. If valid:
   - Generate a JWT token.
   - Save token in Redis (active session).
   - Send token to client.

---

## 🔐 Protected Routes
- Token is sent in the `Authorization` header.
- Server middleware:
  1. Verifies JWT.
  2. Checks token in Redis.
- If valid → allow access.  
- If invalid → deny access.

---

## 🚫 Logout
- Client requests logout.
- Server deletes token from Redis.

---

## 🔒 Why These?
- **bcrypt** prevents password leaks.
- **JWT** is stateless and scalable.
- **Redis** allows quick session validation & token revocation.

---

## 💡 Notes
- Tokens include: userId, role, expiry.
- JWT secret is stored in `.env`.
- Expiry time: typically 1 hour.

---
