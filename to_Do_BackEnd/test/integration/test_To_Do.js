const chai = require('chai');
const chaiHttp = require('chai-http');
const NOVA_TAREFA = require('./data.json').NOVA_TAREFA;
const URL = 'http://localhost:3000';

chai.use(chaiHttp);
chai.should();

describe('Criação de uma nova tarefa', () => {
	describe('POST /todo', () => {
		it('Deve criar uma nova tarefa - status:201', done => {
			chai.request(URL)
			.post('/todo')
			.send(NOVA_TAREFA)
			.end((err, res) => {
				chai.assert.isNull(err);
				chai.assert.isNotEmpty(res.body);
				res.should.have.status(201);
				res.body.should.have.property('_id');
				res.body.should.have.property('tarefa').equal(NOVA_TAREFA.tarefa);
				done();
			});
		});
	});
});
