from flask import Flask, Blueprint, render_template

app = Flask(__name__)

legacy = Blueprint("legacy", __name__, url_prefix="/legacy")


@legacy.route("/")
def home():
    return render_template("legacy/index.html")


@legacy.route("/projects")
def projects():
    return render_template("legacy/projects.html")


@legacy.route("/experience")
def experience():
    return render_template("legacy/experience.html")


@legacy.route("/bloom")
def bloom():
    return render_template("legacy/bloom.html")


app.register_blueprint(legacy)


@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
