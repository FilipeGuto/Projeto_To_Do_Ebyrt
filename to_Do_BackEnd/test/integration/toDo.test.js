const chai = require('chai');
const chaiHttp = require('chai-http');
const { DEFAULT_TASK } = require('./data.json');
const { UPDATE_TASK } = require('./update.json');

const URL = 'http://localhost:3000';

chai.use(chaiHttp);
chai.should();

describe('Criação de uma nova tarefa', () => {
	describe('POST /todo', () => {
		it('Cria uma nova tarefa e retorna status:201', done => {
			chai.request(URL)
				.post('/todo')
				.send(DEFAULT_TASK)
				.end((err, res) => {
					chai.assert.isNull(err);
					chai.assert.isNotEmpty(res.body);
					res.should.have.status(201);
					done();
				});
		});
		it('A tarefa sendo criada retorna uma propriedade "_id"', done => {
			chai.request(URL)
				.post('/todo')
				.send(DEFAULT_TASK)
				.end((err, res) => {
					chai.assert.isNull(err);
					chai.assert.isNotEmpty(res.body);
					res.body.should.have.property('_id');
					done();
				});
		});
		it('A tarefa sendo criada retorna uma propriedade "tarefa"', done => {
			chai.request(URL)
				.post('/todo')
				.send(DEFAULT_TASK)
				.end((err, res) => {
					chai.assert.isNull(err);
					chai.assert.isNotEmpty(res.body);
					res.body.should.have.property('tarefa').to.be.equal(DEFAULT_TASK.tarefa);
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
				.end((_err, res) => {
					res.should.have.status(200);
					done();
				});
		});
		it('As tarefas retornadas devem estar dentro de um array', done => {
			chai.request(URL)
				.get('/todo')
				.end((_err, res) => {
					res.body.should.be.a('array');
					done();
				});
		});
	});
});

describe('Atualiza uma tarefa', () => {
	describe('PUT /todo/:id', () => {
		it('Deve atualizar uma tarefa e retornar status:200', done => {
			chai.request(URL)
				.put(`/todo/123456789abcdef987654321`)
				.send(UPDATE_TASK)
				.end((_err, res) => {
					res.should.have.status(200);
					done();
				});
		});
		it('A nova tarefa deve ter uma propriedade "_id"', done => {
			chai.request(URL)
				.put('/todo/123456789abcdef987654321')
				.send(UPDATE_TASK)
				.end((err, res) => {
					chai.assert.isNull(err);
					chai.assert.isNotEmpty(res.body);
					res.body.should.have.property('_id');
					done();
				});
		});
		it('A nova tarefa deve ter uma propriedade "tarefa"', done => {
			chai.request(URL)
				.put('/todo/123456789abcdef987654321')
				.send(UPDATE_TASK)
				.end((err, res) => {
					chai.assert.isNull(err);
					chai.assert.isNotEmpty(res.body);
					res.body.should.have.property('tarefa').to.be.equal(UPDATE_TASK.tarefa);
					done();
				});
		});
	});
});