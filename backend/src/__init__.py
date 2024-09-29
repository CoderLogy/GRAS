# app/__init__.py
from flask import Flask
from .app import api_routes  # Import the Blueprint

def create_app():
    app = Flask(__name__)

    # Register the Blueprint
    app.register_blueprint(api_routes)

    return app
