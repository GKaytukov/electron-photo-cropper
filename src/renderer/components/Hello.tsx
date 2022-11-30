import { Link } from "react-router-dom"

export default function Hello() {
    const Hello = () => {
        return (
          <div>
            <div className="Hello">
              <h1>My Photo Cropper</h1>
            </div>
            <div className="Hello">
              <a
                href="https://electron-react-boilerplate.js.org/"
                target="_blank"
                rel="noreferrer"
              >
                
              </a>
              <a
                href="https://github.com/sponsors/electron-react-boilerplate"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button">
                  <span role="img" aria-label="camera">
                    📸 &nbsp;
                  </span>
                  Crop Photo
                </button>
              </a>
            </div>
          </div>
        );
      };
      
}