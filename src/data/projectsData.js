export const projectCategories = ['Full Stack & SaaS', 'AI & Machine Learning', 'AI & Automation'];

export const projectsData = [
  // FULL STACK & SAAS
  {
    id: 1,
    category: 'Full Stack & SaaS',
    title: 'AI Resume Builder & ATS Analyzer',
    tagline: 'Build Job-Ready Resumes Powered By AI',
    shortDescription: 'An intelligent resume platform that helps users create professional resumes using modern templates, optimize them for Applicant Tracking Systems (ATS), and receive AI-driven career insights based on their experience and target roles.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['Many job seekers struggle to create professional resumes that can pass Applicant Tracking Systems (ATS).', 'Common issues:'],
          list: ['Poor resume formatting', 'Low ATS compatibility', 'Lack of career guidance', 'No role-specific optimization']
        },
        {
          title: 'Our Solution',
          content: ['We developed an AI-powered resume platform that helps users:'],
          list: ['Create professional resumes', 'Analyze ATS compatibility', 'Get role-specific recommendations', 'Improve resume quality using AI']
        },
        {
          title: 'Key Features',
          features: [
            { name: 'Smart Resume Builder', desc: 'Build resumes using modern templates.' },
            { name: 'ATS Score Checker', desc: 'Analyze ATS compatibility.' },
            { name: 'AI Role Recommendations', desc: 'Suggest suitable job roles.' },
            { name: 'AI Profile Analysis', desc: 'Evaluate strengths and weaknesses.' }
          ]
        },
        {
          title: 'Platform Workflow',
          type: 'workflow',
          steps: ['User Profile', 'Resume Builder', 'AI Analysis', 'ATS Engine', 'Resume Optimization', 'Job Ready Resume']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['Faster Resume Creation', 'Better ATS Scores', 'Improved Job Readiness']
        }
      ]
    }
  },
  {
    id: 2,
    category: 'Full Stack & SaaS',
    title: 'HealthHub Management System',
    tagline: 'Connecting Patients, Doctors & Healthcare Operations',
    shortDescription: 'A complete healthcare management ecosystem enabling patients to schedule appointments, doctors to manage consultations, staff to coordinate operations, and administrators to oversee the entire healthcare workflow.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['Traditional healthcare systems often rely on manual processes.', 'Problems:'],
          list: ['Long appointment booking times', 'Paper-based records', 'Poor communication', 'Lack of centralized management']
        },
        {
          title: 'Our Solution',
          content: ['A complete healthcare ecosystem with role-based access for:'],
          list: ['Patients', 'Doctors', 'Staff', 'Administrators']
        },
        {
          title: 'System Roles',
          roles: [
            { name: 'Patient', items: ['Book appointments', 'Upload reports', 'Track consultations'] },
            { name: 'Doctor', items: ['Review reports', 'Manage appointments', 'Issue prescriptions'] },
            { name: 'Staff', items: ['Manage operations', 'Coordinate schedules'] },
            { name: 'Admin', items: ['Verify doctors', 'Manage users', 'Monitor platform'] }
          ]
        },
        {
          title: 'Platform Workflow',
          type: 'workflow',
          steps: ['Patient', 'Appointment Request', 'Doctor Review', 'Prescription', 'Patient Dashboard']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['Faster Appointments', 'Centralized Healthcare Records', 'Better Patient Experience']
        }
      ]
    }
  },
  {
    id: 3,
    category: 'Full Stack & SaaS',
    title: 'EmailFlow AI',
    tagline: 'Transform Hundreds Of Emails Into Actionable Insights',
    shortDescription: 'An AI-powered email intelligence platform that automatically categorizes emails, generates concise summaries, prioritizes urgent messages, and drafts intelligent responses to save time and improve productivity.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['Professionals spend hours reading emails.', 'Problems:'],
          list: ['Inbox overload', 'Missed urgent emails', 'Slow response times']
        },
        {
          title: 'Our Solution',
          content: ['AI-powered email intelligence.', 'The platform:'],
          list: ['Analyzes inboxes', 'Generates summaries', 'Prioritizes urgent emails', 'Drafts responses']
        },
        {
          title: 'AI Workflow',
          type: 'workflow',
          steps: ['Incoming Emails', 'AI Classification', 'Priority Detection', 'AI Summary', 'Suggested Response']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['Reduced Email Processing Time', 'Faster Decision Making', 'Improved Productivity']
        }
      ]
    }
  },
  {
    id: 4,
    category: 'Full Stack & SaaS',
    title: 'Web3Tracker',
    tagline: 'Real-Time Analytics For Modern Crypto Traders',
    shortDescription: 'A comprehensive Web3 analytics platform that enables users to track liquidity pools, monitor transactions, manage watchlists, and interact with decentralized markets through a unified dashboard.',
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker'],
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['Crypto traders use multiple tools.', 'Problems:'],
          list: ['Scattered data', 'Slow market tracking', 'No unified dashboard']
        },
        {
          title: 'Our Solution',
          content: ['A single platform for:'],
          list: ['Pool analytics', 'Wallet management', 'Market tracking', 'Watchlists']
        },
        {
          title: 'Trading Workflow',
          type: 'workflow',
          steps: ['Wallet', 'Market Analysis', 'Pool Tracking', 'Watchlist', 'Trading Decisions']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['Better Market Visibility', 'Faster Analysis', 'Improved Trading Experience']
        }
      ]
    }
  },
  {
    id: 5,
    category: 'Full Stack & SaaS',
    title: 'Food Waste Management System',
    tagline: 'Reducing Food Waste Through Technology',
    shortDescription: 'A community-driven platform connecting food donors with orphanages, old-age homes, and organizations to ensure surplus food reaches those in need rather than being wasted.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Maps API'],
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['Tons of edible food are wasted daily while many go hungry.', 'Problems:'],
          list: ['No connection between donors and NGOs', 'Logistical nightmares', 'Food spoiling before delivery']
        },
        {
          title: 'Our Solution',
          content: ['A real-time logistics platform connecting donors to nearby organizations.', 'Core systems:'],
          list: ['Real-time geolocation', 'Donor verification', 'Logistics coordination']
        },
        {
          title: 'Logistics Workflow',
          type: 'workflow',
          steps: ['Donor Posts Food', 'Nearby NGOs Notified', 'NGO Accepts Request', 'Live Tracking', 'Food Delivered']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['Reduced Food Waste', 'Optimized Logistics', 'Community Support']
        }
      ]
    }
  },
  {
    id: 6,
    category: 'Full Stack & SaaS',
    title: 'Fresh Oven Bakery',
    tagline: 'Modern Bakery Ordering & Management Platform',
    shortDescription: 'An online bakery management solution enabling customers to place orders, track deliveries, and make payments while providing owners with complete order and inventory visibility.',
    techStack: ['React.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['Local bakeries struggle with manual order taking and inventory management.', 'Problems:'],
          list: ['Lost phone orders', 'Inventory mismatches', 'Payment delays']
        },
        {
          title: 'Our Solution',
          content: ['A comprehensive digital storefront and backend portal.', 'Features:'],
          list: ['Digital storefront', 'Inventory syncing', 'Secure payments']
        },
        {
          title: 'Order Workflow',
          type: 'workflow',
          steps: ['Browse Catalog', 'Cart & Payment', 'Kitchen Dashboard', 'Baking Process', 'Delivery/Pickup']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['Increased Sales', 'Zero Lost Orders', 'Streamlined Baking']
        }
      ]
    }
  },

  // AI & MACHINE LEARNING
  {
    id: 7,
    category: 'AI & Machine Learning',
    title: 'Enhanced Fake News Detection System',
    tagline: 'Combating Misinformation With AI & NLP',
    shortDescription: 'An intelligent fact-verification platform leveraging machine learning and natural language processing techniques to identify and classify fake news while continuously improving through user feedback.',
    techStack: ['Python', 'Django', 'XGBoost', 'LSTM', 'TF-IDF', 'NLP', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'Dataset & Training Pipeline',
          content: ['Curating a balanced, real-world dataset was critical.', 'Pipeline steps:'],
          list: ['Data scraping from verified sources', 'Data cleaning & deduplication', 'Continuous dataset updates']
        },
        {
          title: 'NLP Processing',
          content: ['Transforming raw text into actionable insights.', 'Techniques applied:'],
          list: ['TF-IDF vectorization', 'Tokenization & Stop-word removal', 'Sentiment & bias analysis']
        },
        {
          title: 'Model Architecture',
          content: ['We used a hybrid approach combining traditional ML with deep learning.', 'Models:'],
          list: ['XGBoost for tabular metadata', 'LSTM networks for sequence text analysis', 'Ensemble voting classifier']
        },
        {
          title: 'Prediction Workflow',
          type: 'workflow',
          steps: ['Input Article', 'Text Preprocessing', 'Feature Extraction', 'Model Inference', 'Confidence Scoring']
        },
        {
          title: 'Accuracy Metrics',
          type: 'impact',
          items: ['94% Detection Accuracy', 'Continuous Retraining', 'Real-time Processing']
        }
      ]
    }
  },
  {
    id: 8,
    category: 'AI & Machine Learning',
    title: 'Deepfake Detection Platform',
    tagline: 'Detecting AI-Generated Images With Precision',
    shortDescription: 'A deep learning-based platform capable of identifying manipulated and AI-generated images through advanced visual analysis and pattern recognition techniques.',
    techStack: ['React.js', 'Python', 'Deep Learning', 'SQL'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['AI-generated media is becoming indistinguishable from reality.', 'Problems:'],
          list: ['Identity theft', 'Spread of misinformation', 'Lack of accessible verification tools']
        },
        {
          title: 'Visual Architecture',
          content: ['Detecting microscopic anomalies in synthetic media.', 'Techniques:'],
          list: ['Frequency domain analysis', 'Artifact detection', 'Facial mapping inconsistencies']
        },
        {
          title: 'Analysis Workflow',
          type: 'workflow',
          steps: ['Media Upload', 'Frame Extraction', 'CNN Processing', 'Anomaly Detection', 'Authenticity Score']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['High Precision Detection', 'Scalable Analysis', 'Improved Digital Trust']
        }
      ]
    }
  },

  // AI & AUTOMATION
  {
    id: 9,
    category: 'AI & Automation',
    title: 'Multi-Agent Intelligence Platform',
    tagline: 'Multiple AI Agents Working Together To Solve Problems',
    shortDescription: 'An advanced agentic AI platform where multiple specialized AI agents collaborate, exchange context, and collectively generate optimized solutions using RAG architectures and vector search systems.',
    techStack: ['Python', 'React.js', 'LangGraph', 'LangChain', 'OpenAI', 'Gemini', 'Vector Database', 'Redis', 'Docker'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'Agent Architecture',
          content: ['Designing a decentralized system of specialized AI workers.', 'Agent roles:'],
          list: ['Researcher Agent', 'Synthesizer Agent', 'Reviewer Agent', 'Executive Agent']
        },
        {
          title: 'RAG Pipeline',
          content: ['Providing agents with accurate, real-time context.', 'Pipeline features:'],
          list: ['Semantic vector search', 'Document chunking & embedding', 'Hybrid retrieval mechanisms']
        },
        {
          title: 'Agent Collaboration Flow',
          type: 'workflow',
          steps: ['User Prompt', 'Task Delegation', 'Parallel Processing', 'Context Exchange', 'Consensus Generation']
        },
        {
          title: 'Performance Results',
          type: 'impact',
          items: ['Complex Task Automation', 'Reduced Hallucinations', 'Highly Scalable']
        }
      ]
    }
  },
  {
    id: 10,
    category: 'AI & Automation',
    title: 'AI Notification & Care System',
    tagline: 'Human-Like AI Calls & Intelligent Reminders',
    shortDescription: 'A voice-enabled AI agent that proactively interacts with users through calls and notifications, delivering reminders, healthcare assistance, and personalized communication workflows.',
    techStack: ['Python', 'FastAPI', 'OpenAI Realtime', 'Twilio', 'Redis', 'Docker', 'AWS'],
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['Standard notifications are easily ignored.', 'Problems:'],
          list: ['Missed medical appointments', 'Low engagement with text alerts', 'Impersonal automated calls']
        },
        {
          title: 'Real-Time Voice Architecture',
          content: ['Creating human-like conversational flows.', 'Features:'],
          list: ['Sub-second latency', 'Emotion and tone detection', 'Dynamic conversation trees']
        },
        {
          title: 'Communication Workflow',
          type: 'workflow',
          steps: ['Event Trigger', 'Context Retrieval', 'Outbound Call', 'Voice Interaction', 'Outcome Logged']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['Increased Engagement', 'Fewer Missed Events', 'Personalized Care']
        }
      ]
    }
  },
  {
    id: 11,
    category: 'AI & Automation',
    title: 'AI Software Developer Agent',
    tagline: 'An Autonomous AI Engineering Assistant',
    shortDescription: 'An intelligent software engineering agent capable of understanding requirements, planning architecture, generating code, reviewing implementations, and assisting developers throughout the software development lifecycle.',
    techStack: ['Python', 'LangGraph', 'OpenAI', 'Claude', 'Vector DB', 'GitHub Integration'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    caseStudy: {
      sections: [
        {
          title: 'The Challenge',
          content: ['Developers spend too much time on boilerplate and debugging.', 'Problems:'],
          list: ['Repetitive coding tasks', 'Complex dependency resolution', 'Time-consuming code reviews']
        },
        {
          title: 'Autonomous Engineering',
          content: ['An agent that operates directly within the repository.', 'Capabilities:'],
          list: ['Codebase semantic search', 'Automated PR generation', 'Architecture planning']
        },
        {
          title: 'Development Workflow',
          type: 'workflow',
          steps: ['Issue Created', 'Context Gathering', 'Plan Generation', 'Code Implementation', 'PR Submission']
        },
        {
          title: 'Impact',
          type: 'impact',
          items: ['Faster Ship Times', 'Reduced Boilerplate', 'Automated Reviews']
        }
      ]
    }
  }
];
