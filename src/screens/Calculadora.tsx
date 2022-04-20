import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';



export const Calculadora = () => {
    const { numero,
        numeroAnterior,
        clear,
        buildNumber,
        positiveNegative,
        removeLast,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        btnIgual } = useCalculadora();


    return (
        <View style={styles.calContainer}>
            {
                numeroAnterior !== '0' && <Text style={styles.smallResult}>{numeroAnterior}</Text>
            }

            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            <View style={styles.fila}>
                <Button text="C" color="#9B9B9B" action={clear} />
                <Button text="+/-" color="#9B9B9B" action={positiveNegative} />
                <Button text="del" color="#9B9B9B" action={removeLast} />
                <Button text="/" color="#FF9427" action={btnDividir} />
            </View>
            <View style={styles.fila}>
                <Button text="7" action={buildNumber} />
                <Button text="8" action={buildNumber} />
                <Button text="9" action={buildNumber} />
                <Button text="x" color="#FF9427" action={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <Button text="4" action={buildNumber} />
                <Button text="5" action={buildNumber} />
                <Button text="6" action={buildNumber} />
                <Button text="-" color="#FF9427" action={btnRestar} />
            </View>
            <View style={styles.fila}>
                <Button text="1" action={buildNumber} />
                <Button text="2" action={buildNumber} />
                <Button text="3" action={buildNumber} />
                <Button text="+" color="#FF9427" action={btnSumar} />
            </View>
            <View style={styles.fila}>
                <Button text="0" ancho action={buildNumber} />
                <Button text="." action={buildNumber} />
                <Button text="=" action={btnIgual} />
            </View>
        </View>
    );
};

