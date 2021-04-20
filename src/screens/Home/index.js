import React, { useEffect, useState } from 'react'
import { View, Container, Body, Title, Header, Right, Left } from 'native-base'
import BreedList from './components/BreedList'
import { getBreedList } from '../../api'


const Home = (props) => {

    const [page, setPage] = useState(1)
    const [allData, setAllData] = useState([])
    const [breeds, setBreeds] = useState([])
    const [refreshing, setRefreshing] = useState(false)


    const getBreeds = async () => {
        setRefreshing(true)
        const response = await getBreedList()
        setAllData(response)
        setRefreshing(false)
    }

    const refresh = () => {
        getBreeds()
    }

    const loadMore = async () => {
        const numberPages = Math.ceil(allData.length / 10)
        if (page <= numberPages) {
            let data = []
            const init = (page - 1) * 10
            const end = init + 10
            if (page === 1) {
                data = [...allData.slice(init, 10)]
            } else {
                data = [...breeds, ...allData.slice(init, end)]
            }
            setBreeds(data)
            setPage(page)
        }
    }

    useEffect(() => {
        getBreeds()
    }, [])

    useEffect(() => {
        loadMore(page)
    }, [allData, page])

    return (
        <Container>
            <Header>
                <Left />
                <Body>
                    <Title>Home</Title>
                </Body>
                <Right />
            </Header>
            <View style={{ flex: 1 }}>
                <BreedList navigation={props.navigation} numberPages={Math.ceil(allData.length / 10)} refreshing={refreshing} update={refresh}  data={breeds} setPage={setPage} page={page} />
            </View>
        </Container>
    )
}

export default Home