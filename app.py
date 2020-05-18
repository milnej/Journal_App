from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Journal App Test!'

if __name__ == '__main__':
    # for dev: debug=True
    app.run(debug=True)