from flask import Flask
from flask_jwt_extended import JWTManager
app = Flask(__name__)
from app import apis
from app import models
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@db_data_system/authentication_system'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['CORS_HEADERS'] = 'Content-Type'
app.config["JWT_SECRET_KEY"] = "super-secret"
db = SQLAlchemy(app)
db.init_app(app)
CORS(app)



jwt = JWTManager(app)
