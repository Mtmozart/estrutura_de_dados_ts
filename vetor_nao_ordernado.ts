class VetorNaoOrdenado {
  //definindo os atributos da classe
  private readonly capacidade: number;
  private ultima_posicao: number;
  private valores: number[];

  //chamando o constructor, pois, ele é usado quando crio uma nova instância
  constructor(capacidade: number) {
    this.capacidade = capacidade;
    this.ultima_posicao = -1;
    this.valores = new Array(this.capacidade);
  }

  //imprimir
  imprimir(): void {
    if (this.ultima_posicao === -1) {
      console.log("O array está vazio");
    } else {
      for (let i = 0; i <= this.ultima_posicao; i++) {
        console.log(this.valores[i]);
      }
    }
  }

  inserir(value: number): void {
    if (this.capacidade - 1 == this.ultima_posicao) {
      console.log("O vetor está cheio");
    } else {
      this.ultima_posicao += 1;
      this.valores[this.ultima_posicao] = value;
    }
  }

  pesquisar(value: number): void {
    let encontrou: boolean = false;
    for (let i = 0; i <= this.ultima_posicao; i++) {
      if (value == this.valores[i]) {
        console.log("está na posição do array: ", i);
        encontrou = true;
      }
    }
    if (!encontrou) console.log("Desculpe, mas o número não foi encontrado");
  }

  excluir(value: number): void {
    let encontrou: boolean = false;
    for (let i = 0; i <= this.ultima_posicao; i++) {
      if (value == this.valores[i]) {
        this.valores.splice(i, 1);
        this.ultima_posicao -= 1;
        encontrou = true;
        console.log("Valor removido com sucesso");
        break;
      }
    }
    if (!encontrou) console.log("Desculpe, mas o número não foi encontrado");
  }
}

const vetorNaoOrdenado = new VetorNaoOrdenado(5);
//vetorNaoOrdenado.imprimir();
vetorNaoOrdenado.inserir(7);
vetorNaoOrdenado.inserir(78);
vetorNaoOrdenado.inserir(2314);

//teste de capacidade
vetorNaoOrdenado.inserir(7);
//impressão tudo
vetorNaoOrdenado.imprimir();
//pesquisar correto
vetorNaoOrdenado.pesquisar(7);
//pesquisar valor que não existi
vetorNaoOrdenado.pesquisar(9999);
//excluir
vetorNaoOrdenado.excluir(78);
//impressão para ver se o valor foi excluído
vetorNaoOrdenado.imprimir();
//tentativa de excluir número que não existe
vetorNaoOrdenado.excluir(5468764);
