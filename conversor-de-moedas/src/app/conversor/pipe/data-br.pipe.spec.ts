import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formartar a data 2023-10-11 para 11/10/2023', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2023-10-11')).toEqual('11/10/2023')
  })
});
