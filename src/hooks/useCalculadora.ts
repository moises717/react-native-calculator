import {useRef, useState} from 'react';

enum Operadores {
  suma,
  resta,
  multiplicacion,
  division,
}

export const useCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const clear = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const buildNumber = (num: string) => {
    if (numero.includes('.') && num === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (num === '.') {
        setNumero(numero + num);
      } else if (num === '0' && numero.includes('.')) {
        setNumero(numero + num);
      } else if (num !== '0' && !numero.includes('.')) {
        setNumero(num);
      } else if (num === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + num);
      }
    } else {
      setNumero(numero + num);
    }
  };

  const positiveNegative = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const removeLast = () => {
    let negativo = '';
    let tempNum = numero;

    if (numero.includes('-')) {
      negativo = '-';
      tempNum = numero.substring(1);
    }

    if (tempNum.length > 1) {
      setNumero(negativo + tempNum.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const changeNumberByPrevious = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }

    setNumero(numero);
    setNumero('0');
  };

  const btnDividir = () => {
    if (numero === '0') {
      return;
    }
    changeNumberByPrevious();
    ultimaOperacion.current = Operadores.division;
  };
  const btnMultiplicar = () => {
    if (numero === '0') {
      return;
    }
    changeNumberByPrevious();
    ultimaOperacion.current = Operadores.multiplicacion;
  };
  const btnRestar = () => {
    if (numero === '0') {
      return;
    }
    changeNumberByPrevious();
    ultimaOperacion.current = Operadores.resta;
  };
  const btnSumar = () => {
    if (numero === '0') {
      return;
    }
    changeNumberByPrevious();
    ultimaOperacion.current = Operadores.suma;
  };

  const btnIgual = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);
    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumero(String(num1 + num2));
        break;
      case Operadores.resta:
        setNumero(String(num2 - num1));
        break;
      case Operadores.multiplicacion:
        setNumero(String(num1 * num2));
        break;
      case Operadores.division:
        setNumero(String(num2 / num1));
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    numero,
    numeroAnterior,
    clear,
    buildNumber,
    positiveNegative,
    removeLast,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    btnIgual,
  };
};
