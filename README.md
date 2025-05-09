# 🌟 Hotel Avenue - Hotel Management System 🌟

Welcome to **Hotel Avenue**, a comprehensive hotel management system designed to streamline operations, enhance guest experiences, and provide a seamless booking process. This project is a blend of modern web technologies and intuitive design, ensuring a user-friendly experience for both guests and administrators.

---

## 🚀 Features

### 🏨 **Guest Features**
- **Hotel Listings**: Browse through a curated list of luxurious hotels with detailed information.
- **Hotel Details**: View amenities, pricing, and ratings for each hotel.
- **Booking System**: Effortlessly book your stay with a user-friendly form.
- **Payment Options**: Multiple payment methods including Credit Card, Debit Card, and UPI.
- **My Bookings**: View and manage your bookings with ease.
- **Contact Us**: Reach out to us for inquiries or feedback.

### 🔑 **Admin Features**
- **Admin Login**: Secure login for administrators to manage bookings.
- **View Bookings**: Access all customer bookings in a structured format.
- **Booking Management**: Monitor and manage guest bookings efficiently.

### 🎨 **Design Highlights**
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Modern UI**: Clean and visually appealing interface with gradient backgrounds and intuitive layouts.
- **Dynamic Content**: Interactive elements like sliders, thumbnails, and hover effects.

---

## 📂 Project Structure

backend/ ├── public/ │ ├── admins/ # Admin-related pages │ ├── bg-img/ # Background images for the homepage slider │ ├── Events/ # Event-related images │ ├── Hotel-Bedroom/ # Hotel room images │ ├── pages/ # Guest-facing pages (e.g., booking, contact, about) │ ├── scripts/ # JavaScript files for dynamic functionality │ ├── styles/ # CSS files for styling │ └── index.html # Homepage ├── bookings/ # JSON files storing booking data ├── .gitignore # Ignored files and folders ├── bookingCount.txt # Tracks the number of bookings ├── index.js # Backend server logic ├── package.json # Project dependencies and scripts └── README.md # Project documentation



---

## 🛠️ Technologies Used

### **Frontend**
- **HTML5**: Semantic structure for web pages.
- **CSS3**: Modern styling with gradients, animations, and responsive design.
- **JavaScript**: Dynamic functionality for sliders, forms, and interactivity.

### **Backend**
- **Node.js**: Server-side runtime environment.
- **Express.js**: Lightweight web framework for routing and APIs.
- **File System (fs)**: For storing and managing booking data.

### **Other Tools**
- **dotenv**: Environment variable management.
- **nodemon**: Automatic server restarts during development.
- **CORS**: Cross-Origin Resource Sharing for secure API calls.

---

## 📖 Pages Overview

### **Homepage**
- A visually stunning slider showcasing featured hotels.
- Core features and events section highlighting the best offerings.

### **Hotel Listings**
- A grid layout displaying all available hotels with images, ratings, and prices.

### **Hotel Details**
- Detailed view of a selected hotel, including amenities, gallery, and booking options.

### **Booking Page**
- A form to book your stay with validation for inputs like dates, room type, and guest count.

### **Admin Panel**
- Secure login for administrators to view and manage bookings.

### **Contact Us**
- A form for guests to send inquiries or feedback.

### **About Us**
- Information about the project, its purpose, and features.

---

## ⚙️ API Endpoints

### **Guest APIs**
- `POST /api/bookings`: Submit a new booking.

### **Admin APIs**
- `POST /api/admin/login`: Authenticate admin login.
- `POST /admin`: Fetch all bookings for the admin panel.

---

## 🖼️ Screenshots

### Homepage
![Homepage](public/bg-img/Image%201.jpg)

### Hotel Listings
![Hotel Listings](public/Hotel-Bedroom/Image%201.jpg)

### Booking Page
![Booking Page](public/Events/Dinner.jpg)

---

## 🛡️ Security Features
- **Session Management**: Secure admin sessions with unique session secrets.
- **Input Validation**: Prevent invalid or malicious inputs in forms.
- **Environment Variables**: Store sensitive data like admin credentials securely.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/hotel-avenue.git
   cd hotel-avenue


```md
# 🌟 Hotel Avenue - Hotel Management System 🌟

Welcome to **Hotel Avenue**, a comprehensive hotel management system designed to streamline operations, enhance guest experiences, and provide a seamless booking process. This project is a blend of modern web technologies and intuitive design, ensuring a user-friendly experience for both guests and administrators.

---

## 🚀 Features

### 🏨 **Guest Features**
- **Hotel Listings**: Browse through a curated list of luxurious hotels with detailed information.
- **Hotel Details**: View amenities, pricing, and ratings for each hotel.
- **Booking System**: Effortlessly book your stay with a user-friendly form.
- **Payment Options**: Multiple payment methods including Credit Card, Debit Card, and UPI.
- **My Bookings**: View and manage your bookings with ease.
- **Contact Us**: Reach out to us for inquiries or feedback.

### 🔑 **Admin Features**
- **Admin Login**: Secure login for administrators to manage bookings.
- **View Bookings**: Access all customer bookings in a structured format.
- **Booking Management**: Monitor and manage guest bookings efficiently.

### 🎨 **Design Highlights**
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Modern UI**: Clean and visually appealing interface with gradient backgrounds and intuitive layouts.
- **Dynamic Content**: Interactive elements like sliders, thumbnails, and hover effects.

---

## 📂 Project Structure

```
backend/
├── public/
│   ├── admins/          # Admin-related pages
│   ├── bg-img/          # Background images for the homepage slider
│   ├── Events/          # Event-related images
│   ├── Hotel-Bedroom/   # Hotel room images
│   ├── pages/           # Guest-facing pages (e.g., booking, contact, about)
│   ├── scripts/         # JavaScript files for dynamic functionality
│   ├── styles/          # CSS files for styling
│   └── index.html       # Homepage
├── bookings/            # JSON files storing booking data
├── .gitignore           # Ignored files and folders
├── bookingCount.txt     # Tracks the number of bookings
├── index.js             # Backend server logic
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

---

## 🛠️ Technologies Used

### **Frontend**
- **HTML5**: Semantic structure for web pages.
- **CSS3**: Modern styling with gradients, animations, and responsive design.
- **JavaScript**: Dynamic functionality for sliders, forms, and interactivity.

### **Backend**
- **Node.js**: Server-side runtime environment.
- **Express.js**: Lightweight web framework for routing and APIs.
- **File System (fs)**: For storing and managing booking data.

### **Other Tools**
- **dotenv**: Environment variable management.
- **nodemon**: Automatic server restarts during development.
- **CORS**: Cross-Origin Resource Sharing for secure API calls.

---

## 📖 Pages Overview

### **Homepage**
- A visually stunning slider showcasing featured hotels.
- Core features and events section highlighting the best offerings.

### **Hotel Listings**
- A grid layout displaying all available hotels with images, ratings, and prices.

### **Hotel Details**
- Detailed view of a selected hotel, including amenities, gallery, and booking options.

### **Booking Page**
- A form to book your stay with validation for inputs like dates, room type, and guest count.

### **Admin Panel**
- Secure login for administrators to view and manage bookings.

### **Contact Us**
- A form for guests to send inquiries or feedback.

### **About Us**
- Information about the project, its purpose, and features.

---

## ⚙️ API Endpoints

### **Guest APIs**
- `POST /api/bookings`: Submit a new booking.

### **Admin APIs**
- `POST /api/admin/login`: Authenticate admin login.
- `POST /admin`: Fetch all bookings for the admin panel.

---

## 🖼️ Screenshots

### Homepage
![Homepage](public/bg-img/Image%201.jpg)

### Hotel Listings
![Hotel Listings](public/Hotel-Bedroom/Image%201.jpg)

### Booking Page
![Booking Page](public/Events/Dinner.jpg)

---

## 🛡️ Security Features
- **Session Management**: Secure admin sessions with unique session secrets.
- **Input Validation**: Prevent invalid or malicious inputs in forms.
- **Environment Variables**: Store sensitive data like admin credentials securely.

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/hotel-avenue.git
   cd hotel-avenue
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   PORT=8000
   user=admin // as you would need
   pass=admin123 // create a password of choice 
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

---

## 🤝 Contributors
- **Team SID**: Backend and API development.
-

---

## 📜 License
This project is licensed under the **ISC License**.

---

