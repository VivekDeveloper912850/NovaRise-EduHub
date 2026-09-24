import { Battery, Bot, Braces, Brain, Building2, ChartNoAxesCombined, CircuitBoard, Cog, Cpu, Database, Globe, HardHat, Network, Settings, Zap } from 'lucide-react'

export const branchOptions = [
  'Computer Science & Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Mechanical Engineering — IoT + AI/ML',
  'Civil Engineering — IoT + AI/ML',
]

const programDefinitions = [
  ['web-development', 'Computer Science & Engineering', 'Web Development', 'Build practical skills for developing modern web applications.', 'Web Development', Globe],
  ['data-analyst', 'Computer Science & Engineering', 'Data Analyst', 'Develop practical skills for working with data and extracting useful insights.', 'Data & Analytics', ChartNoAxesCombined],
  ['artificial-intelligence', 'Computer Science & Engineering', 'Artificial Intelligence', 'Learn core AI concepts and apply them to practical real-world problems.', 'Artificial Intelligence', Brain],
  ['machine-learning', 'Computer Science & Engineering', 'Machine Learning', 'Build practical understanding of machine learning concepts and applications.', 'Machine Learning', Network],
  ['internet-of-things', 'Computer Science & Engineering', 'Internet of Things', 'Learn how connected devices and intelligent systems work together.', 'Internet of Things', Cpu],
  ['database', 'Computer Science & Engineering', 'Database', 'Learn practical database concepts for storing, managing, and working with data.', 'Data & Analytics', Database],
  ['java-programming', 'Computer Science & Engineering', 'Java Programming', 'Develop strong Java programming skills through practical learning.', 'Java Development', Braces],
  ['electric-vehicle-technology', 'Electrical Engineering', 'Electric Vehicle Technology', 'Explore EV technologies, systems, and practical engineering applications.', 'Electric Vehicles', Zap],
  ['renewable-energy-solar-technology', 'Electrical Engineering', 'Renewable Energy & Solar Technology', 'Learn practical concepts in renewable energy and solar power systems.', 'Renewable Energy', Zap],
  ['industrial-automation-plc-scada', 'Electrical Engineering', 'Industrial Automation & PLC/SCADA', 'Understand industrial automation and modern control system workflows.', 'Industrial Automation', CircuitBoard],
  ['battery-technology-energy-storage', 'Electrical Engineering', 'Battery Technology & Energy Storage', 'Explore battery technologies and modern energy storage systems.', 'Energy Systems', Battery],
  ['power-systems-smart-grid', 'Electrical Engineering', 'Power Systems & Smart Grid', 'Learn practical concepts behind power systems and smart grid technologies.', 'Power Systems', Zap],
  ['embedded-systems-iot', 'Electrical Engineering', 'Embedded Systems & IoT', 'Explore embedded systems and connected technologies for intelligent applications.', 'Embedded Systems', Cpu],
  ['ai-ml-electrical-engineering', 'Electrical Engineering', 'AI & ML for Electrical Engineering', 'Apply AI and machine learning concepts to electrical engineering applications.', 'Applied AI', Brain],
  ['mechanical-design-cad', 'Mechanical Engineering', 'Mechanical Design & CAD', 'Develop practical skills in mechanical design and CAD-based workflows.', 'Mechanical Design', Cog],
  ['manufacturing-production-engineering', 'Mechanical Engineering', 'Manufacturing & Production Engineering', 'Learn practical concepts in manufacturing and production processes.', 'Manufacturing', Settings],
  ['automobile-engineering-ev-systems', 'Mechanical Engineering', 'Automobile Engineering & EV Systems', 'Explore automobile technologies and modern electric vehicle systems.', 'Automobile Engineering', Cog],
  ['robotics-industrial-automation', 'Mechanical Engineering', 'Robotics & Industrial Automation', 'Learn practical concepts in robotics and industrial automation.', 'Robotics', Bot],
  ['structural-design-analysis', 'Civil Engineering', 'Structural Design & Analysis', 'Learn practical concepts for structural design and engineering analysis.', 'Structural Engineering', Building2],
  ['construction-management', 'Civil Engineering', 'Construction Management', 'Develop practical understanding of construction planning and management.', 'Construction', HardHat],
  ['building-information-modeling', 'Civil Engineering', 'Building Information Modeling (BIM)', 'Explore BIM workflows for modern construction and infrastructure projects.', 'Construction Technology', Building2],
  ['quantity-surveying-cost-estimation', 'Civil Engineering', 'Quantity Surveying & Cost Estimation', 'Learn practical methods for quantity assessment and construction cost estimation.', 'Cost Estimation', HardHat],
  ['ai-iot-predictive-maintenance', 'Mechanical Engineering — IoT + AI/ML', 'AI & IoT-Based Predictive Maintenance', 'Explore intelligent approaches to equipment monitoring and predictive maintenance.', 'Smart Manufacturing', Cog],
  ['smart-manufacturing-industrial-iot', 'Mechanical Engineering — IoT + AI/ML', 'Smart Manufacturing & Industrial IoT', 'Learn how connected technologies support modern smart manufacturing.', 'Industrial IoT', Cpu],
  ['ai-ml-mechanical-fault-detection', 'Mechanical Engineering — IoT + AI/ML', 'AI/ML-Based Mechanical Fault Detection', 'Explore AI and machine learning approaches for mechanical fault detection.', 'Applied AI', Brain],
  ['iot-ai-robotics-automation', 'Mechanical Engineering — IoT + AI/ML', 'IoT & AI-Based Robotics and Automation', 'Explore intelligent robotics and automation using connected technologies.', 'Robotics', Bot],
  ['ai-iot-smart-construction', 'Civil Engineering — IoT + AI/ML', 'AI & IoT-Based Smart Construction', 'Explore intelligent technologies for modern construction environments.', 'Smart Construction', Building2],
  ['ai-ml-structural-health-monitoring', 'Civil Engineering — IoT + AI/ML', 'AI/ML-Based Structural Health Monitoring', 'Learn how AI and machine learning can support structural monitoring.', 'Structural Engineering', Network],
  ['iot-smart-infrastructure-monitoring', 'Civil Engineering — IoT + AI/ML', 'IoT-Based Smart Infrastructure & Monitoring', 'Explore connected technologies for infrastructure monitoring and management.', 'Smart Infrastructure', CircuitBoard],
  ['ai-ml-construction-prediction', 'Civil Engineering — IoT + AI/ML', 'AI/ML-Based Construction Cost & Project Prediction', 'Explore AI and machine learning applications for construction planning and prediction.', 'Construction Technology', ChartNoAxesCombined],
]

const programs = programDefinitions.map(([id, branch, title, description, category, icon]) => ({
  id,
  branch,
  title,
  description,
  category,
  mode: 'Online',
  format: 'Project-Based',
  icon,
}))

export default programs
