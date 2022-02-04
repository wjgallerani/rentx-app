import React from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer
} from './styles';
import { Button } from '../../components/Button';


export function Scheduling() {
    const theme = useTheme();
    const navigation = useNavigation<any>();

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails');
    }

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton
                    color={theme.colors.shape}
                    onPress={() => { }}
                />

                <Title>
                    Escolha uma {''}
                    Data de inicio {''}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue selected={false} />
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue selected={false} />
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                {/* <Calendar
                    onDayPress={handleDateChange}
                    markedDates={markedDates}
                /> */}
            </Content>

            <Footer>
                <Button
                    title="Confirmar"
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
}