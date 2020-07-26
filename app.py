from flask import Flask
from flask import request

app = Flask(__name__)
app.config["DEBUG"] = True

# Removed when db is implemented
test_accounts = {
    'jmilne': 'test',
    'strikit925': 'stoopid'
}

url_prefix = '/api/v1'

def accountCreationValidation(username, password):
    """
    Validates that the username and password adhere to well formed guidlines
    """
    return True

# ----- API ENDPOINTS ----- #

@app.route(f'{url_prefix}/accounts/login', methods=['POST'])
def login():
    """
    Returns:
        success: correct login
        Other: Error message
    """
    username = ''
    password = ''
    body = request.get_json()
    if 'username' in body:
        username = body['username']
    else:
        return 'Invalid request, no username provided'

    if 'password' in body:
        password = body['password']
    else:
        return 'Invalid request, no password provided'

    # check database
    if username in test_accounts and test_accounts[username] == password:
        return 'success'
    else:
        return 'Invalid credentials'

@app.route(f'{url_prefix}/accounts/create', methods=['PUT'])
def createAccount():
    """

    """
    username = ''
    password = ''
    body = request.get_json()
    if 'username' in body:
        username = body['username']
    else:
        return 'Invalid request, no username provided'

    if 'password' in body:
        password = body['password']
    else:
        return 'Invalid request, no password provided'

    if not accountCreationValidation(username, password):
        return 'Invalid username or password'

    # Make post request to db
    test_accounts[username] = password

    return 'success'

if __name__ == '__main__':
    app.run()