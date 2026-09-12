import React, { useState, useRef } from "react";

const QuoteForm = () => {
  const [files, setFiles] = useState([]);
  const [showOptional, setShowOptional] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const fileInputRef = useRef(null); // ← CHANGE 2: Added ref

  // File validation constants
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_EXTENSIONS = [
    ".pdf",
    ".png",
    ".jpg",
    ".jpeg",
    ".dwg",
    ".step",
    ".stp",
    ".iges",
    ".igs",
    ".stl",
    ".dxf",
  ];

  const handleFileChange = (e) => {
    // ← CHANGE 3: Replaced entire function
    const selectedFiles = Array.from(e.target.files);
    const validFiles = [];

    selectedFiles.forEach((file) => {
      if (validateFile(file)) {
        validFiles.push(file);
      }
    });

    // Update React state
    setFiles((prev) => [...prev, ...validFiles]);

    // Sync with input so FormData sees the files
    const dataTransfer = new DataTransfer();

    // Keep existing files
    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      Array.from(fileInputRef.current.files).forEach((f) =>
        dataTransfer.items.add(f),
      );
    }

    // Add new files
    validFiles.forEach((file) => dataTransfer.items.add(file));

    // Assign back to input
    if (fileInputRef.current) {
      fileInputRef.current.files = dataTransfer.files;
    }

    // Allow re-selecting same files
    e.target.value = "";
  };

  const validateFile = (file) => {
    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      showFormStatus(
        `File "${file.name}" is too large. Maximum size is 10MB.`,
        "error",
      );
      return false;
    }

    // Check file extension
    const fileExtension = "." + file.name.toLowerCase().split(".").pop();
    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
      showFormStatus(
        `File "${file.name}" has an unsupported format. Allowed formats: PDF, PNG, JPG, DWG, STEP, IGES, STL, DXF`,
        "error",
      );
      return false;
    }

    // Check for duplicate files
    if (files.some((f) => f.name === file.name && f.size === file.size)) {
      showFormStatus(`File "${file.name}" has already been added.`, "error");
      return false;
    }

    return true;
  };

  const removeFile = (index) => {
    // ← CHANGE 4: Replaced entire function
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);

    // Sync input
    const dataTransfer = new DataTransfer();
    newFiles.forEach((file) => dataTransfer.items.add(file));
    if (fileInputRef.current) {
      fileInputRef.current.files = dataTransfer.files;
    }
  };

  const toggleOptionalDetails = () => {
    setShowOptional(!showOptional);
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.toLowerCase().split(".").pop();
    const iconMap = {
      pdf: "fas fa-file-pdf",
      png: "fas fa-file-image",
      jpg: "fas fa-file-image",
      jpeg: "fas fa-file-image",
      dwg: "fas fa-drafting-compass",
      step: "fas fa-cube",
      stp: "fas fa-cube",
      iges: "fas fa-cube",
      igs: "fas fa-cube",
      stl: "fas fa-cube",
      dxf: "fas fa-drafting-compass",
    };
    return iconMap[extension] || "fas fa-file";
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const showFormStatus = (message, type) => {
    setStatus({ type, message });
    setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({
      type: "loading",
      message: "Sending your quote request...",
    });

    const formData = new FormData(e.target);
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    fetch(`${apiUrl}/api/quotes/quote`, {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok || !result.success) {
          throw new Error(result.error || "Quote request could not be sent.");
        }

        setStatus({
          type: "success",
          message: result.message || "Quote request sent successfully.",
        });
        e.target.reset();
        setFiles([]);
        setShowOptional(false);
      })
      .catch((error) => {
        setStatus({
          type: "error",
          message: error.message || "Could not send your quote request.",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form
      className="contact-form"
      id="quoteForm"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">
          Project Description & Requirements *
        </label>
        <div className="textarea-container">
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Please describe your project requirements, dimensions, tolerances, and any specific details..."
            required
          ></textarea>
          <button
            type="button"
            className="file-attach-btn"
            onClick={() => document.getElementById("fileInput").click()}
            title="Attach Files"
          >
            <i className="fas fa-paperclip"></i>
          </button>
        </div>
        <input
          ref={fileInputRef} // ← CHANGE 5: Add this ref
          type="file"
          id="fileInput"
          name="files"
          multiple
          accept=".pdf,.png,.jpg,.jpeg,.dwg,.step,.stp,.iges,.igs,.stl,.dxf"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      <div className="file-preview" id="filePreview">
        {files.map((file, index) => (
          <div className="file-item" key={index}>
            <i className={getFileIcon(file.name)}></i>
            <span className="file-name" title={file.name}>
              {file.name}
            </span>
            <span className="file-size">{formatFileSize(file.size)}</span>
            <button
              type="button"
              className="remove-file"
              onClick={() => removeFile(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="optional-details">
        <button
          type="button"
          className={`expand-btn ${showOptional ? "active" : ""}`}
          onClick={toggleOptionalDetails}
        >
          <i className={`fas ${showOptional ? "fa-minus" : "fa-plus"}`}></i>
          {showOptional
            ? "Hide Optional Details"
            : "Fill More Details (Optional)"}
        </button>

        <div
          className={`optional-content ${showOptional ? "active" : ""}`}
          id="optionalContent"
        >
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantity">Estimated Quantity</label>
              <select id="quantity" name="quantity">
                <option value="">Select quantity range</option>
                <option value="1-10">1-10 pieces</option>
                <option value="11-50">11-50 pieces</option>
                <option value="51-100">51-100 pieces</option>
                <option value="101-500">101-500 pieces</option>
                <option value="500+">500+ pieces</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timeline">Project Timeline</label>
              <select id="timeline" name="timeline">
                <option value="">Select timeline</option>
                <option value="urgent">Urgent (1-3 days)</option>
                <option value="week">Within a week</option>
                <option value="month">Within a month</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="service">Service Required</label>
              <select id="service" name="service">
                <option value="">Select service</option>
                <option value="sheet-metal">Sheet Metal Fabrication</option>
                <option value="laser-cutting">Laser Cutting</option>
                <option value="welding">Welding & Assembly</option>
                <option value="custom">Custom Fabrication</option>
                <option value="finishing">Finishing Services</option>
                <option value="design">Design Support</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="material">Material Specification</label>
              <input
                type="text"
                id="material"
                name="material"
                placeholder="e.g., Stainless Steel 304, Aluminum 6061"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>Preferred Contact Method *</label>
        <div className="contact-method">
          <label className="radio-option">
            <input
              type="radio"
              name="contactMethod"
              value="email"
              defaultChecked
            />
            <span className="radio-custom"></span>
            Email
          </label>
          <label className="radio-option">
            <input type="radio" name="contactMethod" value="whatsapp" />
            <span className="radio-custom"></span>
            WhatsApp
          </label>
          <label className="radio-option">
            <input type="radio" name="contactMethod" value="both" />
            <span className="radio-custom"></span>
            Both Email & WhatsApp
          </label>
        </div>
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitting}>
        <i
          className={`fas ${isSubmitting ? "fa-spinner fa-spin" : "fa-paper-plane"}`}
        ></i>
        {isSubmitting ? "Sending..." : "Send Quote Request"}
      </button>

      {status.message && (
        <div className={`form-status ${status.type}`} id="formStatus">
          {status.message}
        </div>
      )}
    </form>
  );
};

export default QuoteForm;
