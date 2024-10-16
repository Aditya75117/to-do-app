import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AddEdit = () => {

  const location = useLocation();
  const receivedData = location.state;
  
    const [formData, setFormData] = useState({
      taskName: '',
      taskDescription: '',
      taskType: '',
      taskPriority: '',
      taskStatus:'',
      createdAt: '',
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    };
    
    const validateForm = () => {
      const newErrors = {};
      if (!formData.taskName) newErrors.name = 'Name is required';
      if (!formData.taskDescription) newErrors.description = 'Description is required';
      if (!formData.taskType) newErrors.type = 'Type is required';
      if (!formData.taskPriority) newErrors.priority = 'Priority is required';
      return newErrors;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const currentDate = new Date().toISOString(); 
  
      const updatedFormData = {
          ...formData,
          createdAt: currentDate,
      };
      
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
      } else {
          try {
            const response = await axios.post('http://localhost:3333/api/tasks', updatedFormData);

              console.log('Task added successfully:', response.data);
  
              // Optionally save to local storage
              localStorage.setItem('formData', JSON.stringify(updatedFormData));
  
              // Reset form data
              setFormData({
                  taskName: '',
                  taskDescription: '',
                  taskType: '',
                  taskPriority: '',
                  taskStatus:'',
                  createdAt: '',
              });
          } catch (error) {
              console.error('Error adding task:', error);
              // Handle error (e.g., set an error message in the state)
          }
      }
  };
    
    useEffect(() => {
      if(receivedData)  {
        setFormData(receivedData)
      }
    },[]);
   
  return (
    <section className="new-item-wrpr h-full">
      <div className="add-form-wrpr h-full">
      <h1 className="page-title">Add New Item</h1>
        <form onSubmit={handleSubmit} className="add-form">
          <div className="in-wrpr">
            <label className="f-label" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="taskName"
              value={formData.taskName}
              onChange={handleChange}
              className="input f-in"
            />
            {errors.name && <span className="f-error">{errors.name}</span>}
          </div>

          <div className="in-wrpr">
            <label className="f-label" htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="taskDescription"
              value={formData.taskDescription}
              onChange={handleChange}
              className="textarea f-in"
            />
            {errors.description && <span className="f-error">{errors.description}</span>}
          </div>

          <div className="in-row">
            <div className="in-wrpr">
              <label className="f-label" htmlFor="type">Type:</label>
              <select
                id="type"
                name="taskType"
                value={formData.taskType}
                onChange={handleChange}
                className="select f-in"
              >
                <option value="">Select Type</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="other">Other</option>
              </select>
              {errors.type && <span className="f-error">{errors.type}</span>}
            </div>

            <div className="in-wrpr">
              <label className="f-label" htmlFor="priority">Priority:</label>
              <select
                id="priority"
                name="taskPriority"
                value={formData.taskPriority}
                onChange={handleChange}
                className="select f-in"
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              {errors.priority && <span className="f-error">{errors.priority}</span>}
            </div>

            <div className="in-wrpr">
              <label className="f-label" htmlFor="status">Status:</label>
              <select
                id="status"
                name="taskStatus"
                value={formData.taskStatus}
                onChange={handleChange}
                className="select f-in"
              >
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="progress">Progress</option>
                <option value="completed">Completed</option>
                <option value="deleted">Deleted</option>
              </select>
              {errors.priority && <span className="f-error">{errors.priority}</span>}
            </div>
          </div>
          <div className="btn-row">
            <button type="button" className="form-btn cancel-button">
              Cancel
            </button>
            <button type="submit" className="form-btn submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default AddEdit;
