import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';

export function Home() {
    const navigation = useNavigation<any>();

    const carData = {
        brand: "teste",
        name: "teste",
        rent: {
            period: "teste",
            price: 100
        },
        thumbnail: ""
    };

    function handleCarDetails() {
        navigation.navigate('CarDetails');
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />

                    <TotalCars>
                        Total
                    </TotalCars>
                </HeaderContent>
            </Header>

            <CarList
                data={[1, 2, 3]}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => <Car data={carData} />}
            />

        </Container>
    );
}