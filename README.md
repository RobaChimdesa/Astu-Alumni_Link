# ASTU AlumniLink  

ASTU AlumniLink is a platform designed to connect alumni of Adama Science and Technology University (ASTU) with current students. This application facilitates networking, mentorship, and event management, fostering a strong community among ASTU graduates and students.  

## Features  

- **Networking**: Connect with fellow alumni and current students to build professional relationships.  
- **Mentorship**: Alumni can offer guidance and support to students, sharing their experiences and insights.  
- **Event Management**: Organize and manage events for alumni and students, including workshops, seminars, and networking events.  

## Technologies Used  

- **Frontend**: React, Tailwind CSS  
- **Backend**: Django  
- **Database**: MySQL  
- **Deployment**: AWS  

## Getting Started  

To get a local copy of the project up and running, follow these steps:  

### Prerequisites  

- **Node.js**: [Install Node.js](https://nodejs.org/)  
- **Python**: [Install Python](https://www.python.org/)  
- **Django**: Ensure you have Django installed for the backend.  
- **MySQL**: [Install MySQL](https://www.mysql.com/)  
- **AWS Account**: Set up an AWS account for deployment.  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/yourusername/astu-alumnilink.git  
   ```  
2. Navigate to the project directory:  
   ```bash  
   cd astu-alumnilink  
   ```  
3. **Frontend Setup**:  
   - Navigate to the frontend directory (if it's in a subfolder, e.g., `frontend/`):  
     ```bash  
     cd frontend  
     ```  
   - Install the frontend dependencies:  
     ```bash  
     npm install  
     ```  
   - Start the frontend development server:  
     ```bash  
     npm start  
     ```  

4. **Backend Setup**:  
   - Navigate to the backend directory (if it's in a subfolder, e.g., `backend/`):  
     ```bash  
     cd backend  
     ```  
   - Create a virtual environment (optional but recommended):  
     ```bash  
     python -m venv venv  
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`  
     ```  
   - Install the backend dependencies:  
     ```bash  
     pip install -r requirements.txt  
     ```  
   - Configure your MySQL database connection in the Django settings file. Make sure to create the database in MySQL beforehand.  
   - Run the database migrations:  
     ```bash  
     python manage.py migrate  
     ```  
   - Start the backend server:  
     ```bash  
     python manage.py runserver  
     ```  

## Usage  

Once both the frontend and backend servers are running, you can interact with the application through your web browser. Navigate to `http://localhost:3000` (or the appropriate port for your frontend) to access the application.  

## Contributing  

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for details on our code of conduct, and the process for submitting pull requests.  

## License  

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  

## Contact  

For any inquiries or feedback, please reach out to Roba Chimdesa at [robachimdesa123@gmail.com](mailto:robachimdesa123@gmail.com).  

---  

Thank you for your interest in ASTU AlumniLink!  
