from flask import Flask, request, jsonify, g
from werkzeug.utils import secure_filename
import service
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'  # Create an 'uploads' folder in your project root
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Ensure the upload folder exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/analyze_image", methods=['POST'])
def analyze_image():
    if 'files' not in request.files:
        return jsonify({'error': 'No file part in the request.'}), 400

    file = request.files['files']
    if file.filename == '':
        return jsonify({'error': 'No file selected here.'}), 400
    if not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type. Allowed types are: png, jpg, jpeg, gif.'}), 400

    file = secure_filename(file.filename)  # Secure the filename
    file_path = os.path.join(UPLOAD_FOLDER, file)
    file.save(file_path)  # Save the file to the uploads folder

    try:
        g.extracted_text = service.vision_api(file_path)  # Pass the file path to your service
        os.remove(file_path)  # Remove the file after processing
        return jsonify({"extracted_text": g.extracted_text}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/grades", methods=['POST'])
def result():
    if not hasattr(g, "extracted_text"):
        return jsonify({"error": "No extracted text found. Please analyze an image first."}), 400
    
    g.rubric_text = read_rubric_text()  # Read the rubric text from file
    return jsonify({"result": service.grade_assignment(assignment_text=g.extracted_text, rubric_text=g.rubric_text)})

@app.route("/query", methods=['POST'])
def query_chatbot():
    text = request.form.get("input_text")  # Use get to avoid KeyError
    if not text:
        return jsonify({"error": "No text was provided"}), 400
    
    if not hasattr(g, "rubric_text"):
        g.rubric_text = read_rubric_text()  # Ensure rubric_text is set before using it

    return jsonify({"result": service.grade_assignment(assignment_text=text, rubric_text=g.rubric_text)})

def read_rubric_text(file="backend/src/app/rubric_text.txt"):
    with open(file, 'r') as f:  # Ensure you open the file in read mode
        return f.read()  # Read and return the file content

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=3000)
