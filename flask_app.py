from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/experience")
def experience():
    return render_template("experience.html")

@app.route('/j')
def valentine():
    return render_template('valentine.html')


if __name__ == "__main__":
    app.run(debug=True)
