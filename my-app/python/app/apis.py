from app import app
from flask import Flask, jsonify, request, Blueprint
from .models import db, User
from flask_jwt_extended import create_access_token

@app.route('/user', methods=['POST'])
def saveUser():
   data_request = request.get_json()
   getUser = User.query.filter_by(mail=data_request["mail"]).first()
   if getUser:
      return jsonify(message='usuario ya existe', status=400), 400
   access_token = create_access_token(identity=data_request['mail'])
   result = User(mail=data_request['mail'],password=data_request['password'], token=access_token)
   db.session.add(result)
   db.session.commit()
   return jsonify(message='user successfully created', status=200), 200

@app.route('/login', methods=['POST'])
def login():
   data_request = request.get_json()
   getUser = User.query.filter_by(mail=data_request["mail"],password=data_request['password']).first()
   if not getUser:
      return jsonify(message='usuario o contraseña incorrecta', status=400), 400
   print(getUser)
   access_token = create_access_token(identity=data_request['mail'])
   return jsonify(access_token=access_token, status=200), 200

@app.route('/users', methods=['GET'])
def getUser():
   result = User.query.all()
   data = list(map(lambda dataUser: dataUser.serialize(), result))
   return jsonify(data), 200