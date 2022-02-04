import React from 'react';
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
    About,
    Accessories,
    Footer
} from './styles';

export function CarDetails() {
    const navigation = useNavigation<any>();

    function handleConfirmRental() {
        navigation.navigate('Scheduling');
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

                <About>
                    Tesxte
                </About>
            </Content>

            <Footer>
                <Button
                    title="Escolher período do aluguel"
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    );
} 