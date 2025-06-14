from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/courses')
def courses():
    return render_template('courses.html')

@app.route('/writing')
def writing():
    return render_template('writing.html')

@app.route('/grammar')
def grammar():
    return render_template('grammar.html')

@app.route('/quizzes')
def quizzes():
    return render_template('quizzes.html')

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    app.run(debug=True)
