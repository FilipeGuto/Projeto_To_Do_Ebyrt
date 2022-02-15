const chai = require('chai');
const chaiHttp = require('chai-http');
const NOVA_TAREFA = require('./data.json').NOVA_TAREFA;
const URL = 'http://localhost:3000';

chai.use(chaiHttp);
chai.should();

describe('Criação de uma nova tarefa', () => {
	describe('POST /todo', () => {
		it('Cria uma nova tarefa e retorna status:201', done => {
			chai.request(URL)
			.post('/todo')
			.send(NOVA_TAREFA)
			.end((err, res) => {
				chai.assert.isNull(err);
				chai.assert.isNotEmpty(res.body);
				res.should.have.status(201);
				done();
			});
		});
		it('A nova tarefa deve ter um campo "id"', done => {
			chai.request(URL)
			.post('/todo')
			.send(NOVA_TAREFA)
			.end((err, res) => {
				chai.assert.isNull(err);
				chai.assert.isNotEmpty(res.body);
				res.body.should.have.property('_id');
				done();
			});
		});
		it('A nova tarefa deve ter um campo "tarefa"', done => {
			chai.request(URL)
			.post('/todo')
			.send(NOVA_TAREFA)
			.end((err, res) => {
				chai.assert.isNull(err);
				chai.assert.isNotEmpty(res.body);
				res.body.should.have.property('tarefa').equal(NOVA_TAREFA.tarefa);
				done();
			});
		});
	});
});

describe('Lista de todas tarefas', () => {
	describe('GET /todo', () => {
		it('Deve retornar todas tarefas e status:200', done => {
			chai.request(URL)
			.get('/todo')
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
		});
		it('As tarefas retornadas devem estar dentro de um array', done => {
			chai.request(URL)
			.get('/todo')
			.end((err, res) => {
				res.body.should.be.a('array');
				done();
			});
		});
	});
});
