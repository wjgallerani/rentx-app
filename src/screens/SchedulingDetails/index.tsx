import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Accessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal
} from './styles';



export function SchedulingDetails() {
    const theme = useTheme();

    const navigation = useNavigation<any>();

    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails');
    }

    return (
        <Container>
            <Header>
                {/* <BackButton onPress={() => { }} /> */}
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={[]} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand></Brand>
                        <Name></Name>
                    </Description>

                    <Rent>
                        <Period></Period>
                        <Price></Price>
                    </Rent>
                </Details>

                <Accessories>
                    <Accessory name="" icon={speedSvg} />
                    <Accessory name="" icon={accelerationSvg} />
                    <Accessory name="" icon={forceSvg} />
                    <Accessory name="" icon={gasolineSvg} />
                    <Accessory name="" icon={exchangeSvg} />
                    <Accessory name="" icon={peopleSvg} />
                </Accessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue></DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue></DateValue>
                    </DateInfo>

                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota></RentalPriceQuota>
                        <RentalPriceTotal></RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button
                    title="Alugar agora"
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
} 