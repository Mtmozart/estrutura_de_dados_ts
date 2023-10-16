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
        if (this.valores[i] < value) {
          break;
        }
      }

      let x = this.ultima_posicao;
      while (x >= posicao) {
        this.valores[x + 1] = this.valores[x];
        x -= 1;
      }
      this.valores[posicao] = value;
    }
  }
}

const vetorOrdenado = new VetorOrdenado(5);
vetorOrdenado.inserir(5);
vetorOrdenado.inserir(6);
vetorOrdenado.inserir(4);
vetorOrdenado.inserir(1);
vetorOrdenado.imprime();
