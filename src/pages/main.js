import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Main extends Component {
    static navigationOptions = {
        title: 'JsIHere',
        headerTitleStyle: {
            fontWeight: '300',
            color: '#ffffff',
            fontFamily: 'baloo_bhai',
            fontSize: 24
        }
    }
    state = {
        date: '',
        hour: '',
        code: ''
    };

    constructor(props) {
        super(props);
        let currentHour = this.getCurrentHour;
    }

    componentDidMount() {
        this.getCurrentHour()
    }

    inserNumber(number) {
        if (this.state.code.length >= 4) {
            return
        }
        this.setState({ code: this.state.code + number })
    }

    onPressBack = () => {
        var number = this.state.code.slice(0, -1);
        this.setState({ code: number })
    };
    onPressForward = () => {
        this.setState({})
    };

    getCurrentHour() {
        setInterval(() => {
            var date = new Date();
            var day = date.getDate();
            var month = String(date.getMonth() + 1).padStart(2, "0");
            var year = date.getFullYear();
            var hours = String(date.getHours()).padStart(2, "0");
            var min = String(date.getMinutes()).padStart(2, "0");
            this.setState({
                date: day + '/' + month + '/' + year,
                hour: hours + ':' + min,
            });
        }, 1000)
    }

    render() {
        const { code } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.textDate}>{this.state.date}</Text>
                <Text style={styles.textHour}>{this.state.hour}</Text>
                <Text style={styles.textHour}>Bom Dia</Text>
                <Text style={styles.textRegistration}>Informe sua matrícula</Text>
                <Text style={styles.textNumber}>{code}</Text>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={styles.button}
                        onPress={this.inserNumber.bind(this, "1")}>
                        <Text style={styles.textButton}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={this.inserNumber.bind(this, "2")}>
                        <Text style={styles.textButton}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={this.inserNumber.bind(this, "3")}>
                        <Text style={styles.textButton}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerRow}>
                    <TouchableOpacity style={styles.button}
                        onPress={this.onPressBack}>
                        <Text style={styles.textButton}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.textApp}>I Am Here</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    textDate: {
        fontSize: 24,
        fontFamily: 'baloo_bhai',
        color: '#6b0099'
    },
    textHour: {
        padding: 0,
        margin: 0,
        fontSize: 60,
        fontFamily: 'baloo_bhai',
        color: '#6b0099'
    },
    textApp: {
        fontSize: 22,
        color: '#6b0099',
        fontFamily: 'baloo_bhai',
    },
    containerRow: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textButton: {
        color: '#FFF',
        fontSize: 19,
        textAlign: 'center',
        fontFamily: 'baloo_bhai'
    },
    button: {
        marginTop: 8,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: '#6b0099',
        borderRadius: 50,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textRegistration: {
        fontSize: 22,
        color: '#6b0099',
        fontFamily: 'baloo_bhai'
    },
    textNumber: {
        fontSize: 32,
        textDecorationLine: 'underline',
        color: '#6b0099',
        fontFamily: 'baloo_bhai'
    }
});
