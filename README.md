# Finance Dashboard UI

A professional React-based finance dashboard with modern state management, data persistence, and role-based access control.

## 🚀 Features

### Core Functionality
- **Dashboard Overview**: Real-time summary cards for balance, income, and expenses
- **Interactive Charts**: Balance trend visualization and spending category breakdown
- **Transactions Management**: Comprehensive table with search, filtering, and sorting
- **Role-Based UI**: Viewer (read-only) and Admin (full access) modes
- **Insights Panel**: Automated analysis of spending patterns and monthly comparisons

### Professional Enhancements
- **State Management**: useReducer for complex transaction operations
- **Data Persistence**: Local storage for transactions and user preferences
- **Export Functionality**: CSV export for transaction data
- **Loading States**: Smooth UX with async operation feedback
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dark Mode**: Theme switching with local storage persistence
- **Animations**: Subtle hover effects and fade-in transitions

## 🛠️ Tech Stack

- **React 18** with Hooks and useReducer
- **Vite** for fast development and optimized builds
- **CSS Variables** for theming and responsive design
- **Local Storage** for data persistence
- **Modern JavaScript** (ES6+)

## 👤 Developer Profile

**Aggannagqri Rohith Reddy**

- **Email:** rohith912191@gmail.com
- **Phone:** +91 91219 6107
- **Portfolio:** [Your Portfolio](#)
- **LinkedIn:** [Your LinkedIn](#)
- **GitHub:** [rohith912191](https://github.com/rohith912191)
- **LeetCode:** [Your LeetCode](#)
- **CodeChef:** [Your CodeChef](#)

### Career Objective
Computer Science undergraduate with strong foundations in Python, Data Structures & Algorithms, and web development. Experienced in building practical applications using machine learning and backend development. Seeking a software development opportunity to apply problem-solving skills and contribute to scalable solutions.

### Education
- **Anurag University, Hyderabad** — Bachelor of Technology in Computer Science Engineering (Sep 2022 – May 2026)
  - CGPA: 7.92 / 10
- **Narayana Junior College, Hyderabad** — Board of Intermediate Marks: 929 / 1000 (May 2022)
- **Pace School, Hyderabad** — SSC GPA: 9.3 / 10 (May 2020)

### Technical Skills
- Programming Languages: Python, Java, C
- Core Concepts: Data Structures & Algorithms, Object-Oriented Programming (OOP)
- Web Technologies: HTML, CSS, JavaScript, Django, Flask
- Databases: MySQL
- Data Analysis & Visualization: Pandas, NumPy, Matplotlib
- Tools: Git, Streamlit, VS Code, MySQL Workbench

### Internship
**Instructo** — Full Stack Web Development Intern (Jan 2025 – Apr 2025)
- Developed a full-stack e-commerce web application using Python and MySQL that allows users to browse products, manage shopping carts, and place orders through an interactive interface.
- Implemented secure user authentication and product catalog management, enabling customers to register, log in, and explore product listings efficiently.
- Designed and integrated a MySQL database schema to store product details, customer information, and order transactions for efficient data management.

### Projects
**AI Resume Analyzer** — Python, NLP, Streamlit
- Developed an AI-powered web application using Streamlit to analyze resumes and extract key details such as skills, education, and experience.
- Implemented Natural Language Processing (NLP) techniques and custom resume parsing to identify candidate skillsets and classify job domains.
- Built a recommendation system suggesting relevant skills, courses, and career paths based on extracted resume data.
- Integrated PDF parsing, data visualization, and feedback system with optional MySQL database support for storing user analytics.

**Brain Stroke Prediction System** — Python, Flask, Machine Learning
- Designed a web-based healthcare application using Flask to predict stroke risk based on user health parameters.
- Developed and integrated a machine learning model (saved using Joblib) to perform real-time stroke prediction.
- Implemented user authentication system with secure login, signup, and profile management using SQLite database.
- Calculated BMI, age, and health indicators dynamically and processed structured input data for accurate predictions.

### Certifications
- Salesforce Certified Agentforce Specialist — Salesforce
- IBM Cloud Computing Fundamentals — IBM
- TCS-iON Career Edge – Young Professional — TCS

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rohith912191/task.git
cd task
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🎯 Usage

### Roles
- **Viewer**: Browse data, view charts, and insights
- **Admin**: All viewer permissions plus adding new transactions

### Key Interactions
- Switch roles using the dropdown in the header
- Toggle dark/light mode with the theme button
- Export transaction data to CSV
- Add transactions via the form (Admin only)
- Search and filter transactions in real-time

## 🏗️ Architecture

### Component Structure
```
src/
├── App.jsx              # Main application with state management
├── main.jsx             # React entry point
├── styles.css           # Global styles and themes
└── components/
    ├── SummaryCards.jsx # Financial summary display
    ├── ChartsPanel.jsx  # Trend and category visualizations
    ├── TransactionsPanel.jsx # Transaction table and form
    ├── InsightsPanel.jsx     # Automated insights
    └── RolePanel.jsx         # Role selection
```

### State Management
- **useReducer**: Handles complex transaction CRUD operations
- **useMemo**: Optimizes expensive calculations (filtering, sorting, totals)
- **useEffect**: Manages side effects (localStorage, theme application)

## 📱 Responsive Design

- Mobile-first approach with CSS Grid and Flexbox
- Adaptive layouts for tablets and desktops
- Touch-friendly interactions
- Optimized typography scaling

## 🎨 Design Philosophy

- Clean, minimal interface focused on data clarity
- Consistent spacing and typography
- Accessible color contrasts
- Subtle animations for better UX
- Professional dashboard aesthetics

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally

### Code Quality
- Component-based architecture
- Proper prop validation and error handling
- Optimized re-renders with memoization
- Clean, readable code structure

## 📊 Data Model

### Transaction Schema
```javascript
{
  id: number,
  date: string,        // YYYY-MM-DD format
  amount: number,      // Positive value
  category: string,    // e.g., "Salary", "Groceries"
  type: string,        // "income" | "expense"
  description: string  // Transaction details
}
```

## 🚀 Deployment

This project is optimized for static hosting platforms:

- **Vercel**: Automatic deployments on git push
- **Netlify**: Drag-and-drop or git integration
- **GitHub Pages**: Manual build and deploy

### Build Configuration
- Output directory: `dist`
- Build command: `npm run build`
- Node.js version: 18+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is for educational and demonstration purposes.

---

Built with ❤️ using React and modern web technologies.
