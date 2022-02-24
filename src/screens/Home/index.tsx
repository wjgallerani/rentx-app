import React, { useEffect, useState } from 'react';
import { StatusBar, BackHandler, Button } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from '../../database';


import { api } from '../../service/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Car as CarModel } from '../../database/model/Car';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList,
} from './styles';

export function Home() {
    const [cars, setCars] = useState<CarModel[]>([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation<any>();

    function handleCarDetails(car: CarModel) {
        navigation.navigate('CarDetails', { car });
    }

    async function offLineSynchronize() {
        await synchronize({
            database,
            pullChanges: async ({ lastPulledAt }) => {
                const { data } = await api
                    .get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`)

                const { changes, latestVersion } = data; // response.data
                return { changes, timestamp: latestVersion };

            },
            pushChanges: async ({ changes }) => {
                const user = changes.users;
                console.log(user)
                if (user.updated.length > 0) {
                    await api.post('/users/sync', user);
                }
            }
        })
    }

    useEffect(() => {
        let isMounted = true;
        async function fetchCars() {
            try {
                const carCollection = database.get<CarModel>('cars');

                const cars = await carCollection.query().fetch();

                if (isMounted) {
                    setCars(cars)
                }
            } catch (error) {
                console.log(error)
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        fetchCars();

        // prevenir que o usuário volte para a splash screen
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
        return () => {
            isMounted = false;
        }
    }, [])

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
                    {
                        !loading &&
                        <TotalCars>
                            Total de {cars.length} carros
                        </TotalCars>
                    }
                </HeaderContent>
            </Header>

            <Button title="Sincronizar" onPress={offLineSynchronize} />

            {loading ? <LoadAnimation /> :
                <CarList
                    data={cars}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Car data={item} onPress={() => handleCarDetails(item)} />}
                />
            }
        </Container>
    );
}