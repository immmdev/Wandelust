# 🧳 Wanderlust

**Wanderlust** is a fully deployable **property rental marketplace** where users can list personal spaces for rent to tourists and travelers. From mountaintop cabins to city apartments, Wanderlust bridges property owners and adventure seekers with a seamless platform.

---

## 🛠️ Tech Stack

- **Frontend:** EJS, HTML5, CSS3, JavaScript  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (via Mongoose)  
- **Authentication:** Passport.js (Local Strategy)  
- **Validation:** Joi  
- **Templating:** EJS  
- **Image Uploads:** Cloudinary  
- **Location Services:** Mapbox  
- **Architecture:** MVC Pattern  
- **Sessions:** Express Sessions + Cookies  
- **Deployment:** Render  

---

## ✅ Features

- 🔐 Sign-in / Sign-up with Passport.js  
- 🧾 Authentication using Sessions & Cookies  
- ✅ Joi-based server-side validation  
- 🧳 CRUD for property listings  
- 🔍 Category filters  
- 🖼️ Cloudinary for image uploads  
- 🗺️ Mapbox integration for location display  
- 🌐 MongoDB Atlas for cloud-based data storage  
- 📁 MVC architecture with modular JS backend/frontend  
- 💻 Deployed on Render  

---

## 🏁 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root and add:

```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_secret
MAP_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
```

> 🔐 **Important:** Never commit this `.env` file to GitHub. Always keep your credentials safe.

### 4. Start the server

```bash
node app.js
```

---

## 📁 Project Structure

```
├── models/          # Mongoose models (User, Listing, Review)
├── views/           # EJS templates (includes, layouts, pages)
├── controllers/     # All business logic
├── routes/          # Express route modules
├── public/          # Static assets
├── uploads/         # Temp image storage (before upload to Cloudinary)
├── middleware.js    # Custom middleware (e.g. auth checks)
├── cloudConfig.js   # Cloudinary config
├── app.js           # Main app entry point
```

---

## 🌍 Mapbox Integration

- Location pins and maps rendered using Mapbox.
- Users can view where listings are located on an interactive map.
- Customize and style using the Mapbox dashboard.

---

## ☁️ Deployment (Render)

- App is hosted live on **Render**  
- MongoDB Atlas and Cloudinary are used for persistent storage  
- Mapbox token is configured via environment variables on the Render dashboard  

---

## 🧑‍💻 Author

Built with ❤️ by **Dev Singh**  
🎓 CSE Student at **Institute of Engineering and Technology (IET), Lucknow)**

📧 Email: [myselfdevsingh123@gmail.com](mailto:myselfdevsingh123@gmail.com)  
💬 WhatsApp: [+91 7235898946](https://wa.me/917235898946)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
