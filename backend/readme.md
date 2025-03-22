# Legal Document Summarization API  
---
This backend handles secure user authentication and document processing.
It uses bcrypt for password hashing and JWT for token-based authentication to protect routes.
Users can upload documents via a secure /doc/upload route. The uploaded files are stored on Cloudinary, their URLs and statuses are tracked in MongoDB, and the backend extracts and summarizes the document text using Xenova's Transformers.



---

## Tech Stack & Libraries  

| Technology   | Description                              |  
|--------------|------------------------------------------|  
| Node.js      | JavaScript runtime                      |  
| Express.js   | Web framework for APIs                  |  
| MongoDB      | NoSQL database to store user & doc data |  
| Mongoose     | ODM for MongoDB                         |  
| Cloudinary   | Cloud storage for document uploads      |  
| @xenova/transformers | Local text summarization pipeline    |  
| Multer       | Middleware for handling file uploads    |  
| dotenv       | For managing environment variables      |  
| bcrypt       | Password hashing                        |  
| jsonwebtoken | Authentication token handling           |  
| tesseract.js | To extract text from the image           |  
| pdf-parse | To extract text from the pdf          |  

---

## Project Setup  

### 1. Clone the repository:  
```bash  
git clone (https://github.com/AdityaKumbhar21/JurisAI)  
cd JurisAI  
```  

### 2. Install dependencies:  
```bash  
npm install  
```  

### 3. Create a `.env` file:  
```
PORT=3000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
CLOUD_NAME=your_cloudinary_cloud_name  
CLOUD_API_KEY=your_cloudinary_api_key  
CLOUD_API_SECRET=your_cloudinary_api_secret  
```  

### 4. Start the server:  
```bash  
npm run dev  
```  

---

##  Authentication Routes (`/api/auth`)  

| Method | Route            | Description                        | Body Params                               |  
|--------|------------------|------------------------------------|------------------------------------------|  
| POST   | `/auth/signup`   | Register a new user                | `{ name, email, password }`              |  
| POST   | `/auth/login`    | Login an existing user and get JWT | `{ email, password }`                    |  
| GET   | `/auth/check`     | Gets the currently logged in user  |                                          |  

---

## Document Routes (`/api/doc`)  

### Upload Document  
| Method | Route            | Description                                                                        | Header           | Body                              | Response                                             |  
|--------|------------------|------------------------------------------------------------------------------------|------------------|-----------------------------------|------------------------------------------------------|  
| POST   | `/doc/upload`    | Uploads the legal document to Cloudinary, stores URL & metadata in MongoDB, extracts text, generates summary, and updates status in MongoDB | `Authorization: Bearer <token>` | Form-data: `{file: <PDF/Image>}`                     | Returns document name, extractedText, summary, and status updates |  

---

## Document Processing Flow  
 This api only supports .pdf format and all the image formats

1. **User uploads a document** via `/doc/upload`.  
2. Document is saved in Cloudinary.  
3. MongoDB document entry is created with status: `uploaded`.  
4. The text is extracted (using `pdf-parse` and `tessaract.js` for Images).  
5. Status is updated to `processing`.  
6. Text summary is generated using `@xenova/transformers`.  
7. MongoDB document entry is updated with `summary_text` and final status: `completed`.  

 

---

##  Example API Usage  

### 1. Sign up:  
```bash  
POST /auth/signup  
{ "name": "Aditya", "email": "aditya@gmail.com", "password": "test1234" }  
```  

### 2. Login:  
```bash  
POST /auth/login  
{ "email": "aditya@gmail.com", "password": "test1234" }  
```  

### 3. Upload Document:  
```bash  
POST /doc/upload  
Headers: Authorization: Bearer <JWT>  
```  



