import { useState } from "react";
import {
  Upload,
  Leaf,
  ArrowRight,
  ShieldCheck,
  ScanSearch,
} from "lucide-react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <Leaf size={20} />
          </div>
          <span>CropCare AI</span>
        </div>

        <div className="nav-status">
          <span className="status-dot"></span>
          Diagnostic engine online
        </div>
      </nav>

      <main className="hero">
        <section className="hero-content">
          <div className="eyebrow">
            <ScanSearch size={16} />
            AI-POWERED CROP HEALTH
          </div>

          <h1>
            Something wrong
            <br />
            with your plant?
          </h1>

          <p className="hero-description">
            Upload a clear image of the affected plant and get a
            preliminary health assessment, possible causes, and
            guidance on what to check next.
          </p>

          <div className="trust-row">
            <div>
              <ShieldCheck size={18} />
              <span>Image-based analysis</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Clear explanations</span>
            </div>
          </div>
        </section>

        <section className="upload-card">
          {!image ? (
            <>
              <div className="upload-icon">
                <Upload size={28} />
              </div>

              <h2>Upload a plant image</h2>

              <p>
                Use a clear photo showing the affected leaf,
                stem, fruit, or other visible symptoms.
              </p>

              <label className="upload-button">
                Choose image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
                <ArrowRight size={18} />
              </label>

              <span className="file-hint">
                JPG, PNG or WEBP · Max 10 MB
              </span>
            </>
          ) : (
            <div className="preview-container">
              <div className="preview-image-wrapper">
                <img src={image} alt="Uploaded plant" />
              </div>

              <div className="preview-info">
                <div>
                  <span className="preview-label">IMAGE READY</span>
                  <h2>Ready for analysis</h2>
                </div>

                <button className="analyze-button">
                  Analyze image
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer>
        <span>CropCare AI</span>
        <span>
          Preliminary diagnostic assistance · Not a substitute for expert
          advice
        </span>
      </footer>
    </div>
  );
}

export default App;