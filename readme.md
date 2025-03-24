**JurisAI — Fullstack Document Summarizer**  

###  **Project Overview**  
**JurisAI** is a full-stack document summarization platform that allows users to upload documents and receive AI-generated summaries.  

---

### **Tech Stack**  

| Part        | Tech Stack                                         |
|-------------|----------------------------------------------------|
| Frontend    | React, Zustand, Axios, React Router, Tailwind CSS  |
| Backend     | Node.js, Express, Multer (for file uploads), MongoDB |
| Deployment  |  Render              |


---

###  **Backend Features**  
- User authentication .  
- File uploads using Multer.  
- Status polling system.  
- Document history endpoint.  
- MongoDB storage for documents and summaries.  

---

###  **Frontend Features**  
- Real-time Authentication.
- Upload document UI.  
- Real-time status tracking and polling.  
- Summary display page.  
- History page to view past uploads.  

---

###  **Running the Entire Project**  
1. Clone the repository:  
```bash
git clone <your-repo-url>
cd JurisAI
```
2. Setup backend:  
```bash
cd backend
npm install
npm run dev
```
3. Setup frontend:  
```bash
cd ../frontend
npm install
npm run dev
```
4. Make sure your backend URL is set in `frontend/src/lib/axios.js`.

---


###  **Possible Future Improvements**    
- Allow download of summaries.    
- Enhance document preview before summarization.
---

### **Contributing**  
Open to contributions! Please raise an issue first before submitting PRs.  
