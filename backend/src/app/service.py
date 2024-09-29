import os
import openai
import base64
import mimetypes

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

def vision_api(image_path):
    # Read the image file in binary mode
    with open(image_path, 'rb') as image_file:
        image_data = image_file.read()

    # Encode the image in base64
    base64_image = base64.b64encode(image_data).decode('utf-8')
    # Get the MIME type of the image
    mime_type, _ = mimetypes.guess_type(image_path)
    if mime_type is None:
        mime_type = 'image/png'  # Default to PNG if unknown

    # Construct the data URL format expected by the API
    image_data_url = f"data:{mime_type};base64,{base64_image}"

    # Create the message content with the image
    message_content = [
        {"role": "user", "content": "Please extract the text from this image."},
        {
            "role": "user",
            "content": {
                "image": image_data_url
            }
        }
    ]

    try:
        # Send the request to OpenAI's GPT-4 model with vision capabilities
        response = openai.ChatCompletion.create(
            model="gpt-4-vision",
            messages=message_content,
            max_tokens=1000,
            temperature=0.0,
        )

        # Extract the text from the response
        extracted_text = response['choices'][0]['message']['content'].strip()
        return extracted_text

    except Exception as e:
        print(f"Error: {e}")
        return None

def grade_assignment(assignment_text, rubric_text):
    prompt = f"""
You are a teacher grading an assignment based on the following rubric:
{rubric_text}

Student's Assignment:
{assignment_text}

Please provide a grade (out of 100) and detailed feedback for each criterion, analyzing the text for grammar, style, and overall quality, and comparing it to the rubric.
"""

    try:
        # Send the prompt to OpenAI's GPT-4 model
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{'role': 'user', 'content': prompt}],
            max_tokens=1000,
            temperature=0.7,
        )

        # Extract the grading result from the response
        grading_result = response['choices'][0]['message']['content'].strip()
        return grading_result

    except Exception as e:
        print(f"Error: {e}")
        return None

def chat_bot_text(text):
    try:
        prompt = f"Please analyze the following text for grammar, style, and overall quality:\n\n{text}"

        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{'role': 'user', 'content': prompt}],
            max_tokens=500,
            temperature=0.7
        )

        return response['choices'][0]['message']['content'].strip()

    except Exception as e:
        print(f"Error querying OpenAI: {e}")
        return None