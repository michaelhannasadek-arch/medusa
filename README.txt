MEDUSA RESTAURANT WEBSITE
=========================

A beautiful, responsive restaurant website for Medusa Beach Restaurant & Bar in Hurghada, Egypt.

HOW TO OPEN THE WEBSITE
-----------------------
Simply open index.html in your web browser. No server required - this is a static website.

ADMIN PANEL ACCESS
------------------
To edit the website content:
1. Open admin.html in your web browser
2. Login credentials:
   - Username: admin
   - Password: 1234

The admin panel allows you to:
- Edit menu items and prices
- Update gallery images
- Change restaurant information
- Modify opening hours
- Update contact details
- Upload images to Cloudinary
- Save changes to Firebase Firestore

TECHNICAL ARCHITECTURE
-----------------------
This website uses:
- Firebase Firestore: Stores website content (text, image URLs)
- Cloudinary: Hosts uploaded images
- Local Storage: Fallback when Firebase is unavailable

The website automatically uses Firebase when available, with localStorage as backup.

HOW TO UPDATE MENU/GALLERY
--------------------------
1. Open admin.html
2. Login with admin / 1234
3. Navigate to the section you want to edit (Menu, Gallery, Hero, etc.)
4. Make your changes
5. Click "Save Changes"

For images:
- Click "Click / drop image" to upload
- Images automatically upload to Cloudinary
- Cloudinary URLs are saved to Firebase
- Public website updates automatically

DEPLOYMENT
----------
This is a static website and can be hosted on any web hosting service:
- Netlify (recommended)
- Vercel
- GitHub Pages
- Any traditional web host

Simply upload all files to your hosting provider. No build process required.

FIREBASE CONFIGURATION
----------------------
Firebase is already configured and enabled. The website will:
- Read content from Firebase Firestore
- Save admin changes to Firebase
- Fall back to localStorage if Firebase is unavailable

Firebase project: medusa-aa8e5
Firestore document path: websites/medusa/content/main

CLOUDINARY CONFIGURATION
------------------------
Cloudinary is already configured and enabled. The admin panel will:
- Upload images to Cloudinary
- Store Cloudinary URLs in Firebase
- Display images on the public website

Cloudinary cloud name: dew5qojur
Upload preset: medusa_upload
Folder: medusa

TECHNICAL NOTES
--------------
- Built with HTML, CSS, and JavaScript
- No build process required
- Responsive design works on mobile and desktop
- Firebase integration for real-time content updates
- Cloudinary integration for image hosting
- Local storage fallback for offline editing

TROUBLESHOOTING
---------------
If Firebase fails to load:
- The website automatically falls back to localStorage
- Admin changes save locally
- Content displays from default data or localStorage

If Cloudinary upload fails:
- Images save as base64 data URLs locally
- Still functional, but images are not optimized
- Check your internet connection

SUPPORT
-------
For technical support, contact the developer.

© 2025 Medusa Restaurant & Bar · Hurghada, Egypt
