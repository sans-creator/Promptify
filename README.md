
# Promptify

**Promptify** is a full-stack AI image generation platform that transforms text prompts into stunning visuals. Built with modern technologies, it features a clean UI, a credit-based system, and secure payment integration via Razorpay.

## 🚀 Features

- 🎨 **AI Image Generation** — Converts text prompts into high-quality images using the ClipDrop API
- 🔐 **User Authentication** — JWT-based login & signup with password encryption
- 💳 **Credit System** — 5 free credits per user. Purchase more using Razorpay
- 🛍️ **Payment Integration** — Buy credit packs with secure Razorpay transactions
- 📱 **Responsive UI** — Built with Tailwind CSS for all screen sizes
- ⚡ **Smooth Animations** — Seamless transitions via Framer Motion
- 📥 **Image Management** — Download your generated images anytime

## 🛠️ Tech Stack

| Category           | Technologies |
|--------------------|--------------|
| **Frontend**       | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white) |
| **Backend**        | ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) |
| **Authentication** | ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) ![bcrypt](https://img.shields.io/badge/Bcrypt-grey?style=for-the-badge) |
| **APIs**           | ![ClipDrop](https://img.shields.io/badge/ClipDrop_API-black?style=for-the-badge) ![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white) |

## 📋 Prerequisites

- **Node.js** v18+
- **MongoDB** (Atlas/local)
- **Razorpay** API Keys
- **ClipDrop** API Key

## 🚀 Getting Started

### 🔧 Backend Setup

1. **Navigate to server directory:**
```

cd server

```

2. **Install dependencies:**
```

npm install

```

3. **Create .env file:**
```

PORT=4000
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
CLIPDROP_API=<your_clipdrop_api_key>
RAZORPAY_KEY_ID=<your_razorpay_key_id>
RAZORPAY_KEY_SECRET=<your_razorpay_key_secret>
CURRENCY=INR

```

4. **Run the backend server:**
```

npm run server

```

The server will start on `http://localhost:4000`

### 🎨 Frontend Setup

1. **Navigate to client directory:**
```

cd client

```

2. **Install dependencies:**
```

npm install

```

3. **Start the development server:**
```

npm run dev

```

The frontend will start on `http://localhost:5173`

## 📚 API Endpoints

### Authentication Routes (`/api/user`)

| Method | Route           | Auth | Description                           |
|--------|-----------------|------|---------------------------------------|
| POST   | `/register`     | ❌    | Register a new user                   |
| POST   | `/login`        | ❌    | Login user and receive JWT token      |
| GET    | `/credits`      | ✅    | Get current user's credit balance     |
| POST   | `/pay-razor`    | ✅    | Initiate credit purchase via Razorpay |
| POST   | `/verify-razor` | ✅    | Confirm and process payment           |

### Image Generation Routes (`/api/image`)

| Method | Route             | Auth | Description                        |
|--------|-------------------|------|------------------------------------|
| POST   | `/generate-image` | ✅    | Generate an image from text prompt |

## 💡 Usage

1. **Sign up** for a new account or **login** with existing credentials
2. **Enter a text prompt** describing the image you want to generate
3. **Click generate** to create your AI image (costs 1 credit)
4. **Download** your generated images anytime
5. **Purchase more credits** when you run out using Razorpay



```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **ClipDrop API**: [https://clipdrop.co/apis](https://clipdrop.co/apis)
- **Razorpay**: [https://razorpay.com/](https://razorpay.com/)
- **MongoDB Atlas**: [https://www.mongodb.com/atlas](https://www.mongodb.com/atlas)

---

**Made with ❤️ by Sanskar**
```

