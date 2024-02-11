import flask
from flask import request, jsonify, render_template
from flask_cors import CORS
import json
from transformers import AutoTokenizer, AutoModelForSequenceClassification, pipeline
import torch

tokenizer = AutoTokenizer.from_pretrained("sgunderscore/hatescore-korean-hate-speech")
model = AutoModelForSequenceClassification.from_pretrained("sgunderscore/hatescore-korean-hate-speech")

app = flask.Flask(__name__)
classifier = pipeline("text-classification", model=model, tokenizer=tokenizer)

CORS(app)

@app.route("/", methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route('/analyze', methods=['POST'])
def analyze_context():
    article = request.get_json()
    print(article)
    result = classifier(article)
    print(result)
    return jsonify(result)

@app.route('/comment', methods=['GET', 'POST'])
def comment():
    comment = request.form.get('comment')
    if comment:
        print(comment)
        result = classifier(comment)
        return render_template('analyzed.html', comment = result)
    else:
        print('Request for hello page received with no or blank comment -- redirecting')
        return redirect(url_for('index'))


if __name__ == "__main__":
    app.run()