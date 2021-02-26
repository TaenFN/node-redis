const app = require("express")();
const redis = require("redis");

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379,
});

const connection = redisClient.on("ready", () => {
  console.log("Redis connection established...");
});

app.get("/", (req, res) => {
  res.send(
    connection.connected
      ? "Redis connection established..."
      : "Redis connection failed"
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
