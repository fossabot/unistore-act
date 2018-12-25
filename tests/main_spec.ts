import chai          from 'chai'
import sinon         from 'sinon'
import sinonChai     from 'sinon-chai'
import { act, cact } from '../src/main'

chai.use(sinonChai)
const expect = chai.expect

it('works as act', () => {
  const mockEv = {
    target       : { value: 'asdf' },
    currentTarget: { value: 'qwert' },
  } as any as Event

  const myAction = sinon.fake()

  act(myAction)(mockEv)

  expect(myAction).to.have.been.calledWithExactly('asdf')
})

it('works as cact', () => {
  const mockEv = {
    target       : { value: 'asdf' },
    currentTarget: { value: 'qwert' },
  } as any as Event

  const myAction = sinon.fake()

  cact(myAction)(mockEv)

  expect(myAction).to.have.been.calledWithExactly('qwert')
})
