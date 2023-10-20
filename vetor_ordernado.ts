class VetorOrdenado {
  private readonly capacidade: number;
  private ultima_posicao: number;
  private valores: number[];

  constructor(capacidade: number) {
    this.capacidade = capacidade;
    this.ultima_posicao = -1;
    this.valores = new Array(this.capacidade);
  }

  imprime() {
    if (this.ultima_posicao === -1) {
      console.log("array vazio");
    } else {
      for (let i = 0; i <= this.ultima_posicao; i++) {
        console.log(this.valores[i]);
      }
    }
  }

  inserir(value: number): void {
    if (this.ultima_posicao === this.capacidade - 1) {
      console.log("Array cheio");
    } else {
      this.ultima_posicao += 1;
      let posicao = 0;

      for (let i = 0; i <= this.ultima_posicao; i++) {
        posicao = i;
        if (this.valores[i] > value) {
          break;
        }
      }
      //isso aqui decrementa
      let x = this.ultima_posicao;
      while (x >= posicao) {
        this.valores[x + 1] = this.valores[x];
        x -= 1;
      }
      this.valores[posicao] = value;
    }
  }

  pesquisar(value: number): number {
    let valorEncontrado = false;
    for (let i: number = 0; i <= this.ultima_posicao; i++) {
      if (this.valores[i] == value) {
        console.log(this.valores[i]);
        valorEncontrado = true;
        return i;
      }
    }
    let a: number = 0;
    if (!valorEncontrado) {
      console.log("value not found");
      a = -1;
    }
    return a;
  }

  excluir(value): boolean {
    let posicao: number = vetorOrdenado.pesquisar(value);
    if (posicao == -1) {
      console.log("valor não encontrado");
      return false;
    }

    for (let i = posicao; i < this.ultima_posicao; ++i) {
      this.valores[i] = this.valores[i + 1];
    }
    this.ultima_posicao -= 1;
    console.log("valo removido");
    return true;
  }
}

const vetorOrdenado = new VetorOrdenado(6);
vetorOrdenado.inserir(5);
vetorOrdenado.inserir(6);
vetorOrdenado.inserir(4);
vetorOrdenado.inserir(1);
vetorOrdenado.inserir(45);
vetorOrdenado.inserir(999999);

vetorOrdenado.imprime();
vetorOrdenado.pesquisar(46);
vetorOrdenado.excluir(1);
vetorOrdenado.imprime();
