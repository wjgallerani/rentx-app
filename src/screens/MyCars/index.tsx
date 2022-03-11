import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused} from '@react-navigation/core';
import { StatusBar, FlatList } from 'react-native';
import { Car as ModelCar } from '../../database/model/Car';
import { api } from '../../service/api';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles';

interface DataProps {
    id: string;
    car: ModelCar;
    startDate: string;
    endDate: string;
}

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { useTheme } from 'styled-components';
import { LoadAnimation } from '../../components/LoadAnimation';
import { format, parseISO } from 'date-fns';

export function MyCars() {
  const [cars, setCars] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const screenIsFocus = useIsFocused();

  const navigation = useNavigation<any>();
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get(`/schedules_byuser?user_id=1`);
        const dataFormatted = response.data.map((data : DataProps) => {
            return {
                id: data.id,
                car: data.car,
                startDate: format(parseISO(data.startDate), 'dd/MM/yyyy'),
                endDate: format(parseISO(data.endDate), 'dd/MM/yyyy')
            }
        });
        setCars(response.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    fetchCars();
  }, [screenIsFocus]);

  function handleGoBack() {
    navigation.goBack();
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
          onPress={handleGoBack}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel.
        </Title>
        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>

      </Header>

      {loading ? <LoadAnimation /> :

        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos:</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>

                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{
                        marginHorizontal: 10
                      }}
                    />

                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      }
    </Container >
  );
}