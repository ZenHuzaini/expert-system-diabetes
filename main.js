const express = require('express')
const app = express()
const PythonShell = require('python-shell');

/* GET home page. */
app.get('/res/api', (req, res, next) => {
  let options = {
    mode: 'text',
    pythonPath: 'C:/Program Files/Python36/python.exe',
    scriptPath: './',
    args: [req.query.age, req.query.glycemie, req.query.shakiness, req.query.hunger, req.query.sweating, req.query.headach, req.query.diabetic_parents, req.query.pale, req.query.urination, req.query.thirst, req.query.blurred_vision, req.query.dry_mouth, req.query.smelling_breath, req.query.shortness_of_breath]
  };

  let details = {
    age: options.args[0],
    glycemie: options.args[1],
    shakiness: options.args[2],
    hunger: options.args[3],
    sweating: options.args[4],
    headache: options.args[5],
    parents: options.args[6],
    pale: options.args[7],
    urination: options.args[8],
    thirst: options.args[9],
    blurred_vision: options.args[10],
    dry_mouth: options.args[11]
  }

  PythonShell.run('expert-system.py', options, (err, results) => {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log(results);

    res.json({ "res": results })
  });

});

app.get('/', (req, res) => res.send('Try: http://localhost:3000/res/api?age=3\
                                            &glycemie=2\
                                            &shakiness=True\
                                            &hunger=True\
                                            &sweating=True\
                                            &headach=True\
                                            &diabetic_parents=False\
                                            &pale=False\
                                            &urination=False\
                                            &thirst=False\
                                            &blurred_vision=False\
                                            &dry_mouth=False\
                                            &smelling_breath=False\
                                            &shortness_of_breath=False\
                                '))

app.listen(3000, () => console.log('Example app listening on port 3000!'))