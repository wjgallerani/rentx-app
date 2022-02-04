import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar, useWindowDimensions } from 'react-native';
import { ConfirmButton } from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

// import { ConfirmButton } from '../../components/ConfirmButton';
import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';


export function Confirmation() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation<any>();

    function handleConfirm() {
        navigation.navigate('Home')
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                {/* <Title>{title}</Title> */}

                <Message>
                    {/* {message} */}
                </Message>
            </Content>
            <Footer>
                <ConfirmButton
                    title="OK"
                    onPress={handleConfirm}
                />
            </Footer>


        </Container>
    );
}