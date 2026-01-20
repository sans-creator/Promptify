import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

/* =======================
   CORS CONFIG (FIX)
======================= */

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://promptify-red.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow Postman / server requests
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Handle preflight requests
app.options("*", cors());

/* =======================
   BODY PARSERS
======================= */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* =======================
   DATABASE
======================= */

await connectDB();
console.log(" MongoDB connected");

/* =======================
   ROUTES
======================= */

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.use("/api/payment", paymentRoutes);

/* =======================
   HEALTH CHECK
======================= */

app.get("/", (req, res) => {
  res.send(" Promptify API running with MongoDB!");
});

/* =======================
   SERVER
======================= */

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
