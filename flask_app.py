from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/projects")
def projects():
    return render_template("projects1.html")

@app.route("/experience")
def experience():
    return render_template("experience.html")

# @app.route('/greenhouse')
# def greenhouse():
#     return render_template('greenhouse.html')

if __name__ == "__main__":
    app.run(debug=True)
